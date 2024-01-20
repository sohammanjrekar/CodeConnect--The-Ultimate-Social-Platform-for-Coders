# portfolio/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Project, ProjectCategory, Technology, ProjectImage, Resume
from .serializers import (
    ProjectSerializer, ProjectCategorySerializer, TechnologySerializer,
    ProjectImageSerializer, ResumeSerializer
)

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

class ProjectCategoryList(generics.ListAPIView):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer

class TechnologyList(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer

class ProjectImageList(generics.ListCreateAPIView):
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer
    permission_classes = [IsAuthenticated]

class ResumeDetail(generics.RetrieveUpdateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = [IsAuthenticated]
