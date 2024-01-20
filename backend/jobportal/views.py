# jobportal/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import JobPosting, JobCategory, Skill, Benefit
from .serializers import (
    JobPostingSerializer, JobCategorySerializer,
    SkillSerializer, BenefitSerializer
)

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
