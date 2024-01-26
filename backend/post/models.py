from django.db import models
from account.models import User, BaseModel
from django.utils import timezone

class Hashtag(BaseModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Post(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    hashtags = models.ManyToManyField(Hashtag, related_name='posts', blank=True)
    likes = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='post_images/', blank=True, null=True)
    comment_count = models.PositiveIntegerField(default=0)  # New field for comment count

    def update_comment_count(self):
        self.comment_count = self.comments.filter(is_active=True).count()
        self.save()

    def __str__(self):
        return f"Post by {self.user.username} (ID: {self.id})"


class Comment(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    hashtags = models.ManyToManyField(Hashtag, related_name='comments', blank=True)

    def __str__(self):
        return f"Comment by {self.user.username} on Post {self.post.id} (ID: {self.id})"
