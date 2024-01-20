# serializers.py
from rest_framework import serializers
from .models import MentorshipProfile, MentorshipRequest

class MentorshipProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorshipProfile
        fields = '__all__'

class MentorshipRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorshipRequest
        fields = '__all__'