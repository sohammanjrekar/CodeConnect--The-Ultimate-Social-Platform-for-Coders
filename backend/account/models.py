
from django.db import models
import uuid
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,UserManager, Group, Permission
from django.db import models
from django.utils import timezone
# Create your models here.

class CustomUserManager(UserManager):
    def _create_user(self,name,email,password,**extra_fields):
        if not email:
            raise ValueError("Email must be set")
        email=self.normalize_email(email)
        user=self.model(email=email,name=name,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self,name=None,email=None,password=None,**extra_fields):
        extra_fields.setdefault("is_staff",False)
        extra_fields.setdefault("is_superuser",False)
        return self._create_user(name,email,password,**extra_fields)
    
    def create_superuser(self, name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields["is_staff"] is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields["is_superuser"] is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self._create_user(name, email, password, **extra_fields)
    
class User(AbstractBaseUser,PermissionsMixin):
    groups = models.ManyToManyField(Group, related_name='account_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='account_user_permissions')

    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    email=models.EmailField(unique=True)
    name=models.CharField(max_length=255,blank=True,default="")
    avatar=models.ImageField(upload_to="avatars/",blank=True,null=True)
    
    is_active=models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    
    date_joined=models.DateField(default=timezone.now)
    last_login=models.DateField(blank=True,null=True)
    groups = models.ManyToManyField(Group, related_name='account_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='account_user_permissions')

    objects=CustomUserManager()
    
    USERNAME_FIELD="email"
    EMAIL_FIELD="email"
    REQUIRED_FIELDS=[]
    
    def get_avatar(self):
        if self.avatar:
            return settings.WEBSITE_URL + self.avatar.url
        else:
            return 'https://picsum.photos/200/200'



class FriendshipRequest(models.Model):
    SENT = 'sent'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'

    STATUS_CHOICES = (
        (SENT, 'Sent'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_for = models.ForeignKey(User, related_name='received_friendshiprequests', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='created_friendshiprequests', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=SENT)