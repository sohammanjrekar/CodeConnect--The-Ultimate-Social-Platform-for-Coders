from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CodingCafeSession, User, CodingLanguage
from .serializers import CodingCafeSessionSerializer, UserSerializer, CodingLanguageSerializer

class CodingCafeSessionsAPI(APIView):
    def get(self, request):
        coding_cafe_sessions = CodingCafeSession.objects.all()
        serializer = CodingCafeSessionSerializer(coding_cafe_sessions, many=True)
        return Response(serializer.data)

class CodingLanguagesAPI(APIView):
    def get(self, request):
        coding_languages = CodingLanguage.objects.all()
        serializer = CodingLanguageSerializer(coding_languages, many=True)
        return Response(serializer.data)