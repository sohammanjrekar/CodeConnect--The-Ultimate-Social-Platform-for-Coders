from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView
from django.db import models
from rest_framework.response import Response
from .models import User, Post, Comment
from post.scripts import fetch_posts_based_on_ml
from post.serializers import UserSerializer, PostSerializer, CommentSerializer
from rest_framework import status
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True

    def soft_delete(self):
        self.is_active = False
        self.save()

    def hard_delete(self):
        super(BaseModel, self).delete()

    def get_created_at_formatted(self):
        return self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def get_updated_at_formatted(self):
        return self.updated_at.strftime('%Y-%m-%d %H:%M:%S')

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now()
        super(BaseModel, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.__class__.__name__} (ID: {self.id})"

class User(BaseModel):
    
    def __str__(self):
        return self.username
class PostListView(APIView):
    def get(self, request):
        # Assuming you have a logged-in user
        user = request.user

        # Assuming you have user preferences like languages, keywords, and friends
        user_languages = ["Python", "JavaScript"]
        user_keywords = ["web development", "machine learning"]
        user_friends = ["friend1", "friend2"]

        # Get or create the user profile
        user_profile, created = User.objects.get_or_create(user=user)

        # Fetch posts based on ML
        ml_posts = user_profile.fetch_posts_based_on_ml(user_languages, user_keywords, user_friends)

        # Serialize posts and comments
        post_data = PostSerializer(ml_posts, many=True).data

        # Add comment data to each post
        for post in post_data:
            post['comment_count'] = len(post['comments'])
            post['comments'] = CommentSerializer(post['comments'], many=True).data

        response_data = {'posts': post_data}

        return Response(response_data)

class CommentView(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, id=post_id)
        comment_content = request.data.get('content')  # Assuming you use POST data

        comment = Comment.objects.create(user=request.user, post=post, content=comment_content)

        response_data = CommentSerializer(comment).data
        return Response(response_data)

from rest_framework import status
from rest_framework.decorators import action
from .nlp_utils import extract_keywords

class LikeView(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, id=post_id)
        post.likes += 1
        post.save()

        # Trigger the background task for keyword extraction
        extract_keywords_task.delay(post.content)

        response_data = {
            'likes': post.likes,
            'message': 'Keyword extraction is in progress. Check back later for results.',
        }

        return Response(response_data, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
