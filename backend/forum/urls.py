# forum/urls.py
from django.urls import path
from .views import ForumTopicList, ForumTopicDetail, ForumPostList, ForumPostDetail, ForumReplyList, ForumReplyDetail

urlpatterns = [
    path('topics/', ForumTopicList.as_view(), name='forum-topic-list'),
    path('topics/<int:pk>/', ForumTopicDetail.as_view(), name='forum-topic-detail'),
    path('posts/', ForumPostList.as_view(), name='forum-post-list'),
    path('posts/<int:pk>/', ForumPostDetail.as_view(), name='forum-post-detail'),
    path('replies/', ForumReplyList.as_view(), name='forum-reply-list'),
    path('replies/<int:pk>/', ForumReplyDetail.as_view(), name='forum-reply-detail'),
]
