# LanguageExchange/urls.py
from django.urls import path
from .views import (
    LanguageExchangeProfileList, LanguageExchangeProfileDetail,
    ProgrammingLanguageList, CommunicationMethodList,
    AvailabilityTimeList, CollaborationInterestList,
    CollaboratedProjectList, LanguageTeachingList
)

urlpatterns = [
    path('profiles/', LanguageExchangeProfileList.as_view(), name='language-exchange-profile-list'),
    path('profiles/<int:pk>/', LanguageExchangeProfileDetail.as_view(), name='language-exchange-profile-detail'),
    path('programming-languages/', ProgrammingLanguageList.as_view(), name='programming-language-list'),
    path('communication-methods/', CommunicationMethodList.as_view(), name='communication-method-list'),
    path('availability-times/', AvailabilityTimeList.as_view(), name='availability-time-list'),
    path('collaboration-interests/', CollaborationInterestList.as_view(), name='collaboration-interest-list'),
    path('collaborated-projects/', CollaboratedProjectList.as_view(), name='collaborated-project-list'),
    path('language-teaching/', LanguageTeachingList.as_view(), name='language-teaching-list'),
]
