# MentorshipMatching/serializers.py
from rest_framework import serializers
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment

class MentorshipProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorshipProfile
        fields = '__all__'

class SharedResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SharedResource
        fields = '__all__'

class ContactMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMethod
        fields = '__all__'

class MentorCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorComment
        fields = '__all__'
