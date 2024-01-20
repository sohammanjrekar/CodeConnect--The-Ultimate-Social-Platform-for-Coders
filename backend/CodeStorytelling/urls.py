# CodeStorytelling/urls.py
from django.urls import path
from .views import CodeStoryList, CodeStoryDetail, CodeStoryCommentList, CodeStoryRatingList

urlpatterns = [
    path('code-stories/', CodeStoryList.as_view(), name='code-story-list'),
    path('code-stories/<int:pk>/', CodeStoryDetail.as_view(), name='code-story-detail'),
    path('code-stories/comments/', CodeStoryCommentList.as_view(), name='code-story-comment-list'),
    path('code-stories/ratings/', CodeStoryRatingList.as_view(), name='code-story-rating-list'),
]
