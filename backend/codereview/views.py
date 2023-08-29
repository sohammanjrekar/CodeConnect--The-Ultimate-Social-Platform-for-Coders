from rest_framework import generics
from .models import CodeReview, UserPoints
from .serializers import CodeReviewSerializer, UserPointsSerializer

class CodeReviewList(generics.ListCreateAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer

class CodeReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer

class UserPointsDetail(generics.RetrieveUpdateAPIView):
    queryset = UserPoints.objects.all()
    serializer_class = UserPointsSerializer
