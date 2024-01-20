# PersonalizedFeed/urls.py
from django.urls import path
from .views import FeedItemList, UserFeedPreferenceDetail, FeedCommentList

urlpatterns = [
    path('items/', FeedItemList.as_view(), name='feed-item-list'),
    path('preferences/', UserFeedPreferenceDetail.as_view(), name='user-feed-preference-detail'),
    path('comments/', FeedCommentList.as_view(), name='feed-comment-list'),
]
