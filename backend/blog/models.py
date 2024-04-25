# blog/models.py
from django.db import models
from account.models import User
from django.urls import reverse
from django.utils.text import slugify
from django.db import IntegrityError

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        # Check for duplicate slug and append a unique suffix if necessary
        if Category.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            suffix = 1
            while Category.objects.filter(slug=self.slug + f'-{suffix}').exists():
                suffix += 1
            self.slug = f"{self.slug}-{suffix}"
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        # Check for duplicate slug and append a unique suffix if necessary
        if Tag.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            suffix = 1
            while Tag.objects.filter(slug=self.slug + f'-{suffix}').exists():
                suffix += 1
            self.slug = f"{self.slug}-{suffix}"
        super(Tag, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    categories = models.ManyToManyField(Category, related_name='blog_posts', blank=True)
    tags = models.ManyToManyField(Tag, related_name='blog_posts', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=False)
    featured_image = models.URLField(max_length=2000,null=True) 
    slug = models.SlugField(unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(BlogPost, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('blog:post-detail', args=[str(self.slug)])

    def __str__(self):
        return self.title
    

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_comments')
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.blog.title}"


