# projectrecommendation/views.py
from rest_framework import generics
from .models import Project, ProgrammingLanguage, Tool, Tag
from .serializers import (
    ProjectSerializer, ProgrammingLanguageSerializer,
    ToolSerializer, TagSerializer
)

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
