# models.py (Assuming you have a User model)
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    programming_languages = models.ManyToManyField('ProgrammingLanguage', related_name='users')

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50)

class CodeSnippet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    programming_language = models.ForeignKey(ProgrammingLanguage, on_delete=models.CASCADE)
    snippet_text = models.TextField()
