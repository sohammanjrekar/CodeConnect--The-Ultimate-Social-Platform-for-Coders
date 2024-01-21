from django.urls import path
from .views import LearningResourceList, LearningResourceDetail, TagList, TagDetail, CommentList, CommentDetail

urlpatterns = [
    path('learning-resources/', LearningResourceList.as_view(), name='learning-resource-list'),
    path('learning-resources/<int:pk>/', LearningResourceDetail.as_view(), name='learning-resource-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
]
