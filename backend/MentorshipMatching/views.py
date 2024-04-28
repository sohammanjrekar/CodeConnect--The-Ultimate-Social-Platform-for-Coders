# MentorshipMatching/views.py
from rest_framework import generics
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment
from .serializers import *

# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MentorshipProfile, User
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination

class StandardPagination(PageNumberPagination):
    page_size = 9
    page_query_param = 'page'
    page_size_query_param = 'page_size'
    max_page_size = 100

@authentication_classes([])
@permission_classes([AllowAny])
class MentorMatchingView(APIView):
    def get(self, request):
        mentors = MentorshipProfile.objects.all().exclude(user=request.user)
        mentees = MentorshipProfile.objects.filter(mentees=request.user)

        matches = MentorMatching.match_mentors_to_mentees(mentors, mentees)

        serialized_matches = self.serialize_matches(matches)

        return JsonResponse({'matches': serialized_matches})

    def serialize_matches(self, matches):
        serialized_matches = []

        for match in matches:
            serialized_matches.append({
                'mentee': match['mentee'].user.username,
                'mentor': match['mentor'].user.username,
                'language_score': match['language_score'],
                'keyword_score': match['keyword_score'],
            })

        return serialized_matches

@authentication_classes([])
@permission_classes([AllowAny])
class MentorshipProfileList(generics.ListCreateAPIView):
    queryset = MentorshipProfile.objects.all()
    serializer_class = MentorshipProfileSerializer
    pagination_class = StandardPagination


@authentication_classes([])
@permission_classes([AllowAny])
class MentorshipProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MentorshipProfile.objects.all()
    serializer_class = MentorshipProfileSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class SharedResourceList(generics.ListCreateAPIView):
    queryset = SharedResource.objects.all()
    serializer_class = SharedResourceSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class SharedResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SharedResource.objects.all()
    serializer_class = SharedResourceSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class ContactMethodList(generics.ListCreateAPIView):
    queryset = ContactMethod.objects.all()
    serializer_class = ContactMethodSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class ContactMethodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMethod.objects.all()
    serializer_class = ContactMethodSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class MentorCommentList(generics.ListCreateAPIView):
    queryset = MentorComment.objects.all()
    serializer_class = MentorCommentSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class MentorCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MentorComment.objects.all()
    serializer_class = MentorCommentSerializer


from django.db.models import Q
from rest_framework.generics import ListAPIView
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from rest_framework.response import Response

@method_decorator(never_cache, name='dispatch')
@authentication_classes([])
@permission_classes([AllowAny])
class SearchMentorshipProfiles(ListAPIView):
    serializer_class = MentorshipProfileSerializer

    def get_queryset(self):
        queryset = MentorshipProfile.objects.all()
        search_query = self.request.GET.get('query')

        if search_query:
            # Split the search query into individual keywords
            keywords = search_query.split()

            # Create a Q object to build the query dynamically
            query = Q()
            for keyword in keywords:
                # Search by username, expertise, and availability
                query |= Q(user__username__icontains=keyword) | Q(expertise__icontains=keyword) | Q(availability__icontains=keyword)

            # Filter queryset based on the dynamic query
            queryset = queryset.filter(query)

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # Send the total count of search results along with the response
        count = queryset.count()

        return Response({
            'count': count,
            'results': serializer.data
        })