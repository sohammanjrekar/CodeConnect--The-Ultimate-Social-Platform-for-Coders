# codecollaboration/models.py
from django.db import models
from account.models import User

class CodeSnippet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    code = models.TextField()
    github_link = models.URLField(blank=True, null=True)
    language = models.CharField(max_length=50, blank=True)
    tags = models.ManyToManyField('Tag', related_name='code_snippets')
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    attachments = models.ManyToManyField('CodeAttachment', related_name='code_snippets', blank=True)

    def __str__(self):
        return self.title

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class CodeReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code_snippet = models.ForeignKey(CodeSnippet, on_delete=models.CASCADE, related_name='reviews')
    content = models.TextField()
    rating = models.PositiveIntegerField(default=0)  # Rating on a scale of 1 to 5
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Review by {self.user.username} on {self.code_snippet.title}"

class CodeAttachment(models.Model):
    file = models.FileField(upload_to='code_attachments/')
    description = models.TextField(blank=True)

    def __str__(self):
        return f"Attachment: {self.file.name}"

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='codereview_comments')
    code_snippet = models.ForeignKey(CodeSnippet, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.code_snippet.title}"
