from rest_framework import serializers
from .models import CodingCafeSession, User, CodingLanguage

class CodingCafeSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingCafeSession
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CodingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingLanguage
        fields = '__all__'