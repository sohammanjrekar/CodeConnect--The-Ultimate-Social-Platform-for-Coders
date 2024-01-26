# LanguageExchange/views.py
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import *
from .serializers import *
from rest_framework import generics
from .models import LanguageExchangeProfile
from .serializers import LanguageExchangeProfileSerializer
from .ml import LanguageExchangeRecommendation

class LanguageExchangeProfileList(generics.ListCreateAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class LanguageExchangeProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class LanguageExchangeRecommendationView(generics.RetrieveAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

    def get_object(self):
        user_id = self.kwargs['pk']
        user = self.queryset.get(pk=user_id)

        # Get all other users for recommendations
        other_users = LanguageExchangeProfile.objects.exclude(pk=user_id)

        # Use the recommendation model to generate recommendations
        recommendation_model = LanguageExchangeRecommendation()

        # Store user recommendations in a dictionary
        user_recommendations = {}
        for other_user in other_users:
            recommendation_score = recommendation_model.generate_recommendations(user, other_user)
            user_recommendations[other_user.user.username] = recommendation_score

        # Sort users based on recommendation scores
        sorted_recommendations = sorted(user_recommendations.items(), key=lambda x: x[1], reverse=True)

        # Return top recommendations
        top_recommendations = [username for username, _ in sorted_recommendations[:5]]

        return {'user': user.user.username, 'recommendations': top_recommendations}

class LanguageExchangeProfileList(ListAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class LanguageExchangeProfileDetail(RetrieveAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class ProgrammingLanguageList(ListAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class CommunicationMethodList(ListAPIView):
    queryset = CommunicationMethod.objects.all()
    serializer_class = CommunicationMethodSerializer

class AvailabilityTimeList(ListAPIView):
    queryset = AvailabilityTime.objects.all()
    serializer_class = AvailabilityTimeSerializer

class CollaborationInterestList(ListAPIView):
    queryset = CollaborationInterest.objects.all()
    serializer_class = CollaborationInterestSerializer

class CollaboratedProjectList(ListAPIView):
    queryset = CollaboratedProject.objects.all()
    serializer_class = CollaboratedProjectSerializer

class LanguageTeachingList(ListAPIView):
    queryset = LanguageTeaching.objects.all()
    serializer_class = LanguageTeachingSerializer
