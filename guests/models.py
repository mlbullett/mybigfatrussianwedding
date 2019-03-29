""" Imports """
import uuid
from django.db import models


def _random_uuid():
    return uuid.uuid4().hex


ALLOWED_CATS = [
    ('max,', 'max'),
    ('nastia', 'nastia'),
    ('both', 'both'),
]

ALLOWED_LANGS = [
    ('en', 'en'),
    ('fr', 'fr'),
    ('ru', 'ru'),
]


class Party(models.Model):
    """ Model for parties consisting of one or more guests """
    partyname = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=ALLOWED_CATS)
    email = models.EmailField(max_length=100)
    language = models.CharField(max_length=10, choices=ALLOWED_LANGS)
    invitation_id = models.CharField(
        max_length=32, db_index=True, default=_random_uuid, unique=True)
    invitation_sent = models.DateTimeField(null=True, blank=True, default=None)
    invitation_opened = models.DateTimeField(
        null=True, blank=True, default=None)
    is_invited = models.BooleanField(default=False)
    is_attending = models.BooleanField(default=None)
    song = models.TextField(null=True, blank=True)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.partyname


class Guest(models.Model):
    """ Model for individual guests """
    party = models.ForeignKey(Party, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dietary = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
