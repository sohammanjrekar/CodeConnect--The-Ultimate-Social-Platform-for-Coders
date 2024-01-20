# jobportal/models.py
from django.db import models
from django.contrib.auth.models import User

class JobCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Benefit(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class JobPosting(models.Model):
    title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    description = models.TextField()
    requirements = models.TextField()
    skills_required = models.ManyToManyField(Skill, related_name='job_postings', blank=True)
    benefits = models.ManyToManyField(Benefit, related_name='job_postings', blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    posted_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    categories = models.ManyToManyField(JobCategory, related_name='job_postings')
    application_email = models.EmailField()
    application_deadline = models.DateTimeField(null=True, blank=True)
    salary_min = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    salary_max = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    application_tracking_link = models.URLField(blank=True)

    def __str__(self):
        return f"{self.title} at {self.company_name}"
