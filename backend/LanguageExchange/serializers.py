from rest_framework import serializers
from .models import User, ProgrammingLanguage, MultilingualProject

class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = '__all__'

class MultilingualProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultilingualProject
        fields = '__all__'