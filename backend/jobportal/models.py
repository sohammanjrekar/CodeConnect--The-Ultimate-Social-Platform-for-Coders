from django.db import models
from django.contrib.auth.models import User

class Skill(models.Model):
    name = models.CharField(max_length=50)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    skills = models.ManyToManyField(Skill)
    # Other user-related fields

class JobListing(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    required_skills = models.ManyToManyField(Skill)
    # Other job-related fields

class InternshipListing(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    required_skills = models.ManyToManyField(Skill)
    # Other internship-related fields


class JobOpening(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    skills_required = models.TextField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists
    posted_at = models.DateTimeField(auto_now_add=True)
