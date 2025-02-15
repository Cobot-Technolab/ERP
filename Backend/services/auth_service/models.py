from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Custom User model with email-based authentication.
    """
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
