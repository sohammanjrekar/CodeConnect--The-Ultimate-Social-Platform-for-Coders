import random
from faker import Faker
from django.contrib.auth.models import User
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment

fake = Faker()

def generate_fake_mentorship_profiles(num_profiles=10):
    for _ in range(num_profiles):
        user = User.objects.create(
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password()
        )
        profile = MentorshipProfile.objects.create(
            user=user,
            expertise=fake.sentence(),
            availability=fake.random_element(elements=("Weekdays evenings", "Weekends", "Flexible")),
            feedback=fake.paragraph()
        )
        generate_fake_shared_resources(profile)
        generate_fake_contact_methods(profile)
        generate_fake_mentor_comments(profile)

def generate_fake_shared_resources(profile, num_resources=3):
    for _ in range(num_resources):
        sender = profile.user
        receiver = random.choice(User.objects.exclude(id=sender.id))
        SharedResource.objects.create(
            title=fake.catch_phrase(),
            content=fake.paragraph(),
            sender=sender,
            receiver=receiver
        )

def generate_fake_contact_methods(profile, num_methods=2):
    for _ in range(num_methods):
        ContactMethod.objects.create(
            method=random.choice(['email', 'phone', 'chat', 'video_call']),
            value=fake.email() if random.choice([True, False]) else fake.phone_number(),
            mentor=profile
        )

def generate_fake_mentor_comments(profile, num_comments=3):
    for _ in range(num_comments):
        mentee = random.choice(User.objects.exclude(id=profile.user.id))
        MentorComment.objects.create(
            mentee=mentee,
            content=fake.paragraph(),
            mentor=profile
        )

def generate_fake_data():
    generate_fake_mentorship_profiles()

if __name__ == '__main__':
    generate_fake_data()
