# LearningResources/urls.py
from django.urls import path
from .views import (
    LearningResourceList, LearningResourceDetail,
    TagList, CommentList, CommentDetail,
    LikeResource, DislikeResource
)

urlpatterns = [
    path('learning-resources/', LearningResourceList.as_view(), name='learning-resource-list'),
    path('learning-resources/<int:pk>/', LearningResourceDetail.as_view(), name='learning-resource-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('learning-resources/<int:pk>/like/', LikeResource.as_view(), name='like-resource'),
    path('learning-resources/<int:pk>/dislike/', DislikeResource.as_view(), name='dislike-resource'),
]
