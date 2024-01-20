from django.urls import path
from .views import CodeReviewList, CodeReviewDetail, UserPointsDetail

urlpatterns = [
    path('api/reviews/', CodeReviewList.as_view(), name='review-list'),
    path('api/reviews/<int:pk>/', CodeReviewDetail.as_view(), name='review-detail'),
    path('api/users/<int:pk>/points/', UserPointsDetail.as_view(), name='user-points'),
    # ...
]
