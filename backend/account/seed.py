import uuid
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group, Permission
from account.models import Friendship, Keyword, ProgrammingLanguage
from faker import Faker
from account.models import User
fake = Faker()

# Function to generate fake data for User model
def generate_fake_users(num_users=10):
    users = []
    for _ in range(num_users):
        user_data = {
            'email': fake.email(),
            'first_name': fake.first_name(),
            'last_name': fake.last_name(),
            'username': fake.user_name(),
            'bio': fake.text(),
            'date_of_birth': fake.date_of_birth(),
            'phone_number': fake.phone_number(),
            'Country_name': fake.country(),
        }
        user = User(**user_data)
        user.save()
        users.append(user)

# Function to generate fake data for Keyword model
def generate_fake_keywords(num_keywords=10):
    keywords = [Keyword(name=fake.word()) for _ in range(num_keywords)]
    Keyword.objects.bulk_create(keywords)

# Function to generate fake data for ProgrammingLanguage model
def generate_fake_programming_languages(num_languages=10):
    languages = [ProgrammingLanguage(name=fake.word()) for _ in range(num_languages)]
    ProgrammingLanguage.objects.bulk_create(languages)

# Function to generate fake data for Friendship model
def generate_fake_friendships(num_friendships=10):
    User = get_user_model()
    friendships = []

    for _ in range(num_friendships):
        created_for = User.objects.order_by('?').first()
        created_by = User.objects.exclude(pk=created_for.pk).order_by('?').first()
        status = fake.random_element(elements=('sent', 'accepted', 'rejected'))

        friendship = Friendship(
            id=uuid.uuid4(),
            created_for=created_for,
            created_by=created_by,
            status=status,
        )
        friendships.append(friendship)

    Friendship.objects.bulk_create(friendships)

# Function to generate fake data for Group model
def generate_fake_groups(num_groups=5):
    groups = [Group(name=fake.word()) for _ in range(num_groups)]
    Group.objects.bulk_create(groups)

# Function to generate fake data for Permission model
def generate_fake_permissions(num_permissions=10):
    permissions = [Permission(name=fake.word()) for _ in range(num_permissions)]
    Permission.objects.bulk_create(permissions)

def generate_fake_data(num_users=10, num_keywords=10, num_languages=10, num_friendships=10, num_groups=5, num_permissions=10):
    generate_fake_users(num_users)
    generate_fake_keywords(num_keywords)
    generate_fake_programming_languages(num_languages)
    generate_fake_friendships(num_friendships)
    generate_fake_groups(num_groups)
    generate_fake_permissions(num_permissions)

if __name__ == "__main__":
    generate_fake_data()
