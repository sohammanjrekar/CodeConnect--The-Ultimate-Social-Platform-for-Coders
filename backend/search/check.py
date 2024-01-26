# check.py
from ml import generate_recommendations
from models import UserSearchHistory

# Sample queries
sample_queries = [
    "python web development",
    "machine learning tutorials",
    "django vs flask",
    "best IDE for Java",
    "data science projects",
]

# Sample user search history
user_search_history = UserSearchHistory.objects.filter(user__username='sample_user')

# Test the generate_recommendations function
for query in sample_queries:
    print(f"\nQuery: {query}")
    recommendations = generate_recommendations(query, user_search_history)
    print("Recommendations:", recommendations)
