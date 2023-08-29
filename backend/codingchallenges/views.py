# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import CodingChallenge, Submission
from .serializers import CodingChallengeSerializer, SubmissionSerializer

class CodingChallengeAPI(APIView):
    def get(self, request):
        challenges = CodingChallenge.objects.all()
        serializer = CodingChallengeSerializer(challenges, many=True)
        return Response(serializer.data)

class SubmissionAPI(APIView):
    def post(self, request, challenge_id):
        user_id = request.user.id  # Assuming user authentication
        code = request.data.get('code')
        challenge = CodingChallenge.objects.get(id=challenge_id)
        
        submission = Submission.objects.create(
            challenge=challenge,
            user_id=user_id,
            code=code
        )
        
        serializer = SubmissionSerializer(submission)
        return Response(serializer.data)