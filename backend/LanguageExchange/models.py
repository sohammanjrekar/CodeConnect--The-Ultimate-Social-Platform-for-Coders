from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    programming_languages = models.ManyToManyField('ProgrammingLanguage', related_name='learners')

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50)

class MultilingualProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    participants = models.ManyToManyField(User, related_name='projects')
