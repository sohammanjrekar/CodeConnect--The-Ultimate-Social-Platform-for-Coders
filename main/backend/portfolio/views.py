from rest_framework import generics
from .models import Project, Paper
from .serializers import ProjectSerializer, PaperSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PaperList(generics.ListAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer
