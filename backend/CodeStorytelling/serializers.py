from rest_framework import serializers
from .models import User, CodeStory

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CodeStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeStory
        fields = '__all__'
