from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import CodeSnippet, User

class CodeSnippetRecommendation:

    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.load_model()

    def preprocess_text(self, text):
        # Add your text preprocessing logic here (e.g., lowercasing, removing stop words)
        # For demonstration, let's use a simple lowercasing
        return text.lower()

    def create_tfidf_vectorizer(self, snippet_texts):
        preprocessed_snippets = [self.preprocess_text(snippet) for snippet in snippet_texts]

        tfidf_matrix = self.vectorizer.fit_transform(preprocessed_snippets)

        return tfidf_matrix

    def load_model(self):
        # You can add model loading logic if required
        pass

    def get_snippet_recommendations(self, user_id):
        user = User.objects.get(pk=user_id)

        # Get all snippets in the same programming language as the user
        relevant_snippets = CodeSnippet.objects.filter(programming_language__in=user.programming_languages.all())

        # Extract snippet texts
        snippet_texts = [snippet.snippet_text for snippet in relevant_snippets]

        if not snippet_texts:
            return []

        # If the vectorizer is not fitted, create and dump a new one
        if not hasattr(self.vectorizer, 'vocabulary_'):
            tfidf_matrix = self.create_tfidf_vectorizer(snippet_texts)
        else:
            # Use the existing vectorizer
            tfidf_matrix = self.vectorizer.transform(snippet_texts)

        # Calculate similarity between user preferences and snippet texts
        cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)

        # Rank snippets based on similarity scores
        ranked_snippets_indices = cosine_similarities[-1].argsort()[:-5:-1]
        recommended_snippets = [relevant_snippets[idx] for idx in ranked_snippets_indices]

        return recommended_snippets
