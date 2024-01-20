from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)

class CodeArtwork(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    code = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)