from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Campaign
class CampaignListAPIView(generics.ListAPIView):
    def get_queryset(self):
        return Campaign.objects.all()
    

    