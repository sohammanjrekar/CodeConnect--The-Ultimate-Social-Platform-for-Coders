# PersonalizedFeed/serializers.py
from rest_framework import serializers
from .models import FeedItem, UserFeedPreference, FeedComment

class FeedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedItem
        fields = '__all__'

class UserFeedPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFeedPreference
        fields = '__all__'

class FeedCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedComment
        fields = '__all__'

