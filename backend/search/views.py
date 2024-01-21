# search/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import SearchResult, UserSearchHistory, SearchResultRating, UserSearchPreference
from .serializers import SearchResultSerializer, UserSearchHistorySerializer, SearchResultRatingSerializer, UserSearchPreferenceSerializer

class SearchResultList(generics.ListAPIView):
    queryset = SearchResult.objects.all()
    serializer_class = SearchResultSerializer

class UserSearchHistoryList(generics.ListAPIView):
    queryset = UserSearchHistory.objects.all()
    serializer_class = UserSearchHistorySerializer
    permission_classes = [IsAuthenticated]

class SearchResultRatingList(generics.ListCreateAPIView):
    queryset = SearchResultRating.objects.all()
    serializer_class = SearchResultRatingSerializer
    permission_classes = [IsAuthenticated]

class UserSearchPreferenceDetail(generics.RetrieveUpdateAPIView):
    queryset = UserSearchPreference.objects.all()
    serializer_class = UserSearchPreferenceSerializer
    permission_classes = [IsAuthenticated]

