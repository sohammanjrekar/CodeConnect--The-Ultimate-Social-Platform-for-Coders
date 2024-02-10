import uuid
from django.contrib.auth import get_user_model
from faker import Faker
from ProjectRecommendations.models import Project, ProgrammingLanguage, Tool, Tag

fake = Faker()
User = get_user_model()

def generate_fake_programming_languages(num_languages=10):
    languages = [ProgrammingLanguage(name=fake.word()) for _ in range(num_languages)]
    ProgrammingLanguage.objects.bulk_create(languages)

def generate_fake_tools(num_tools=10):
    tools = [Tool(name=fake.word()) for _ in range(num_tools)]
    Tool.objects.bulk_create(tools)

def generate_fake_tags(num_tags=10):
    tags = [Tag(name=fake.word()) for _ in range(num_tags)]
    Tag.objects.bulk_create(tags)

def generate_fake_projects(num_projects=20):
    users = User.objects.all()
    languages = ProgrammingLanguage.objects.all()
    tools = Tool.objects.all()
    tags = Tag.objects.all()

    projects = []

    for _ in range(num_projects):
        user = fake.random_element(elements=users)
        title = fake.text(max_nb_chars=50)
        description = fake.text(max_nb_chars=200)
        github_link = fake.url()
        image = fake.image_url() if fake.boolean(chance_of_getting_true=30) else None
        difficulty = fake.random_element(elements=['easy', 'medium', 'hard'])
        domain = fake.random_element(elements=['web', 'mobile', 'data', 'ai', 'iot', 'other'])
        created_at = fake.date_time_this_decade()
        likes = fake.random_int(min=0, max=100)
        dislikes = fake.random_int(min=0, max=50)
        rating = fake.pyfloat(left_digits=2, right_digits=1)

        project = Project(
            id=uuid.uuid4(),
            user=user,
            title=title,
            description=description,
            github_link=github_link,
            image=image,
            difficulty=difficulty,
            domain=domain,
            created_at=created_at,
            likes=likes,
            dislikes=dislikes,
            rating=rating,
        )

        project.save()
        project.languages.set(fake.random_elements(elements=languages, length=fake.random_int(min=0, max=5)))
        project.tools.set(fake.random_elements(elements=tools, length=fake.random_int(min=0, max=5)))
        project.tags.set(fake.random_elements(elements=tags, length=fake.random_int(min=0, max=5)))

        projects.append(project)

    return projects

def generate_fake_data():
    generate_fake_programming_languages()
    generate_fake_tools()
    generate_fake_tags()
    generate_fake_projects()

if __name__ == "__main__":
    generate_fake_data()
