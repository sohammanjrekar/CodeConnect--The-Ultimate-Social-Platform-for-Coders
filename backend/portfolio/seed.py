import random
from faker import Faker
from django.contrib.auth.models import User
from portfolio.models import ProjectCategory, Technology, Project, ProjectImage, Resume
from django.utils import timezone

fake = Faker()

# Function to create fake project categories
def generate_fake_project_categories(num_categories=5):
    categories = [ProjectCategory(name=fake.word()) for _ in range(num_categories)]
    ProjectCategory.objects.bulk_create(categories)

# Function to create fake technologies
def generate_fake_technologies(num_technologies=10):
    technologies = [Technology(name=fake.word()) for _ in range(num_technologies)]
    Technology.objects.bulk_create(technologies)

# Function to create fake projects
# Function to create fake projects
def generate_fake_projects(num_projects=20):
    users = User.objects.all()
    categories = ProjectCategory.objects.all()
    technologies = Technology.objects.all()
    projects = []

    for _ in range(num_projects):
        owner = fake.random_element(users)
        
        # Adjusting the sample size to ensure it's within a valid range
        max_collaborators = min(5, len(users.exclude(pk=owner.pk)))
        collaborators = random.sample(list(users.exclude(pk=owner.pk)), k=fake.random_int(min=0, max=max_collaborators))
        
        start_date = fake.date_this_decade()
        end_date = fake.date_between_dates(date_start=start_date, date_end=timezone.now().date()) if fake.boolean(chance_of_getting_true=50) else None
        is_published = fake.boolean(chance_of_getting_true=90)

        project = Project(
            title=fake.catch_phrase(),
            description=fake.text(),
            owner=owner,
            start_date=start_date,
            end_date=end_date,
            is_published=is_published,
        )
        project.save()
        project.collaborators.set(collaborators)
        project.technologies_used.set(fake.random_elements(elements=technologies, length=fake.random_int(min=0, max=5)))
        project.categories.set(fake.random_elements(elements=categories, length=fake.random_int(min=0, max=3)))

        # Create project images
        num_images = fake.random_int(min=0, max=5)
        images = [ProjectImage(project=project, image=fake.image_url()) for _ in range(num_images)]
        ProjectImage.objects.bulk_create(images)

        projects.append(project)

# Function to create fake resumes
def generate_fake_resumes(num_resumes=10):
    users = User.objects.all()
    resumes = []

    for _ in range(num_resumes):
        user = fake.random_element(users)
        resume = Resume(
            user=user,
            resume_file=fake.file_path(extension='pdf'),
            education=fake.text(),
            work_experience=fake.text(),
            skills=fake.text(),
            contact_information=fake.text(),
        )
        resumes.append(resume)

    Resume.objects.bulk_create(resumes)

# Function to generate fake data for the portfolio app
def generate_fake_portfolio_data():
    generate_fake_project_categories()
    generate_fake_technologies()
    generate_fake_projects()
    generate_fake_resumes()

if __name__ == "__main__":
    generate_fake_portfolio_data()
