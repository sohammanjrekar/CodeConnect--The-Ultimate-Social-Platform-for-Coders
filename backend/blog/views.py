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

import cloudinary
          
cloudinary.config( 
  cloud_name = "dp6odhftt", 
  api_key = "834371186813391", 
  api_secret = "QPxYCBttNcO25u-vHVi6iOclkbw" 
)

import cloudinary.uploader
  
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
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from rest_framework.response import Response
@method_decorator(never_cache, name='dispatch')
@authentication_classes([])
@permission_classes([AllowAny])
class SearchBlogPosts(ListAPIView):
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        queryset = BlogPost.objects.all()
        search_query = self.request.GET.get('query')
        
        if search_query:
            # Split the search query into individual keywords
            keywords = search_query.split()
            
            # Create a Q object to build the query dynamically
            query = Q()
            for keyword in keywords:
                query |= Q(title__icontains=keyword) | Q(content__icontains=keyword)
            
            # Filter queryset based on the dynamic query
            queryset = queryset.filter(query)
            
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        
        # Send the total count of search results along with the response
        count = queryset.count()
        
        return Response({
            'count': count,
            'results': serializer.data
        })


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

    def post(self, request, *args, **kwargs):
        image_file = request.data.get('featured_image')
        print(image_file)

        if not image_file:
            return Response({"error": "Please provide a featured image."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            print("Request body:", request.data)  # Print request body
            print("Image file name:", image_file.name)  # Print image file name

            # Assuming 'featured_image' is the key for the image file in the request data
            if isinstance(image_file, str):
                # If 'featured_image' is a string, assume it's a URL
                featured_image_url = image_file
            else:
                # Otherwise, it's an image file, upload it
                # You can handle image upload to cloud storage like Cloudinary here
                # Example code:
                cloudinary_response = cloudinary.uploader.upload(
                    image_file,
                    folder="BlogPosts",
                )
                if cloudinary_response['secure_url']:
                    featured_image_url = cloudinary_response['secure_url']
                else:
                    return Response({"error": "Failed to upload image."}, status=status.HTTP_400_BAD_REQUEST)

            print("Uploaded image URL:", featured_image_url)  # Print uploaded image URL

            # Assuming you have implemented the BlogPost model
            blog_post_data = {
                'title': request.data.get('title', ''),
                'content': request.data.get('content', ''),
                'author': 1,
                'featured_image': featured_image_url,
                'categories': request.data.get('categories', []),
                'tags': request.data.get('tags', []),
                'likes': request.data.get('likes', 0),
                'dislikes': request.data.get('dislikes', 0),
                'is_published': request.data.get('is_published', False),
            }
            print(blog_post_data)
            serializer = self.get_serializer(data=blog_post_data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    
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
    


