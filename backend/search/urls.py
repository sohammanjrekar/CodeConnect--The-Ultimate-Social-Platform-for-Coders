# search/urls.py
from django.urls import path
from .views import SearchResultList, UserSearchHistoryList, SearchResultRatingList, UserSearchPreferenceDetail

urlpatterns = [
    path('results/', SearchResultList.as_view(), name='search-result-list'),
    path('history/', UserSearchHistoryList.as_view(), name='user-search-history-list'),
    path('ratings/', SearchResultRatingList.as_view(), name='search-result-rating-list'),
    path('preferences/', UserSearchPreferenceDetail.as_view(), name='user-search-preference-detail'),
]
