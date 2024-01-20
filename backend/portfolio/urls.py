from django.urls import path
from .views import ProjectList, PaperList

urlpatterns = [
    path('api/projects/', ProjectList.as_view(), name='project-list'),
    path('api/papers/', PaperList.as_view(), name='paper-list'),
]
