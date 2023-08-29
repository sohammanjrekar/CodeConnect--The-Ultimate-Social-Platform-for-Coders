from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TechStack, ProjectRecommendation
from .serializers import TechStackSerializer, ProjectRecommendationSerializer

class TechStacksAPI(APIView):
    def get(self, request):
        tech_stacks = TechStack.objects.all()
        serializer = TechStackSerializer(tech_stacks, many=True)
        return Response(serializer.data)

class ProjectRecommendationsAPI(APIView):
    def get(self, request):
        project_recommendations = ProjectRecommendation.objects.all()
        serializer = ProjectRecommendationSerializer(project_recommendations, many=True)
        return Response(serializer.data)