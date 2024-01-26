# ml.py
from sklearn.feature_extraction.text import TfidfVectorizer
from jobportal.models import JobPosting, Skill
from sklearn.metrics.pairwise import linear_kernel
from account.models import  ProgrammingLanguage, Keyword
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

    def get_job_recommendations(self, user_skills, user_keywords, user_languages):
        all_job_postings = JobPosting.objects.all()

        # Preprocess job descriptions for TF-IDF
        job_descriptions = [self.preprocess_text(job.description) for job in all_job_postings]

        if not self.vectorizer:
            tfidf_matrix = self.create_tfidf_vectorizer(job_descriptions)
        else:
            tfidf_matrix = self.vectorizer.transform(job_descriptions)

        # Calculate similarity between user preferences and job descriptions
        cosine_similarities = self.calculate_similarity(user_skills, user_keywords, user_languages, tfidf_matrix)

        # Rank job postings based on similarity scores
        ranked_job_postings_indices = np.argsort(cosine_similarities)[::-1]
        recommended_job_postings = [all_job_postings[idx] for idx in ranked_job_postings_indices]

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
