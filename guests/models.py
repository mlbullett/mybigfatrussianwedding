from django.db import models
import datetime
import uuid


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


class Group(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=ALLOWED_CATS)
    language = models.CharField(max_length=10, choices=ALLOWED_LANGS)
    invitation_id = models.CharField(max_length=32, db_index=True, default=_random_uuid, unique=True)
    invitation_sent = models.DateTimeField(null=True, blank=True, default=None)
    invitation_opened = models.DateTimeField(null=True, blank=True, default=None)
    is_invited = models.BooleanField(default=False)
    is_attending = models.BooleanField(default=None)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Guest(models.Model):
    group = models.ForeignKey(Group, on_delete=models.DO_NOTHING)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    is_attending = models.BooleanField(default=None)
    dietary_specs = models.TextField(blank=True)

    def __str__(self):
        return self.first_name
