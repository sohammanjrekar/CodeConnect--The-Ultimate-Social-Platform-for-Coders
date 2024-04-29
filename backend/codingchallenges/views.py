# codingchallenges/views.py
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CodingChallenge, Tag, TestCase,Solution
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination

@api_view(['POST'])
def solve_challenge(request):
    if request.method == 'POST':
        challenge_id = request.data.get('challenge_id')
        user_id = request.data.get('user_id')

        try:
            challenge = CodingChallenge.objects.get(id=challenge_id)
            user = User.objects.get(id=user_id)

            # Award points and check if the challenge is solved
            points_awarded = challenge.award_points_and_badges(user)
            # Add logic to mark the challenge as solved if necessary

            return Response({'message': 'Challenge solved successfully', 'points_awarded': points_awarded}, status=status.HTTP_200_OK)
        except CodingChallenge.DoesNotExist:
            return Response({'message': 'Challenge not found'}, status=status.HTTP_404_NOT_FOUND)
        except User.DoesNotExist:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
@authentication_classes([])
@permission_classes([AllowAny])
class CodingChallengeList(generics.ListCreateAPIView):
    queryset = CodingChallenge.objects.all()
    serializer_class = CodingChallengeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()
        challenge = serializer.instance
        user = self.request.user
        points_awarded = challenge.award_points(user)

        return Response({
            'message': f'Challenge created successfully. You earned {points_awarded} points!',
            'challenge': serializer.data
        }, status=status.HTTP_201_CREATED)

@authentication_classes([])
@permission_classes([AllowAny])
class CodingChallengeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodingChallenge.objects.all()
    serializer_class = CodingChallengeSerializer
    permission_classes = [IsAuthenticated]

@authentication_classes([])
@permission_classes([AllowAny])
class TagList(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class TestCaseList(generics.ListAPIView):
    queryset = TestCase.objects.all()
    serializer_class = TestCaseSerializer

@authentication_classes([])
@permission_classes([AllowAny])
class SolutionList(generics.ListAPIView):
    serializer_class = solutionSerializer

    def get_queryset(self):
       
        # Extract the challenge_id from the URL path
        challenge_id = self.kwargs.get('pk')
        
        # Filter solutions by the challenge_id
        queryset = Solution.objects.filter(challenge__id=challenge_id)
        
        return queryset
    

@authentication_classes([])
@permission_classes([AllowAny])
class SolutionUserList(generics.ListAPIView):
    serializer_class = solutionSerializer

    def get_queryset(self):
        """
        Override the default queryset to filter solutions by user_id and challenge_id.
        """
        # Extract the user_id and challenge_id from the URL path
        user_id = self.kwargs.get('user_id')
        challenge_id = self.kwargs.get('challenge_id')
        
        # Filter solutions based on user_id and challenge_id if provided
        queryset = Solution.objects.all()
        if user_id:
            queryset = queryset.filter(user__id=user_id)
        if challenge_id:
            queryset = queryset.filter(challenge__id=challenge_id)
        
        return queryset
    
