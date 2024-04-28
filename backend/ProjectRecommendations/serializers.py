# projectrecommendation/serializers.py
from rest_framework import serializers
from .models import Project, ProgrammingLanguage, Tool, Tag

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        ref_name="projectpredlanguage"

class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = '__all__'
        ref_name="projectlanguage"

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
        ref_name="projecttags"
