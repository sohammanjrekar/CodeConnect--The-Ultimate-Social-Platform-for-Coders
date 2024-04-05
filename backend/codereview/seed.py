import random
from faker import Faker
from django.contrib.auth.models import User
from codereview.models import CodeSnippet, Tag, CodeReview, CodeAttachment, Comment
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

def create_fake_code_snippets(num_snippets=20):
    users = User.objects.all()
    tags = Tag.objects.all()
    for _ in range(num_snippets):
        user = random.choice(users)
        title = fake.sentence()
        description = fake.paragraph()
        code = fake.text()
        github_link = fake.url() if random.choice([True, False]) else None
        language = fake.word() if random.choice([True, False]) else ''
        snippet = CodeSnippet.objects.create(user=user, title=title, description=description, code=code, github_link=github_link, language=language)
        snippet.tags.set(random.sample(list(tags), random.randint(1, 5)))

def create_fake_code_reviews(num_reviews=50):
    users = User.objects.all()
    snippets = CodeSnippet.objects.all()
    for _ in range(num_reviews):
        user = random.choice(users)
        snippet = random.choice(snippets)
        content = fake.paragraph()
        rating = random.randint(1, 5)
        CodeReview.objects.create(user=user, code_snippet=snippet, content=content, rating=rating)

def create_fake_comments(num_comments=100):
    users = User.objects.all()
    snippets = CodeSnippet.objects.all()
    for _ in range(num_comments):
        user = random.choice(users)
        snippet = random.choice(snippets)
        content = fake.paragraph()
        Comment.objects.create(user=user, code_snippet=snippet, content=content)

def create_fake_attachments(num_attachments=50):
    for _ in range(num_attachments):
        file = fake.file_name()
        description = fake.paragraph()
        CodeAttachment.objects.create(file=file, description=description)

def generate_fake_data():
    create_fake_users()
    create_fake_tags()
    create_fake_code_snippets()
    create_fake_code_reviews()
    create_fake_comments()
    create_fake_attachments()

if __name__ == '__main__':
    generate_fake_data()
