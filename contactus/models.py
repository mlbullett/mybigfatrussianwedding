""" contactus/models.py """
from django.db import models
from django.utils.timezone import now


class Contact(models.Model):
    """ model for contacts """
    name = models.CharField(max_length=200)
    from_email = models.EmailField(max_length=100)
    message = models.TextField()
    contact_date = models.DateTimeField(default=now)

    def __str__(self):
        return self.name
