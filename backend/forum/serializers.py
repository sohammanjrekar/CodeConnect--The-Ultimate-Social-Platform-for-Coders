# forum/serializers.py
from rest_framework import serializers
from .models import ForumTopic, ForumPost, ForumReply

class ForumTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumTopic
        fields = '__all__'

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = '__all__'

class ForumReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumReply
        fields = '__all__'
