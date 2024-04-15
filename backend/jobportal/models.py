# jobportal/models.py
from django.db import models
from account.models import User
from django.utils.text import slugify

class JobCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True, editable=False)
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        # Check for duplicate slug and append a unique suffix if necessary
        if JobCategory.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            suffix = 1
            while JobCategory.objects.filter(slug=self.slug + f'-{suffix}').exists():
                suffix += 1
            self.slug = f"{self.slug}-{suffix}"
        super(JobCategory, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        # Check for duplicate slug and append a unique suffix if necessary
        if Skill.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            suffix = 1
            while Skill.objects.filter(slug=self.slug + f'-{suffix}').exists():
                suffix += 1
            self.slug = f"{self.slug}-{suffix}"
        super(Skill, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Benefit(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        # Check for duplicate slug and append a unique suffix if necessary
        if Benefit.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            suffix = 1
            while Benefit.objects.filter(slug=self.slug + f'-{suffix}').exists():
                suffix += 1
            self.slug = f"{self.slug}-{suffix}"
        super(Benefit, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Person(models.Model):
    ROLE_CHOICES = [
        ('Creator', 'Creator'),
        ('Admin', 'Admin'),
        ('Leader Helper', 'Leader Helper'),
        ('Head Leader', 'Head Leader'),
        ('Web Developer', 'Web Developer'),
        ('Master', 'Master'),
        ('Leader', 'Leader'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)

    def __str__(self):
        return self.user.name

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
    persons = models.ManyToManyField(Person, related_name='job_postings', blank=True)

    def __str__(self):
        return f"{self.title} at {self.company_name}"


