from django.urls import path
from .views import *

urlpatterns = [
    path('job-postings/', JobPostingList.as_view(), name='job-posting-list'),
    path('job-postings/<int:pk>/', JobPostingDetail.as_view(), name='job-posting-detail'),
    path('job-categories/', JobCategoryList.as_view(), name='job-category-list'),
    path('skills/', SkillList.as_view(), name='skill-list'),
    path('benefits/', BenefitList.as_view(), name='benefit-list'),
    path('search/', SearchJobPosts.as_view(), name='search_job_posts'),
    path('categories/<int:id>/', JobCategoryDetail.as_view(), name='job-category-detail'),
    path('skills/<int:id>/', SkillDetail.as_view(), name='job-skill-detail'),
    path('benefits/<int:id>/', BenefitDetail.as_view(), name='job-benefit-detail'),
    path('benefits/<int:id>/', BenefitDetail.as_view(), name='job-benefit-detail'),
    path('persons/<int:id>/', PersonsDetail.as_view(), name='persons-detail'),

]
