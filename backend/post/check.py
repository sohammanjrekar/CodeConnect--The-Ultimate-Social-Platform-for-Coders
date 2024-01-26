from post.nlp_utils import extract_keywords

# Sample input text
sample_text = """
Natural language processing (NLP) is a subfield of artificial intelligence (AI) 
that focuses on the interaction between computers and humans using natural language.
"""

def extarct_keywords(text):
    return extract_keywords(text)

keywords=extarct_keywords(sample_text)
# Print the result
print("Input Text:")
print(sample_text)
print("\nExtracted Keywords:")
print(keywords)


# Extracted Keywords:
# ['artificial intelligence', 'subfield', 'nlp', 'interaction', 'focuses', 'computers', 'ai']