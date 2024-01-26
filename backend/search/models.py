from django.db import models
from django.contrib.auth.models import User
from django.db.models import F, ExpressionWrapper, fields
from django.utils import timezone

class UserSearchHistoryManager(models.Manager):
    MAX_RESULTS = 200

    def add_result(self, user, query, result):
        # Increment count for existing result or create a new one
        result_obj, created = self.update_or_create(
            user=user,
            query=query,
            result=result,
            defaults={'timestamp': timezone.now()},
        )
        if not created:
            # Increment count and update timestamp using F() expressions
            result_obj.update_count()

        # Remove the least frequently used results if the count exceeds the limit
        self.remove_least_frequent_results(user)

    def remove_least_frequent_results(self, user):
        result_count = self.filter(user=user).count()

        if result_count > self.MAX_RESULTS:
            excess_count = result_count - self.MAX_RESULTS

            # Use annotate and delete to remove the least frequently used results
            least_frequent_results = (
                self.filter(user=user)
                .annotate(adjusted_count=ExpressionWrapper(F('count') - 1, output_field=fields.PositiveIntegerField()))
                .order_by('adjusted_count', 'timestamp')[:excess_count]
            )
            least_frequent_results.delete()

class UserSearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    query = models.CharField(max_length=255)
    result = models.CharField(max_length=255)  # Add a field to store the search result
    count = models.PositiveIntegerField(default=1)
    timestamp = models.DateTimeField(auto_now_add=True)

    objects = UserSearchHistoryManager()

    class Meta:
        unique_together = ['user', 'query', 'result']
        ordering = ['-count', '-timestamp']

    def __str__(self):
        return f"{self.user.username}'s search history: {self.query} - {self.result}"

    def update_count(self):
        # Use F() expression to increment the count without fetching the object from the database
        self.update(count=F('count') + 1)
