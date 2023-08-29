# models.py
from django.db import models

class TechStack(models.Model):
    name = models.CharField(max_length=100)

class ProjectRecommendation(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    recommended_tech_stack = models.ManyToManyField(TechStack)
