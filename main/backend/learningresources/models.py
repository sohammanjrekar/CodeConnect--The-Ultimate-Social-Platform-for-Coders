from django.db import models

class LearningResource(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    contributor = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists
    created_at = models.DateTimeField(auto_now_add=True)
