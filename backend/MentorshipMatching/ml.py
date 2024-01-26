# ml.py
from collections import Counter

class MentorMatching:
    @staticmethod
    def match_mentors_to_mentees(mentors, mentees):
        matches = []

        for mentee in mentees:
            mentee_languages = set(mentee.user.programming_languages.values_list('name', flat=True))
            mentee_keywords = set(mentee.user.keywords.values_list('name', flat=True))

            mentor_scores = []

            for mentor in mentors:
                mentor_languages = set(mentor.user.programming_languages.values_list('name', flat=True))
                mentor_keywords = set(mentor.user.keywords.values_list('name', flat=True))

                language_score = len(mentee_languages.intersection(mentor_languages))
                keyword_score = len(mentee_keywords.intersection(mentor_keywords))

                total_score = language_score + keyword_score

                mentor_scores.append({
                    'mentor': mentor.user.username,
                    'total_score': total_score,
                    'language_score': language_score,
                    'keyword_score': keyword_score,
                })

            # Sort mentors by total score in descending order
            mentor_scores.sort(key=lambda x: x['total_score'], reverse=True)

            # Select the top mentor
            if mentor_scores:
                top_mentor = mentor_scores[0]['mentor']
                matches.append({
                    'mentee': mentee.user.username,
                    'mentor': top_mentor,
                    'language_score': mentor_scores[0]['language_score'],
                    'keyword_score': mentor_scores[0]['keyword_score'],
                })

        return matches
