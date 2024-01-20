# search/serializers.py
from rest_framework import serializers
from .models import SearchResult, UserSearchHistory, SearchResultRating, UserSearchPreference

class SearchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchResult
        fields = '__all__'

class UserSearchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSearchHistory
        fields = '__all__'

class SearchResultRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchResultRating
        fields = '__all__'

class UserSearchPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSearchPreference
        fields = '__all__'
