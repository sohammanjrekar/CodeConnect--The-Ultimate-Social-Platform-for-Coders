from django.contrib import admin
from .models import LanguageExchangeProfile, LanguageTeaching, ProgrammingLanguage, CommunicationMethod, AvailabilityTime, CollaborationInterest, CollaboratedProject

admin.site.register(LanguageExchangeProfile)
admin.site.register(LanguageTeaching)
admin.site.register(ProgrammingLanguage)
admin.site.register(CommunicationMethod)
admin.site.register(AvailabilityTime)
admin.site.register(CollaborationInterest)
admin.site.register(CollaboratedProject)
