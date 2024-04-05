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
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes

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
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes

@authentication_classes([])
@permission_classes([AllowAny])
class PostListView(APIView):
    def get(self, request):
        page = int(request.GET.get('page', 1))
        per_page = 5
        start_index = (page - 1) * per_page
        end_index = page * per_page
        
        posts = Post.objects.all()[start_index:end_index]
        post_data = PostSerializer(posts, many=True).data
        
        response_data = {'posts': post_data}
        
        return Response(response_data)

@authentication_classes([])
@permission_classes([AllowAny])
class CommentView(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, id=post_id)
        comment_content = request.data.get('content')  # Assuming you use POST data

        comment = Comment.objects.create(user=request.user, post=post, content=comment_content)

        response_data = CommentSerializer(comment).data
        return Response(response_data)

@authentication_classes([])
@permission_classes([AllowAny])
class LikeView(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, id=post_id)
        post.likes += 1
        post.save()

        response_data = {
            'likes': post.likes,
            'message': 'Post liked successfully.',
        }

        return Response(response_data, status=status.HTTP_200_OK)

@authentication_classes([])
@permission_classes([AllowAny])
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
