# jobportal/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import JobPosting, JobCategory, Skill, Benefit,Person
from .serializers import *


# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import JobPosting, Skill
from account.models import ProgrammingLanguage, Keyword
from .ml import JobRecommendation
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.pagination import PageNumberPagination

class NineResultsSetPagination(PageNumberPagination):
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 100

class TwentyResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


@authentication_classes([])
@permission_classes([AllowAny])
class JobRecommendationView(APIView):
    def get(self, request, user_id):
        user_skills = Skill.objects.filter(users=user_id)
        user_keywords = Keyword.objects.filter(users=user_id)
        user_languages = ProgrammingLanguage.objects.filter(users=user_id)

        job_recommendation = JobRecommendation()
        recommended_jobs = job_recommendation.get_job_recommendations(
            user_skills,
            user_keywords,
            user_languages
        )

        serialized_jobs = self.serialize_jobs(recommended_jobs)

        return JsonResponse({'jobs': serialized_jobs})

    def serialize_jobs(self, jobs):
        serialized_jobs = [
            {
                'id': job.id,
                'title': job.title,
                'company_name': job.company_name,
                'description': job.description,
                'location': job.location,
                # Add other fields as needed
            }
            for job in jobs
        ]

        return serialized_jobs

@authentication_classes([])
@permission_classes([AllowAny])
class JobPostingList(generics.ListCreateAPIView):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = NineResultsSetPagination
@authentication_classes([])
@permission_classes([AllowAny])
class JobPostingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = NineResultsSetPagination
@authentication_classes([])
@permission_classes([AllowAny])
class JobCategoryList(generics.ListAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer
    pagination_class = TwentyResultsSetPagination
@authentication_classes([])
@permission_classes([AllowAny])
class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    pagination_class = TwentyResultsSetPagination
@authentication_classes([])
@permission_classes([AllowAny])
class BenefitList(generics.ListAPIView):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer
    pagination_class = TwentyResultsSetPagination
from django.db.models import Q
from rest_framework.generics import ListAPIView

@authentication_classes([])
@permission_classes([AllowAny])
class SearchJobPosts(ListAPIView):
    serializer_class = JobPostingSerializer

    def get_queryset(self):
        queryset = JobPosting.objects.all()
        search_query = self.request.GET.get('query')
        if search_query:
            # Make the search case-insensitive by using case-insensitive filter
            queryset = queryset.filter(
                Q(title__icontains=search_query) | 
                Q(company_name__icontains=search_query) | 
                Q(location__icontains=search_query) | 
                Q(description__icontains=search_query) | 
                Q(requirements__icontains=search_query)
            )
        return queryset

@authentication_classes([])
@permission_classes([AllowAny])
class JobCategoryDetail(generics.RetrieveAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serialized_data = self.get_serializer(instance).data
        response_data = {
            'id': serialized_data['id'],
            'name': serialized_data['name']
        }
        return Response(response_data)

@authentication_classes([])
@permission_classes([AllowAny])
class SkillDetail(generics.RetrieveAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serialized_data = self.get_serializer(instance).data
        response_data = {
            'id': serialized_data['id'],
            'name': serialized_data['name']
        }
        return Response(response_data)

@authentication_classes([])
@permission_classes([AllowAny])
class BenefitDetail(generics.RetrieveAPIView):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serialized_data = self.get_serializer(instance).data
        response_data = {
            'id': serialized_data['id'],
            'name': serialized_data['name']
        }
        return Response(response_data)
    


@authentication_classes([])
@permission_classes([AllowAny])
class PersonsDetail(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serialized_data = self.get_serializer(instance).data
        response_data = {
            'id': instance.id,
            'role': instance.role,
            'name': instance.user.name,  # Accessing the name directly from the user object
            'phone_number': instance.user.phone_number,  # Accessing the name directly from the user object
            'email': instance.user.email,  # Accessing the name directly from the user object
             # Accessing the name directly from the user object
        }
        return Response(response_data)
