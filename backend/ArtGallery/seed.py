import random
from faker import Faker
from django.contrib.auth.models import User
from Artallery.models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest
from django.utils import timezone

fake = Faker()

def create_fake_users(num_users=10):
    for _ in range(num_users):
        username = fake.user_name()
        email = fake.email()
        password = fake.password()
        user = User.objects.create_user(username=username, email=email, password=password)

def create_fake_tags(num_tags=10):
    for _ in range(num_tags):
        name = fake.word()
        Tag.objects.create(name=name)

def create_fake_designer_profiles():
    users = User.objects.all()
    for user in users:
        bio = fake.paragraph()
        location = fake.city()
        portfolio_link = fake.url()
        DesignerProfile.objects.create(user=user, bio=bio, location=location, portfolio_link=portfolio_link)

def create_fake_galleries(num_galleries=20):
    designers = DesignerProfile.objects.all()
    tags = Tag.objects.all()
    for _ in range(num_galleries):
        designer = random.choice(designers)
        title = fake.sentence()
        description = fake.paragraph()
        gallery = Gallery.objects.create(designer=designer, title=title, description=description)
        gallery.tags.set(random.sample(list(tags), random.randint(1, 5)))

def create_fake_images(num_images=50):
    galleries = Gallery.objects.all()
    for _ in range(num_images):
        gallery = random.choice(galleries)
        image = fake.image_url()
        description = fake.paragraph()
        Image.objects.create(gallery=gallery, image=image, description=description)

def create_fake_comments(num_comments=100):
    users = User.objects.all()
    images = Image.objects.all()
    for _ in range(num_comments):
        user = random.choice(users)
        image = random.choice(images)
        content = fake.paragraph()
        Comment.objects.create(user=user, image=image, content=content)

def create_fake_contact_requests(num_requests=50):
    users = User.objects.all()
    for _ in range(num_requests):
        sender = random.choice(users)
        receiver = random.choice(users.exclude(id=sender.id))
        message = fake.paragraph()
        ContactRequest.objects.create(sender=sender, receiver=receiver, message=message, is_accepted=random.choice([True, False]))

def generate_fake_data():
    create_fake_users()
    create_fake_tags()
    create_fake_designer_profiles()
    create_fake_galleries()
    create_fake_images()
    create_fake_comments()
    create_fake_contact_requests()

if __name__ == '__main__':
    generate_fake_data()
