# serializers.py
from rest_framework import serializers
from .models import DeveloperProfile, Project

class DeveloperProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeveloperProfile
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'