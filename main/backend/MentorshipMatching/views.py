from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MentorshipProfile, MentorshipRequest
from .serializers import MentorshipProfileSerializer, MentorshipRequestSerializer

class MentorshipProfileAPI(APIView):
    def get(self, request, user_id):
        profile = MentorshipProfile.objects.get(user_id=user_id)
        serializer = MentorshipProfileSerializer(profile)
        return Response(serializer.data)

class MentorshipRequestAPI(APIView):
    def post(self, request):
        mentee_id = request.user.id  # Assuming user authentication
        mentor_id = request.data.get('mentor_id')
        
        request = MentorshipRequest.objects.create(
            mentee_id=mentee_id,
            mentor_id=mentor_id,
            status='pending'
        )
        
        serializer = MentorshipRequestSerializer(request)
        return Response(serializer.data)