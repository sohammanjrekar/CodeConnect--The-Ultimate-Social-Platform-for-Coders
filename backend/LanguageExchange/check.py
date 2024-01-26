from django.contrib.auth.models import User
from .models import LanguageExchangeProfile
from .serializers import LanguageExchangeProfileSerializer

# Create sample users and profiles
user1 = User.objects.create(username='user1', password='password1')
user2 = User.objects.create(username='user2', password='password2')

profile1 = LanguageExchangeProfile.objects.create(
    user=user1,
    bio='Sample bio for user1',
)
profile2 = LanguageExchangeProfile.objects.create(
    user=user2,
    bio='Sample bio for user2',
)
# Update bios
profile1.bio = 'Passionate coder interested in open source and data science.'
profile2.bio = 'Web developer with a keen interest in machine learning and Python.'

# Add programming languages to profiles
profile1.programming_languages.add(ProgramingLanguage.objects.create(name='Python'))
profile2.programming_languages.add(ProgramingLanguage.objects.create(name='Java'))

# Add programming languages to profiles
profile1.programming_languages.add(
    ProgramingLanguage.objects.create(name='Python'),
    ProgramingLanguage.objects.create(name='JavaScript'),
    ProgramingLanguage.objects.create(name='C++')
)

profile2.programming_languages.add(
    ProgramingLanguage.objects.create(name='Java'),
    ProgramingLanguage.objects.create(name='Python'),
    ProgramingLanguage.objects.create(name='Ruby')
)

# Add collaboration interests to profiles
profile1.collaboration_interests.add(
    CollaborationInterest.objects.create(name='Open Source Projects'),
    CollaborationInterest.objects.create(name='Data Science')
)

profile2.collaboration_interests.add(
    CollaborationInterest.objects.create(name='Web Development'),
    CollaborationInterest.objects.create(name='Machine Learning')
)

# Serialize profiles
serializer1 = LanguageExchangeProfileSerializer(profile1)
serializer2 = LanguageExchangeProfileSerializer(profile2)

print(f"User1 Profile: {serializer1.data}")
print(f"User2 Profile: {serializer2.data}")

# Test the recommendation view
from django.test import RequestFactory
from .views import LanguageExchangeRecommendationView

factory = RequestFactory()
request = factory.get('/recommendations/1/')  # Replace '1' with the actual user ID
view = LanguageExchangeRecommendationView.as_view()
response = view(request, pk=1)  # Replace '1' with the actual user ID

print(response.data)
