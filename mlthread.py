from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import Project, ProgrammingLanguage
import joblib
import os
import numpy as np
from concurrent.futures import ThreadPoolExecutor
import threading
import time

class MLPredictionWithThread:
    MODEL_DUMP_PATH = 'ml_model.joblib'

    def __init__(self):
        self.vectorizer = None
        self.load_model()

    def preprocess_text(self, text):
        return text.lower()

    def create_tfidf_vectorizer(self, project_data):
        preprocessed_descriptions = [self.preprocess_text(data['description']) for data in project_data]

        vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = vectorizer.fit_transform(preprocessed_descriptions)

        joblib.dump(vectorizer, self.MODEL_DUMP_PATH)

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
        all_projects = Project.objects.all()

        project_data = [{'description': project.description, 'title': project.title,
                         'domain': project.domain, 'languages': project.languages.all(),
                         'tools': project.tools.all()} for project in all_projects]

        if not self.vectorizer:
            tfidf_matrix = self.create_tfidf_vectorizer(project_data)
        else:
            tfidf_matrix = self.vectorizer.transform([self.preprocess_text(data['description']) for data in project_data])
            self.create_tfidf_vectorizer(project_data)

        cosine_similarities = self.calculate_similarity(user_preferences, tfidf_matrix)

        ranked_projects_indices = np.argsort(cosine_similarities)[::-1]
        recommended_projects = [all_projects[idx] for idx in ranked_projects_indices]

        return recommended_projects

    def run_in_parallel(self, user_preferences_list):
        with ThreadPoolExecutor(max_workers=5) as executor:
            def get_recommendations_for_user(user_preferences):
                return self.get_project_recommendations(user_preferences)

            futures = [executor.submit(get_recommendations_for_user, user_preferences) for user_preferences in user_preferences_list]

            threading.current_thread().name = 'MainThread'
            print("Main thread waiting for parallel threads to finish...")
            for future in futures:
                future.result()

            recommendations_for_users = [future.result() for future in futures]

        return recommendations_for_users

if __name__ == "__main__":
    ml_predictor = MLPredictionWithThread()

    # Define multiple sets of user preferences
    user_preferences_list = [
        ['python', 'machine learning'],
        ['java', 'web development'],
        # Add more sets of user preferences as needed
    ]

    start_time = time.time()
    recommendations = ml_predictor.run_in_parallel(user_preferences_list)
    end_time = time.time()

    print(f"Total execution time: {end_time - start_time} seconds")

    # Process and print recommendations as needed
    for i, user_preferences in enumerate(user_preferences_list):
        print(f"\nRecommendations for User {i + 1} with preferences {user_preferences}:")
        for project in recommendations[i]:
            print(f"- {project.title}")
