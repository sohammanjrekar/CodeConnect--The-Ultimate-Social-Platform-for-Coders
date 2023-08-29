from django.urls import path
from .views import ProfileDetails, EmploymentHistory, EducationHistory, Skills

urlpatterns = [
    path('api/profile/<int:user_id>/', ProfileDetails.as_view(), name='profile-details'),
    path('api/employment/<int:user_id>/', EmploymentHistory.as_view(), name='employment-history'),
    path('api/education/<int:user_id>/', EducationHistory.as_view(), name='education-history'),
    path('api/skills/<int:user_id>/', Skills.as_view(), name='user-skills'),
    # ...
]
