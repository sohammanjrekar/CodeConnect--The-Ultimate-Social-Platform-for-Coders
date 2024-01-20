from rest_framework import serializers
from .models import CodingChallenge, Submission

class CodingChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingChallenge
        fields = '__all__'

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'
