import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from jobportal.models import JobPosting
from account.models import ProgrammingLanguage, Keyword
import joblib
import numpy as np

class JobRecommendation:
    MODEL_DUMP_PATH = 'job_recommendation_model.joblib'

    def __init__(self):
        self.vectorizer = None
        self.load_model()

    def preprocess_text(self, text):
        # Simple text preprocessing: lowercasing
        return text.lower()

    def create_tfidf_vectorizer(self, job_descriptions):
        preprocessed_descriptions = [self.preprocess_text(description) for description in job_descriptions]

        vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = vectorizer.fit_transform(preprocessed_descriptions)

        joblib.dump(vectorizer, self.MODEL_DUMP_PATH)

        return tfidf_matrix

    def load_model(self):
        if os.path.exists(self.MODEL_DUMP_PATH):
            self.vectorizer = joblib.load(self.MODEL_DUMP_PATH)

    def get_job_recommendations(self, user_skills, user_keywords, user_languages, user_id):
        all_job_postings = JobPosting.objects.all()

        # Preprocess job descriptions for TF-IDF
        job_descriptions = [self.preprocess_text(job.description) for job in all_job_postings]

        if not self.vectorizer:
            # If pre-trained model is not available, create and save a new one
            tfidf_matrix = self.create_tfidf_vectorizer(job_descriptions)
        else:
            tfidf_matrix = self.vectorizer.transform(job_descriptions)

        # Calculate similarity between user preferences and job descriptions using content-based filtering
        cosine_similarities_content = self.calculate_similarity(user_skills, user_keywords, user_languages, tfidf_matrix)

        # Fetch user interactions with job postings (collaborative filtering)
        user_interactions = UserJobInteraction.objects.filter(user_id=user_id)

        # Create user-item interaction matrix
        user_item_matrix = np.zeros((len(all_job_postings),))
        for interaction in user_interactions:
            user_item_matrix[interaction.job_posting_id - 1] = 1  # Assuming job_posting_id starts from 1

        # Calculate similarity between user interactions and job postings using collaborative filtering
        cosine_similarities_collab = linear_kernel([user_item_matrix], tfidf_matrix).flatten()

        # Combine content-based and collaborative filtering scores
        combined_scores = 0.5 * cosine_similarities_content + 0.5 * cosine_similarities_collab

        # Rank job postings based on combined scores
        ranked_job_postings_indices = np.argsort(combined_scores)[::-1]
        recommended_job_postings = [all_job_postings[idx] for idx in ranked_job_postings_indices]

        # Save the latest model after prediction
        joblib.dump(self.vectorizer, self.MODEL_DUMP_PATH)

        return recommended_job_postings

    def calculate_similarity(self, user_skills, user_keywords, user_languages, tfidf_matrix):
        # Combine user information into a single string for comparison
        user_info = " ".join(user_skills + user_keywords + user_languages)

        # Preprocess user information
        preprocessed_user_info = [self.preprocess_text(user_info)]

        # Transform user information using the same TF-IDF vectorizer
        user_info_matrix = self.vectorizer.transform(preprocessed_user_info)

        # Calculate cosine similarities between user and job descriptions
        cosine_similarities = linear_kernel(user_info_matrix, tfidf_matrix).flatten()

        return cosine_similarities
