# blog/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('search/', SearchBlogPosts.as_view(), name='search_blog_posts'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('blog-posts/', BlogPostList.as_view(), name='blog-post-list'),
    path('blog-posts/<int:pk>/', BlogPostDetail.as_view(), name='blog-post-detail'),
    path('posts/<int:post_id>/comments/', CommentListByPost.as_view(), name='comments-by-post'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('posts/<int:post_id>/comments/create/', CommentCreate.as_view(), name='create-comment'),
    
]
