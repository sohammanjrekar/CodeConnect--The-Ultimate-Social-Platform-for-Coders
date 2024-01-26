# scripts.py
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import joblib
from .models import Post

def create_tfidf_vectorizer(posts_content):
    vectorizer = TfidfVectorizer()
    posts_matrix = vectorizer.fit_transform(posts_content)
    return joblib.dumps(vectorizer)

def fetch_posts_based_on_ml(user_profile, user_languages, user_keywords, user_friends):
    if not user_profile.tfidf_vectorizer:
        all_posts = Post.objects.filter(is_active=True)
        posts_content = [post.content for post in all_posts]
        user_profile.tfidf_vectorizer = create_tfidf_vectorizer(posts_content)
        user_profile.save()

    vectorizer = joblib.loads(user_profile.tfidf_vectorizer)

    # Additional application-specific logic
    # For example, calculate similarity scores and sort posts
    user_preferences = user_languages + user_keywords + user_friends
    user_preferences_matrix = vectorizer.transform([', '.join(user_preferences)])

    similarity_scores = cosine_similarity(user_preferences_matrix, posts_matrix).flatten()

    # Sort posts based on similarity scores
    sorted_posts = [post for _, post in sorted(zip(similarity_scores, all_posts), reverse=True)]
    user_profile.tfidf_vectorizer = create_tfidf_vectorizer(posts_content)
    return sorted_posts
