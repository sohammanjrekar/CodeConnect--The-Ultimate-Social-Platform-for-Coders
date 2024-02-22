# blog/views.py
from rest_framework import generics
from .models import Category, Tag, BlogPost, Comment
from .serializers import CategorySerializer, TagSerializer, BlogPostSerializer, CommentSerializer

# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import BlogPost
from .ml import BlogRecommendation
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
@authentication_classes([])
@permission_classes([AllowAny])
class BlogRecommendationView(APIView):
    def get(self, request, user_id):
        blog_recommendation = BlogRecommendation()
        recommended_posts = blog_recommendation.get_blog_recommendations(user_id)

        serialized_posts = self.serialize_posts(recommended_posts)

        return JsonResponse({'posts': serialized_posts})

    def serialize_posts(self, posts):
        serialized_posts = [
            {
                'id': post.id,
                'title': post.title,
                'author': post.author.username,
                'content': post.content,
                'created_at': post.created_at,
                'likes_count': post.likes,
                'is_published': post.is_published,
                'slug': post.slug,
            }
            for post in posts
        ]

        return serialized_posts


@authentication_classes([])
@permission_classes([AllowAny])
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
@authentication_classes([])
@permission_classes([AllowAny])
class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class BlogPostList(generics.ListCreateAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class BlogPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
