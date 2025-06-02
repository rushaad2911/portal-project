from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4



class CustomUser(AbstractUser):
    id = models.UUIDField(default=uuid4,primary_key=True)