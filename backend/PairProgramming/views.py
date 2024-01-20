from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, ProgrammingLanguage, PairProgrammingSession
from .serializers import UserSerializer, ProgrammingLanguageSerializer, PairProgrammingSessionSerializer

class ProgrammingLanguagesAPI(APIView):
    def get(self, request):
        programming_languages = ProgrammingLanguage.objects.all()
        serializer = ProgrammingLanguageSerializer(programming_languages, many=True)
        return Response(serializer.data)

class PairProgrammingSessionsAPI(APIView):
    def get(self, request):
        pair_programming_sessions = PairProgrammingSession.objects.all()
        serializer = PairProgrammingSessionSerializer(pair_programming_sessions, many=True)
        return Response(serializer.data)