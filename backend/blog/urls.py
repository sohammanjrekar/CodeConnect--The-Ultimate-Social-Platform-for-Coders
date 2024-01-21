# blog/urls.py
from django.urls import path
from .views import (
    CategoryList, CategoryDetail,
    TagList, TagDetail,
    BlogPostList, BlogPostDetail,
    CommentList, CommentDetail
)

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('blog-posts/', BlogPostList.as_view(), name='blog-post-list'),
    path('blog-posts/<int:pk>/', BlogPostDetail.as_view(), name='blog-post-detail'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
]
