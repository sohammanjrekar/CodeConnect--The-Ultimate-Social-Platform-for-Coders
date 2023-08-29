from rest_framework import serializers
from .models import JobListing, InternshipListing
from .models import JobOpening

class JobOpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOpening
        fields = '__all__'
        
class JobListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListing
        fields = '__all__'

class InternshipListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = InternshipListing
        fields = '__all__'
