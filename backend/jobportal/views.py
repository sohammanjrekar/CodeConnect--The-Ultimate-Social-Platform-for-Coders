# jobportal/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import JobPosting, JobCategory, Skill, Benefit
from .serializers import *


# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import JobPosting, Skill, ProgrammingLanguage, Keyword
from .ml import JobRecommendation

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


class JobPostingList(generics.ListCreateAPIView):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    permission_classes = [IsAuthenticated]

class JobPostingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    permission_classes = [IsAuthenticated]

class JobCategoryList(generics.ListAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer

class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class BenefitList(generics.ListAPIView):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer
