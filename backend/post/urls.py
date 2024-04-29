from django.urls import path
from .views import *

urlpatterns = [
    path('users/', UserViewSet.as_view({'get': 'list'}), name='user-list'),
    path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve'}), name='user-detail'),
    path('posts/', PostsListView.as_view(), name='post-list'),  # Use PostsListView instead of PostViewSet
    path('posts/<int:pk>/', PostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='post-detail'),
    path('comments/', CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='comment-list'),
    path('comments/<int:pk>/', CommentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='comment-detail'),
    path('comment/<int:post_id>/', CommentView.as_view(), name='add-comment'),
    path('like/<int:post_id>/', LikeView.as_view(), name='like-post'),
    path('user/<int:user_id>/posts/', UserPostListView.as_view(), name='user-post-list'),
    path('posts/<int:post_id>/comments/', PostCommentsView.as_view(), name='post-comments'),
    path('post/', PostList.as_view(), name='post-lists'),  # URL pattern for PostList view
   
]
