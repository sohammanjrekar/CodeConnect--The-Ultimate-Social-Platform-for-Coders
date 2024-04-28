from django.db import models
import uuid
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager, Group, Permission
from django.utils import timezone




class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True

    def soft_delete(self):
        self.is_active = False
        self.save()

    def hard_delete(self):
        super(BaseModel, self).delete()

    def get_created_at_formatted(self):
        return self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def get_updated_at_formatted(self):
        return self.updated_at.strftime('%Y-%m-%d %H:%M:%S')

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now()
        super(BaseModel, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.__class__.__name__} (ID: {self.id})"

class CustomUserManager(UserManager):
    def _create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError("Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(self, username=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields["is_staff"] is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields["is_superuser"] is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self._create_user(username, email, password, **extra_fields)


class UserKeyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
class User(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255, blank=True, default="")
    last_name = models.CharField(max_length=255, blank=True, default="")
    avatar =  models.URLField(max_length=2000,null=True) 
    banner =  models.URLField(max_length=2000,null=True) 
    username = models.CharField(max_length=50, unique=True, blank=True)
    bio = models.TextField(blank=True)
    Keyword = models.ManyToManyField('UserKeyword', related_name='users_keywords', blank=True)
    ProgrammingLanguage = models.ManyToManyField('ProgrammingLanguage', related_name='users', blank=True)
    Friendship = models.ManyToManyField('self', symmetrical=False, related_name='user_friends', blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=10, blank=True)
    Country_name = models.CharField(max_length=50, blank=True)
    points = models.PositiveIntegerField(default=0)
    city = models.CharField(max_length=255,blank=True)
    languages = models.ManyToManyField(Language,related_name='user_Speak',blank=True)
    twitter = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    portfolio = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    job_position = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group, related_name='account_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='account_user_permissions')
    User_points= models.PositiveIntegerField(default=0)
    objects = CustomUserManager()
    post_predictions = models.JSONField(default=dict)
    admin_objects = models.Manager()

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = []
    def update_post_prediction(self, keyword_text, post_id, prediction):
        """
        Update the post prediction for the given keyword and post.
        """
        if not hasattr(self, 'post_predictions'):
            self.post_predictions = {}
        if keyword_text not in self.post_predictions:
            self.post_predictions[keyword_text] = {}
        self.post_predictions[keyword_text][post_id] = prediction
        self.save()

    def get_post_prediction(self, keyword_text, post_id):
        """
        Retrieve the post prediction for the given keyword and post.
        """
        try:
            return self.post_predictions[keyword_text][post_id]
        except (AttributeError, KeyError):
            return None
    def get_avatar(self):
        if self.avatar:
            return settings.WEBSITE_URL + self.avatar.url
        else:
            return 'https://picsum.photos/200/200'

    def save(self, *args, **kwargs):
        if not self.username:
            base_username = f"{self.first_name.lower()}_{self.last_name.lower()}"
            random_suffix = uuid.uuid4().hex[:6]
            unique_username = f"{base_username}_{random_suffix}"
            self.username = unique_username

        super(User, self).save(*args, **kwargs)

    
    def __str__(self):
        return self.email



class ProgrammingLanguage(BaseModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Friendship(models.Model):
    SENT = 'sent'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'

    STATUS_CHOICES = (
        (SENT, 'Sent'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected'),
    )

   
    created_for = models.ForeignKey(User, related_name='received_friendshiprequests', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='created_friendshiprequests', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=SENT)

    def __str__(self):
        return f"Friendship ({self.id})"

from rest_framework_simplejwt.tokens import Token
class CustomToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jti = models.CharField(unique=True, max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'custom_token'




