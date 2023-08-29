from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ProgrammingLanguage, MultilingualProject
from .serializers import ProgrammingLanguageSerializer, MultilingualProjectSerializer

class ProgrammingLanguagesAPI(APIView):
    def get(self, request):
        programming_languages = ProgrammingLanguage.objects.all()
        serializer = ProgrammingLanguageSerializer(programming_languages, many=True)
        return Response(serializer.data)

class MultilingualProjectsAPI(APIView):
    def get(self, request):
        multilingual_projects = MultilingualProject.objects.all()
        serializer = MultilingualProjectSerializer(multilingual_projects, many=True)
        return Response(serializer.data)