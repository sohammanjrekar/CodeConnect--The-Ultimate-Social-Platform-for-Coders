# portfolio/urls.py
from django.urls import path
from .views import ProjectList, ProjectDetail, ProjectCategoryList, TechnologyList, ProjectImageList, ResumeDetail

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
    path('categories/', ProjectCategoryList.as_view(), name='project-category-list'),
    path('technologies/', TechnologyList.as_view(), name='technology-list'),
    path('project-images/', ProjectImageList.as_view(), name='project-image-list'),
    path('resume/<int:pk>/', ResumeDetail.as_view(), name='resume-detail'),
]
