from itertools import combinations
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import LanguageExchangeProfile

class LanguageExchangeRecommendation:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')

    def preprocess_text(self, text):
        # Simple text preprocessing: lowercasing
        return text.lower()

    def create_tfidf_matrix(self, texts):
        preprocessed_texts = [self.preprocess_text(text) for text in texts]
        tfidf_matrix = self.vectorizer.fit_transform(preprocessed_texts)
        return tfidf_matrix

    def calculate_similarity(self, matrix1, matrix2):
        return linear_kernel(matrix1, matrix2)

    def generate_recommendations(self, user1, user2):
        # Extract relevant information from user profiles
        user1_text = f"{user1.bio} {' '.join(user1.collaboration_interests.values_list('name', flat=True))}"
        user2_text = f"{user2.bio} {' '.join(user2.collaboration_interests.values_list('name', flat=True))}"

        print(f"User1 Text: {user1_text}")
        print(f"User2 Text: {user2_text}")

        # Preprocess and create TF-IDF matrix for user texts
        tfidf_matrix_user1 = self.create_tfidf_matrix([user1_text])
        tfidf_matrix_user2 = self.create_tfidf_matrix([user2_text])

        print(f"TF-IDF Matrix User1:\n{tfidf_matrix_user1}")
        print(f"TF-IDF Matrix User2:\n{tfidf_matrix_user2}")

        # Calculate similarity between user texts
        similarity_score = self.calculate_similarity(tfidf_matrix_user1, tfidf_matrix_user2)[0][0]

        print(f"Similarity Score: {similarity_score}")

        # Check programming language intersection
        languages_user1 = set(user1.programming_languages.values_list('name', flat=True))
        languages_user2 = set(user2.programming_languages.values_list('name', flat=True))
        language_intersection = languages_user1.intersection(languages_user2)

        print(f"Programming Languages User1: {languages_user1}")
        print(f"Programming Languages User2: {languages_user2}")
        print(f"Language Intersection: {language_intersection}")

        # Generate recommendation score based on shared interests and programming languages
        recommendation_score = similarity_score * len(language_intersection)

        print(f"Recommendation Score: {recommendation_score}")

        return recommendation_score