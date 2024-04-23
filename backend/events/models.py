# events/models.py
from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from account.models import User

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='organized_events')
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255)
    qr_code = models.CharField(max_length=255,null=True, blank=True)
    gapy_number = models.CharField(max_length=20, null=True, blank=True)
    VIRTUAL = 'virtual'
    REAL = 'real'
    EVENT_TYPE_CHOICES = [
        (VIRTUAL, 'Virtual'),
        (REAL, 'Real'),
    ]
    event_type = models.CharField(max_length=10, choices=EVENT_TYPE_CHOICES, default=REAL)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Event, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('events:event-detail', args=[str(self.slug)])

    def __str__(self):
        return self.title

    
# events/models.py
class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    is_successful = models.BooleanField(default=False)  # Add this field to track payment status

    def __str__(self):
        return f"{self.user.username} - {self.event.title} - {self.amount} - {self.payment_date} - {'Success' if self.is_successful else 'Failure'}"


class Participant(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='participants')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events_attending')
    joined_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('event', 'user')
# events/models.py
class VirtualEvent(models.Model):
    event = models.OneToOneField(Event, on_delete=models.CASCADE, related_name='virtual_event')
    platform = models.CharField(max_length=100)
    meeting_link = models.URLField()
