# search/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('search/', global_search, name='search-result-list'),
]
