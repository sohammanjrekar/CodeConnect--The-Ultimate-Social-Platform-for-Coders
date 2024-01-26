from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostListView, CommentView, LikeView, UserViewSet, PostViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'posts', PostViewSet, basename='post')
router.register(r'comments', CommentViewSet, basename='comment')

urlpatterns = [
    path('post-list/', PostListView.as_view(), name='post-list'),
    path('comment/<int:post_id>/', CommentView.as_view(), name='add-comment'),
    path('like/<int:post_id>/', LikeView.as_view(), name='like-post'),
]

urlpatterns += router.urls
