# codecollaboration/models.py
from django.db import models
from account.models import User

class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
class CodeSnippet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='code_snippets')
    keyword = models.ManyToManyField(Keyword, related_name='code_keyword', blank=True)
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
    
    
class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="code_user")  # Assuming you have a User model in your 'account' app
    post = models.ForeignKey(CodeSnippet, on_delete=models.CASCADE)  # Assuming you have a Post model in your 'post' app
    interaction_type = models.CharField(max_length=20,default="")  # Interaction type: e.g., like, comment, share
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.post.title} - {self.interaction_type}"

