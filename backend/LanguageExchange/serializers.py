# LanguageExchange/serializers.py
from rest_framework import serializers
from .models import (
    LanguageExchangeProfile, LanguageTeaching, ProgrammingLanguage,
    CommunicationMethod, AvailabilityTime,
    CollaborationInterest, CollaboratedProject,
    LanguageTeaching
)

class LanguageExchangeProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageExchangeProfile
        fields = '__all__'

class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = '__all__'

class CommunicationMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationMethod
        fields = '__all__'

class AvailabilityTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailabilityTime
        fields = '__all__'

class CollaborationInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollaborationInterest
        fields = '__all__'

class CollaboratedProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollaboratedProject
        fields = '__all__'

class LanguageTeachingSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageTeaching
        fields = '__all__'
