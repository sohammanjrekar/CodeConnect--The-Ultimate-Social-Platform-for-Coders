from django.contrib.auth.forms import UserCreationForm
from .models import User
from django import forms

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("email", "username", "password1", "password2")


class ProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('email', 'username', 'avatar',)