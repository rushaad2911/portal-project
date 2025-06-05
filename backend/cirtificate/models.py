from django.db import models
from uuid import uuid4


class Certificate(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid4())
    certificate_name = models.CharField(max_length=200,blank=False,null=False)
    certificate_date = models.DateField()
    certificate_issuer = models.CharField(max_length=100,blank=True,null=True)
    certificate_tags = models.CharField(max_length=255, help_text="Enter tags separated by commas (e.g., frontend, backend)")