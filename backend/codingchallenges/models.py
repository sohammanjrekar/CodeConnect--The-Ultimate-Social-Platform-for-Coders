# codingchallenges/models.py
from django.db import models
from account.models import User

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class TestCase(models.Model):
    input_data = models.TextField()
    expected_output = models.TextField()
    

    def __str__(self):
        return f"Input: {self.input_data}, Expected Output: {self.expected_output}"


class CodingChallenge(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    difficulty_choices = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]
    difficulty = models.CharField(max_length=10, choices=difficulty_choices)
    tags = models.ManyToManyField(Tag, related_name='coding_challenges', blank=True)
    test_cases = models.ManyToManyField(TestCase, related_name='coding_challenge', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    points = models.PositiveIntegerField()
    winners = models.ManyToManyField(User, related_name='won_coding_challenges', blank=True)

    def __str__(self):
        return self.title

    def save_top_three_winners(self):
        # Get all solutions associated with this coding challenge
        solutions = self.solutions.all()

        # Calculate the difference between likes and dislikes for each solution
        solutions_diff = []
        for solution in solutions:
            diff = solution.likes - solution.dislikes
            solutions_diff.append((solution, diff))

        # Sort solutions based on the difference
        sorted_solutions = sorted(solutions_diff, key=lambda x: x[1], reverse=True)

        # Save the top three winners with their ranks
        top_three_winners = sorted_solutions[:3]
        for index, (solution, _) in enumerate(top_three_winners):
            rank = index + 1  # Ranks start from 1
            if rank == 1:
                self.winners.add(solution.user, through_defaults={'rank': '1st'})
            elif rank == 2:
                self.winners.add(solution.user, through_defaults={'rank': '2nd'})
            elif rank == 3:
                self.winners.add(solution.user, through_defaults={'rank': '3rd'})

        # Save the coding challenge instance
        self.save()


    def award_points_and_badges(self, user):
        # Increase user's points based on the challenge points
        user.points += self.points
        user.User_points += self.points  # Update the challenge points
        user.save()

        return self.points


class Solution(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    allsolution = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    language = models.CharField(max_length=50,default="")
    challenge= models.ManyToManyField(CodingChallenge, related_name='codingchallenges', blank=True)

    def __str__(self):
        return f"Solution by {self.user.username}"