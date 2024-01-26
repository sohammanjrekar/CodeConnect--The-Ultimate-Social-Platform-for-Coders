# jobportal/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('job-postings/', JobPostingList.as_view(), name='job-posting-list'),
    path('job-postings/<int:pk>/', JobPostingDetail.as_view(), name='job-posting-detail'),
    path('job-categories/', JobCategoryList.as_view(), name='job-category-list'),
    path('skills/', SkillList.as_view(), name='skill-list'),
    path('benefits/', BenefitList.as_view(), name='benefit-list'),
]
