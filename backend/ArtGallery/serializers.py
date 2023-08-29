from rest_framework import serializers
from .models import User, CodeArtwork

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CodeArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeArtwork
        fields = '__all__'
