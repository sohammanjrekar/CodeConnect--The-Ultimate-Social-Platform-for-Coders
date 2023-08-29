# serializers.py
from rest_framework import serializers
from .models import DiscussionTopic, DiscussionPost

class DiscussionTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionTopic
        fields = '__all__'

class DiscussionPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionPost
        fields = '__all__'