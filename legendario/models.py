from django.db import models


class Client(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    country = models.CharField(max_length=50, blank=True)