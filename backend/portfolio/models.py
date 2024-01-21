# portfolio/models.py
from django.db import models
from django.contrib.auth.models import User

class ProjectCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    collaborators = models.ManyToManyField(User, related_name='portfolio_collaborated_projects')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_published = models.BooleanField(default=True)
    technologies_used = models.ManyToManyField(Technology, related_name='projects', blank=True)
    categories = models.ManyToManyField(ProjectCategory, related_name='projects', blank=True)
    project_images = models.ManyToManyField('ProjectImage', related_name='projects', blank=True)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='project_image', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return f"Image for {self.project.title}"

class Resume(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    resume_file = models.FileField(upload_to='resumes/')
    education = models.TextField(blank=True)
    work_experience = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    contact_information = models.TextField(blank=True)

    def __str__(self):
        return f"Resume for {self.user.username}"
