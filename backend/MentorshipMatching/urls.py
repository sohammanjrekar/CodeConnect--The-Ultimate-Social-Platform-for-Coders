# MentorshipMatching/urls.py
from django.urls import path
from .views import (
    MentorshipProfileList, MentorshipProfileDetail,
    SharedResourceList, SharedResourceDetail,
    ContactMethodList, ContactMethodDetail,
    MentorCommentList, MentorCommentDetail,SearchMentorshipProfiles
)

urlpatterns = [
    path('mentorship-profiles/', MentorshipProfileList.as_view(), name='mentorship-profile-list'),
    path('mentorship-profiles/<int:pk>/', MentorshipProfileDetail.as_view(), name='mentorship-profile-detail'),
    path('shared-resources/', SharedResourceList.as_view(), name='shared-resource-list'),
    path('shared-resources/<int:pk>/', SharedResourceDetail.as_view(), name='shared-resource-detail'),
    path('contact-methods/', ContactMethodList.as_view(), name='contact-method-list'),
    path('contact-methods/<int:pk>/', ContactMethodDetail.as_view(), name='contact-method-detail'),
    path('mentor-comments/', MentorCommentList.as_view(), name='mentor-comment-list'),
    path('mentor-comments/<int:pk>/', MentorCommentDetail.as_view(), name='mentor-comment-detail'),
    path('search/', SearchMentorshipProfiles.as_view(), name='search_blog_posts'),

]
