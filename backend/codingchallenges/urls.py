# codingchallenges/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('coding-challenges/', CodingChallengeList.as_view(), name='coding-challenge-list'),
    path('coding-challenges/<int:pk>/', CodingChallengeDetail.as_view(), name='coding-challenge-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('test-cases/', TestCaseList.as_view(), name='test-case-list'),
    path('soluion/<int:pk>/',  SolutionList.as_view(), name='solution-list'),
    path('solution/<int:user_id>/<int:challenge_id>/', SolutionUserList.as_view(), name='solution-user-list'),
    path('solve-challenge/', solve_challenge, name='solve_challenge'),
]
