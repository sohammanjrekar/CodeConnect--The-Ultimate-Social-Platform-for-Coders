# search/models.py
from django.db import models
from django.contrib.auth.models import User

class SearchResult(models.Model):
    query = models.CharField(max_length=255)
    results = models.TextField()

    def __str__(self):
        return f"Search result for '{self.query}'"

class UserSearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    query = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s search history: {self.query}"

class SearchResultRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    result = models.ForeignKey(SearchResult, on_delete=models.CASCADE)
    rating_choices = [
        (1, 'Not helpful'),
        (2, 'Somewhat helpful'),
        (3, 'Helpful'),
        (4, 'Very helpful'),
        (5, 'Extremely helpful'),
    ]
    rating = models.IntegerField(choices=rating_choices)

    def __str__(self):
        return f"{self.user.username}'s rating for {self.result.query}: {self.get_rating_display()}"

class UserSearchPreference(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    favorite_query = models.CharField(max_length=255, blank=True, null=True)
    preferred_category = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s search preferences"
