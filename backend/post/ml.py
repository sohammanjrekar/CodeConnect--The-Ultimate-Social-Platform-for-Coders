import json
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import Keyword, UserBehavior, User
from account.models import UserKeyword

class PostRecommendation:
    def __init__(self):
        self.vectorizer = None
        self.load_or_create_vectorizer()

    def preprocess_text(self, text):
        # Simple text preprocessing: lowercasing
        return text.lower()

    def load_or_create_vectorizer(self):
        try:
            # Attempt to load the vectorizer from disk
            self.vectorizer = joblib.load('tfidf_vectorizer.joblib')
        except FileNotFoundError:
            # If file not found, create a new vectorizer
            self.vectorizer = TfidfVectorizer(stop_words='english')

    def create_tfidf_matrix(self, texts):
        preprocessed_texts = [self.preprocess_text(text) for text in texts]
        tfidf_matrix = self.vectorizer.fit_transform(preprocessed_texts)
        return tfidf_matrix

    def calculate_similarity(self, matrix1, matrix2):
        return linear_kernel(matrix1, matrix2)

    def fetch_user_keywords(self, user_id):
        user_keywords = UserKeyword.objects.filter(user__id=user_id).values_list('keyword__text', flat=True)
        return list(user_keywords)



    def fetch_user_behaviors(self, user_id):
        behaviors = UserBehavior.objects.filter(user_id=user_id)
        return behaviors

    def generate_content_based_recommendations(self, user_id, user_keywords, post_keywords):
        tfidf_matrix_user = self.create_tfidf_matrix([user_keywords])
        tfidf_matrix_post = self.create_tfidf_matrix(post_keywords)

        similarity_score = self.calculate_similarity(tfidf_matrix_user, tfidf_matrix_post)[0][0]
        return similarity_score

    def generate_personalized_recommendations(self, user_id):
        user_keywords = self.fetch_user_keywords(user_id)
        user_behaviors = self.fetch_user_behaviors(user_id)

        personalized_recommendations = {}
        for behavior in user_behaviors:
            post_keywords = self.fetch_post_keywords(behavior.post_id)
            content_score = self.generate_content_based_recommendations(user_id, user_keywords, post_keywords)
            personalized_recommendations[behavior.post_id] = content_score

        sorted_recommendations = sorted(personalized_recommendations.items(), key=lambda x: x[1], reverse=True)
        return sorted_recommendations

    def generate_hybrid_recommendations(self, user_id):
        user_keywords = self.fetch_user_keywords(user_id)
        user_behaviors = self.fetch_user_behaviors(user_id)

        content_based_recommendations = {}
        collaborative_filtering_recommendations = {}

        for behavior in user_behaviors:
            post_keywords = self.fetch_post_keywords(behavior.post_id)
            content_score = self.generate_content_based_recommendations(user_id, user_keywords, post_keywords)
            content_based_recommendations[behavior.post_id] = content_score

        collaborative_filtering_recommendations = self.generate_collaborative_filtering_recommendations(user_id, user_behaviors)

        # Merge content-based and collaborative filtering recommendations
        hybrid_recommendations = {**content_based_recommendations, **collaborative_filtering_recommendations}
        sorted_recommendations = sorted(hybrid_recommendations.items(), key=lambda x: x[1], reverse=True)
        return sorted_recommendations

    def fetch_post_keywords(self, post_id):
        keywords = Keyword.objects.filter(posts_keyword__id=post_id).values_list('text', flat=True)
        return list(keywords)

    def save_recommendations_to_user(self, user_id, recommendations):
        try:
            user_instance = User.objects.get(id=user_id)
            user_instance.post_predictions = json.dumps(recommendations)
            user_instance.save()
            return True
        except User.DoesNotExist:
            return False

    def save_vectorizer_model(self):
        # Dump the vectorizer model to disk
        joblib.dump(self.vectorizer, 'tfidf_vectorizer.joblib')
