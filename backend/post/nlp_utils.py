from rake_nltk import Rake

def extract_keywords(text):
    # Initialize the Rake object with specific parameters
    rake = Rake(
        ranking_metric='deg',  # Degree Centrality as the ranking metric
        max_length=2,           # Maximum length of a phrase to be considered as a keyword
        min_length=1,           # Minimum length of a phrase to be considered as a keyword
        stopwords=None,         # Custom stop words (you can provide your own list)
        punctuations=None,      # Custom punctuation characters to be ignored
        language='english'      # Language for stop words and stemming
    )

    # Extract keywords from the text
    rake.extract_keywords_from_text(text)

    # Get the ranked keywords
    ranked_keywords = rake.get_ranked_phrases()

    return ranked_keywords
