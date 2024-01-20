# codingchallenges/urls.py
from django.urls import path
from .views import (
    CodingChallengeList, CodingChallengeDetail,
    TagList, TestCaseList, BadgeList
)

urlpatterns = [
    path('coding-challenges/', CodingChallengeList.as_view(), name='coding-challenge-list'),
    path('coding-challenges/<int:pk>/', CodingChallengeDetail.as_view(), name='coding-challenge-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('test-cases/', TestCaseList.as_view(), name='test-case-list'),
    path('badges/', BadgeList.as_view(), name='badge-list'),
]
