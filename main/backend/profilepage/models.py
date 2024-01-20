# models.py
from django.db import models

class DeveloperProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Assuming User model exists
    bio = models.TextField()
    skills = models.TextField()
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists
    created_at = models.DateTimeField(auto_now_add=True)