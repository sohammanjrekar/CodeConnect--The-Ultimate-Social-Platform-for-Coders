import random
from faker import Faker
from django.contrib.auth.models import User
from jobportal.models import JobCategory, Skill, Benefit, JobPosting
from django.utils import timezone

fake = Faker()

# Function to create fake job categories
def generate_fake_job_categories(num_categories=5):
    categories = [JobCategory(name=fake.word()) for _ in range(num_categories)]
    JobCategory.objects.bulk_create(categories)

# Function to create fake skills
def generate_fake_skills(num_skills=10):
    skills = [Skill(name=fake.word()) for _ in range(num_skills)]
    Skill.objects.bulk_create(skills)

# Function to create fake benefits
def generate_fake_benefits(num_benefits=10):
    benefits = [Benefit(name=fake.sentence(nb_words=3)) for _ in range(num_benefits)]
    Benefit.objects.bulk_create(benefits)

# Function to create fake job postings
from django.utils import timezone

def generate_fake_job_postings(num_postings=20):
    users = User.objects.all()
    categories = JobCategory.objects.all()
    skills = Skill.objects.all()
    benefits = Benefit.objects.all()

    for _ in range(num_postings):
        title = fake.job()
        company_name = fake.company()
        location = fake.city()
        description = fake.paragraph(nb_sentences=4)
        requirements = fake.paragraph(nb_sentences=3)
        posted_by = fake.random_element(users)
        is_active = fake.boolean(chance_of_getting_true=90)
        application_email = fake.company_email()
        application_deadline = fake.date_time_between(start_date='+1d', end_date='+90d') if fake.boolean(chance_of_getting_true=70) else None
        salary_min = fake.random_number(digits=5)
        salary_max = salary_min + fake.random_number(digits=5)
        is_featured = fake.boolean(chance_of_getting_true=20)
        application_tracking_link = fake.url() if fake.boolean(chance_of_getting_true=70) else ""

        job_posting = JobPosting(
            title=title,
            company_name=company_name,
            location=location,
            description=description,
            requirements=requirements,
            posted_by=posted_by,
            is_active=is_active,
            application_email=application_email,
            application_deadline=application_deadline,
            salary_min=salary_min,
            salary_max=salary_max,
            is_featured=is_featured,
            application_tracking_link=application_tracking_link,
        )
        job_posting.save()
        job_posting.categories.set(fake.random_elements(elements=categories, length=fake.random_int(min=1, max=3)))
        job_posting.skills_required.set(fake.random_elements(elements=skills, length=fake.random_int(min=1, max=5)))
        job_posting.benefits.set(fake.random_elements(elements=benefits, length=fake.random_int(min=1, max=5)))
# Function to generate fake data for the job portal app
def generate_fake_job_portal_data():
    generate_fake_job_categories()
    generate_fake_skills()
    generate_fake_benefits()
    generate_fake_job_postings()

if __name__ == "__main__":
    generate_fake_job_portal_data()
