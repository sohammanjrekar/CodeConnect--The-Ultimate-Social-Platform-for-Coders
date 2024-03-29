# projectrecommendation/views.py
from rest_framework import generics
from .models import Project, ProgrammingLanguage, Tool, Tag
from .serializers import *

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, ProgrammingLanguage
from .ml import MLPrediction  # Assuming you have an MLPrediction class for making predictions

class ProjectRecommendationView(APIView):
    def get(self, request, user_id):
        user_languages = ProgrammingLanguage.objects.filter(users=user_id)
        user_keywords = ['keyword1', 'keyword2', '...']  # Replace with actual user keywords

        # Fetch projects based on machine learning predictions
        recommended_projects = self.get_recommendations(user_languages, user_keywords)

        # Serialize the recommended projects
        serialized_projects = self.serialize_projects(recommended_projects)

        return JsonResponse({'projects': serialized_projects})

    def get_recommendations(self, user_languages, user_keywords):
        # Create an instance of MLPrediction
        ml_predictor = MLPrediction()

        # Assuming you have a method in MLPrediction to get project recommendations
        recommended_projects = ml_predictor.get_project_recommendations(user_languages, user_keywords)

        return recommended_projects

    def serialize_projects(self, projects):
        # Serialize projects as needed
        serialized_projects = [
            {
                'id': project.id,
                'title': project.title,
                'description': project.description,
                'github_link': project.github_link,
                # Add other fields as needed
            }
            for project in projects
        ]

        return serialized_projects

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProgrammingLanguageList(generics.ListAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class ToolList(generics.ListAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer

class TagList(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
