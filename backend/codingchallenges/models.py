from django.db import models

class CodingChallenge(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    
class Submission(models.Model):
    challenge = models.ForeignKey(CodingChallenge, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists
    code = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
