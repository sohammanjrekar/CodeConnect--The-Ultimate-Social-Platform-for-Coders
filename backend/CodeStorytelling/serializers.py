# CodeStorytelling/serializers.py
from rest_framework import serializers
from .models import CodeStory, CodeStoryComment, CodeStoryRating

class CodeStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeStory
        fields = '__all__'

class CodeStoryCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeStoryComment
        fields = '__all__'

class CodeStoryRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeStoryRating
        fields = '__all__'
