from MentorshipMatching.models import MentorshipProfile, Keyword
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
def update_keywords_from_mentors():
    mentorship_profiles = MentorshipProfile.objects.all()

    for mentorship_profile in mentorship_profiles:
        try:
            keywords_from_mentor = extract_keywords_from_mentor(mentorship_profile)
            update_keywords(keywords_from_mentor, mentorship_profile.id)
        except Exception as e:
            # Handle exceptions gracefully, e.g., logging
            print(f"Error processing mentorship profile {mentorship_profile.id}: {e}")

def extract_keywords_from_mentor(mentorship_profile):
    expertise_keywords = extract_keywords(mentorship_profile.expertise)
    combined_keywords = expertise_keywords  # You can add more fields as needed
    return combined_keywords

def update_keywords(keywords, mentorship_profile_id):
    for keyword_text in keywords:
        keyword, created = Keyword.objects.get_or_create(text=keyword_text)
        keyword.relevance += 1
        keyword.frequency += 2
        keyword.context = ""  # For context, you might want to extract it from the text later
        keyword.save()
        
        # Associate keyword with mentorship profile
        keyword.mentorship_keyword.add(mentorship_profile_id)

# Call the function to update keywords from mentors' expertise
update_keywords_from_mentors()
