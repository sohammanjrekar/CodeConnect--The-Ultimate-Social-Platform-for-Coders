from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView
from django.db import models
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
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
from rest_framework.pagination import PageNumberPagination

from rest_framework.pagination import PageNumberPagination

import cloudinary
cloudinary.config( 
  cloud_name = "dp6odhftt", 
  api_key = "834371186813391", 
  api_secret = "QPxYCBttNcO25u-vHVi6iOclkbw" 
)

import cloudinary.uploader


@authentication_classes([])
@permission_classes([AllowAny])

class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()  # Update the queryset as per your requirement
    serializer_class = PostSerializer  # Define the serializer class for Post

    def post(self, request, *args, **kwargs):
        image_file = request.data.get('image')
        print(image_file)

        if not image_file:
            return Response({"error": "Please provide an image."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            print("Request body:", request.data)  # Print request body
            print("Image file name:", image_file.name)  # Print image file name

            # Assuming 'image' is the key for the image file in the request data
            if isinstance(image_file, str):
                # If 'image' is a string, assume it's a URL
                image_url = image_file
            else:
                # Otherwise, it's an image file, upload it
                # You can handle image upload to cloud storage like Cloudinary here
                # Example code:
                cloudinary_response = cloudinary.uploader.upload(
                    image_file,
                    folder="PostImages",
                )
                if cloudinary_response['secure_url']:
                    image_url = cloudinary_response['secure_url']
                else:
                    return Response({"error": "Failed to upload image."}, status=status.HTTP_400_BAD_REQUEST)

            print("Uploaded image URL:", image_url)  # Print uploaded image URL

            # Assuming you have implemented the Post model
            post_data = {
                'user': request.data.get('user',1),
                'content': request.data.get('content', ''),
                'attach_files': request.data.get('attach_files', ''),
                'likes': request.data.get('likes', 0),
                'dislikes': request.data.get('dislikes', 0),
                'image': image_url,
                'comment_count': 0,  # Initialize comment count to 0
            }
            print(post_data)
            serializer = self.get_serializer(data=post_data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class CustomPagination(PageNumberPagination):
    page_size = 10  # Set the number of items per page
    page_size_query_param = 'limit'  # Allow client to override the page size using query parameter
@authentication_classes([])
@permission_classes([AllowAny])
class PostsListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = CustomPagination

    def list(self, request, *args, **kwargs):
        queryset = Post.objects.all().order_by('-created_at')
        page = self.paginate_queryset(queryset)  # Paginate the queryset
        serializer = self.get_serializer(page, many=True)

        return self.get_paginated_response(serializer.data)
    


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

@authentication_classes([])
@permission_classes([AllowAny])
class UserPostListView(APIView):
    def get(self, request, user_id):
        # Fetch all posts of the specified user
        posts = Post.objects.filter(user_id=user_id)
        post_data = PostSerializer(posts, many=True).data
        
        response_data = {'posts': post_data}
        
        return Response(response_data)
    
class CommentPagination(PageNumberPagination):
    page_size = 3  # Set the number of items per page
    page_size_query_param = 'limit'  # Allow client to override the page size using query parameter
@authentication_classes([])
@permission_classes([AllowAny])
class PostCommentsView(generics.ListAPIView):
    serializer_class = CommentSerializer
    pagination_class = CommentPagination  # Set the pagination class
    
    def get_queryset(self):
        # Get the post ID from the URL parameters
        post_id = self.kwargs['post_id']
        
        # Fetch all comments associated with the specified post ID
        queryset = Comment.objects.filter(post_id=post_id).order_by('created_at')
        
        return queryset