# tasks.py
from celery import shared_task
from nlp_utils import extract_keywords

@shared_task
def extract_keywords_task(text):
    return extract_keywords(text)
