from django.urls import path
from .views import JobListingList, InternshipListingList

urlpatterns = [
    path('api/jobs/', JobListingList.as_view(), name='job-list'),
    path('api/internships/', InternshipListingList.as_view(), name='internship-list'),
    # ...
]
