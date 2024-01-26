from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CodeSnippet, User
from .ml import CodeSnippetRecommendation

class CodeSnippetRecommendationView(APIView):
    def get(self, request, user_id):
        recommendations = self.get_recommendations(user_id)

        # Serialize the recommended snippets
        serialized_snippets = self.serialize_snippets(recommendations)

        return JsonResponse({'snippets': serialized_snippets})

    def get_recommendations(self, user_id):
        # Create an instance of CodeSnippetRecommendation
        snippet_recommendation = CodeSnippetRecommendation()

        # Assuming you have a method to get snippet recommendations
        recommended_snippets = snippet_recommendation.get_snippet_recommendations(user_id)

        return recommended_snippets

    def serialize_snippets(self, snippets):
        # Serialize snippets as needed
        serialized_snippets = [
            {
                'id': snippet.id,
                'text': snippet.snippet_text,
                'user': snippet.user.username,
                'language': snippet.programming_language.name,
                'created_at': snippet.created_at,
                'updated_at': snippet.updated_at,
            }
            for snippet in snippets
        ]

        return serialized_snippets
from rest_framework import generics
from .models import User, ProgrammingLanguage, CodeSnippet
from .serializers import UserSerializer, ProgrammingLanguageSerializer, CodeSnippetSerializer

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProgrammingLanguageListCreateView(generics.ListCreateAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class ProgrammingLanguageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class CodeSnippetListCreateView(generics.ListCreateAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer

class CodeSnippetDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer
