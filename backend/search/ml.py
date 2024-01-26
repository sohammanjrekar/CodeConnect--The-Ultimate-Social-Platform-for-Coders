# ml.py
import scipy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import joblib
from django.utils import timezone
from .models import UserSearchHistory

def load_tfidf_model():
    # Load the pre-trained TF-IDF model
    tfidf_vectorizer = joblib.load('tfidf_vectorizer.pkl')
    tfidf_matrix = joblib.load('tfidf_matrix.pkl')
    return tfidf_vectorizer, tfidf_matrix

def save_tfidf_model(tfidf_vectorizer, tfidf_matrix):
    # Save the updated TF-IDF model
    joblib.dump(tfidf_vectorizer, 'tfidf_vectorizer.pkl')
    joblib.dump(tfidf_matrix, 'tfidf_matrix.pkl')

def generate_recommendations(query, search_history):
    # Load the pre-trained TF-IDF model
    tfidf_vectorizer, tfidf_matrix = load_tfidf_model()

    # Example: Using TF-IDF and cosine similarity for recommendation
    search_queries = list(search_history.values_list('query', flat=True))
    search_queries.append(query)

    # Transform the new query using the loaded TF-IDF model
    query_vector = tfidf_vectorizer.transform([query])

    # Update the TF-IDF matrix with the new query
    tfidf_matrix = update_tfidf_matrix(tfidf_matrix, query_vector)

    # Save the updated TF-IDF model
    save_tfidf_model(tfidf_vectorizer, tfidf_matrix)

    # Calculate similarity scores
    similarity_scores = cosine_similarity(query_vector, tfidf_matrix)[0]

    return [
        search_queries[idx]
        for idx in similarity_scores.argsort()[:-6:-1]
        if idx != len(search_queries)
    ]

def update_tfidf_matrix(tfidf_matrix, query_vector):
    # Update the TF-IDF matrix with the new query vector
    return scipy.sparse.vstack([tfidf_matrix, query_vector])
