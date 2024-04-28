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

class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text

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
    keyword = models.ManyToManyField(Keyword, related_name='job_keyword', blank=True)
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
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    persons = models.ManyToManyField(Person, related_name='job_postings', blank=True)
    logo = models.URLField(max_length=2000,null=True) 

    def __str__(self):
        return f"{self.title} at {self.company_name}"


class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="jobs_user")  # Assuming you have a User model in your 'account' app
    post = models.ForeignKey(JobPosting, on_delete=models.CASCADE)  # Assuming you have a Post model in your 'post' app
    interaction_type = models.CharField(max_length=20,default="")  # Interaction type: e.g., like, comment, share
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.post.title} - {self.interaction_type}"

