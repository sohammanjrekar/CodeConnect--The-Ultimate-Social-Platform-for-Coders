from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import Project, ProgrammingLanguage
import joblib
import os
import numpy as np

class MLPrediction:
    MODEL_DUMP_PATH = 'ml_model.joblib'

    def __init__(self):
        self.vectorizer = None
        self.load_model()

    def preprocess_text(self, text):
        # Simple text preprocessing: lowercasing
        return text.lower()

    def create_tfidf_vectorizer(self, project_data):
        # Preprocess project data for TF-IDF
        preprocessed_descriptions = [self.preprocess_text(data['description']) for data in project_data]

        vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = vectorizer.fit_transform(preprocessed_descriptions)

        joblib.dump(vectorizer, self.MODEL_DUMP_PATH)  # Dump the vectorizer to disk

        return tfidf_matrix

    def calculate_similarity(self, user_preferences, tfidf_matrix):
        user_vectorizer = TfidfVectorizer(stop_words='english')
        user_description = ', '.join(user_preferences)
        user_tfidf_vector = user_vectorizer.fit_transform([self.preprocess_text(user_description)])

        cosine_similarities = linear_kernel(user_tfidf_vector, tfidf_matrix).flatten()

        return cosine_similarities

    def load_model(self):
        if os.path.exists(self.MODEL_DUMP_PATH):
            self.vectorizer = joblib.load(self.MODEL_DUMP_PATH)

    def get_project_recommendations(self, user_preferences):
        # Get all projects
        all_projects = Project.objects.all()

        # Preprocess project data for TF-IDF
        project_data = [{'description': project.description, 'title': project.title,
                         'domain': project.domain, 'languages': project.languages.all(),
                         'tools': project.tools.all()} for project in all_projects]

        if not self.vectorizer:
            # If the vectorizer is not loaded, create and dump a new one
            tfidf_matrix = self.create_tfidf_vectorizer(project_data)
        else:
            # Use the existing vectorizer
            tfidf_matrix = self.vectorizer.transform([self.preprocess_text(data['description']) for data in project_data])
            self.create_tfidf_vectorizer(project_data) # create a new vectorizer and dump it to disk

        # Calculate similarity between user preferences and project descriptions
        cosine_similarities = self.calculate_similarity(user_preferences, tfidf_matrix)

        # Rank projects based on similarity scores
        ranked_projects_indices = np.argsort(cosine_similarities)[::-1]
        recommended_projects = [all_projects[idx] for idx in ranked_projects_indices]

        return recommended_projects
