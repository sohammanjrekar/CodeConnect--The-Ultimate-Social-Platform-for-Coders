# projectrecommendation/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
    path('programming-languages/', ProgrammingLanguageList.as_view(), name='programming-language-list'),
    path('tools/', ToolList.as_view(), name='tool-list'),
    path('tags/', TagList.as_view(), name='tag-list'),
]
