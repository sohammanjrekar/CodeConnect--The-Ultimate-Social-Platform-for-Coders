# blog/views.py
from rest_framework import generics
from .models import Category, Tag, BlogPost, Comment
from .serializers import CategorySerializer, TagSerializer, BlogPostSerializer, CommentSerializer
from rest_framework import status
from django.db.models import Q
# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import BlogPost
from .ml import BlogRecommendation
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes

from rest_framework.pagination import PageNumberPagination
class TagPagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'page'
    page_size_query_param = 'page_size'
    max_page_size = 100

class CategoryPagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'page'
    page_size_query_param = 'page_size'
    max_page_size = 100
class BlogPostPagination(PageNumberPagination):
    page_size = 12
    page_query_param = 'page'
    page_size_query_param = 'page_size'
    max_page_size = 1000

@authentication_classes([])
@permission_classes([AllowAny])
class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = TagPagination

@authentication_classes([])
@permission_classes([AllowAny])
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = CategoryPagination




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
from rest_framework.generics import ListAPIView
@authentication_classes([])
@permission_classes([AllowAny])
class SearchBlogPosts(ListAPIView):
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        queryset = BlogPost.objects.all()
        search_query = self.request.GET.get('query')
        if search_query:
            # Make the search case-insensitive by using case-insensitive filter
            queryset = queryset.filter(Q(title__icontains=search_query) | Q(content__icontains=search_query))
        return queryset

@authentication_classes([])
@permission_classes([AllowAny])
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

@authentication_classes([])
@permission_classes([AllowAny])
class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class BlogPostList(generics.ListCreateAPIView):
    queryset = BlogPost.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = BlogPostSerializer
    pagination_class = BlogPostPagination
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
from .serializers import CommentSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class CommentListByPost(APIView):
    serializer_class = CommentSerializer

    def get(self, request, post_id):
        # Fetch all comments for the specified post_id
        comments = Comment.objects.filter(post=post_id)
        serializer = self.serializer_class(comments, many=True)
        return Response(serializer.data)
    
@authentication_classes([])
@permission_classes([AllowAny])
class CommentCreate(APIView):
    serializer_class = CommentSerializer

    def post(self, request, post_id):
        try:
            # Check if the blog post exists
            blog_post = BlogPost.objects.get(pk=post_id)
        except BlogPost.DoesNotExist:
            return Response({"error": "Blog post not found."}, status=status.HTTP_404_NOT_FOUND)

        # Create a new comment instance with the request data
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # Assign the blog post to the comment
            serializer.validated_data['post'] = blog_post
            # Save the comment
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


