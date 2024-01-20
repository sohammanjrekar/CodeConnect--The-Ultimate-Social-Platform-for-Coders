# LanguageExchange/admin.py
from django.contrib import admin
from .models import (
    LanguageExchangeProfile, ProgrammingLanguage,
    CommunicationMethod, AvailabilityTime,
    CollaborationInterest, CollaboratedProject,
    LanguageTeaching
)

admin.site.register(LanguageExchangeProfile)
admin.site.register(ProgrammingLanguage)
admin.site.register(CommunicationMethod)
admin.site.register(AvailabilityTime)
admin.site.register(CollaborationInterest)
admin.site.register(CollaboratedProject)
admin.site.register(LanguageTeaching)
