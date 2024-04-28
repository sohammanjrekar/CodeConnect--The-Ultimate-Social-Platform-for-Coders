from .models import Project, Keyword
from rake_nltk import Rake

import nltk
nltk.download('punkt')
nltk.download('stopwords')

def extract_keywords(text):
    rake = Rake(
        ranking_metric='deg',
        max_length=2,
        min_length=1,
        stopwords=None,
        punctuations=None,
        language='english'
    )
    rake.extract_keywords_from_text(text)
    ranked_keywords = rake.get_ranked_phrases_with_scores()
    keywords_with_context = [keyword for _, keyword in ranked_keywords]
    return keywords_with_context

def update_keywords_from_projects():
    projects = Project.objects.all()

    for project in projects:
        try:
            keywords_from_project = extract_keywords_from_project(project)
            update_keywords(keywords_from_project, project.id)
        except Exception as e:
            # Handle exceptions gracefully, e.g., logging
            print(f"Error processing project {project.id}: {e}")

def extract_keywords_from_project(project):
    description_keywords = extract_keywords(project.description)
    combined_keywords = description_keywords  # You can add more sources of keywords here if needed
    return combined_keywords

def update_keywords(keywords, project_id):
    for keyword_text in keywords:  
        keyword, created = Keyword.objects.get_or_create(text=keyword_text)
        keyword.relevance += 1
        keyword.frequency += 2
        keyword.context = ""  # For context, you might want to extract it from the text later
        keyword.save()
        
        # Associate keyword with project
        keyword.project_keyword.add(project_id)

# Call the function to update keywords from projects
update_keywords_from_projects()
