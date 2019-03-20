from django.db import models
import datetime
import uuid


def _random_uuid(***REMOVED***:
    return uuid.uuid4(***REMOVED***.hex


ALLOWED_CATS = [
    ('max,', 'max'***REMOVED***,
    ('nastia', 'nastia'***REMOVED***,
    ('both', 'both'***REMOVED***,
***REMOVED***

ALLOWED_LANGS = [
    ('en', 'en'***REMOVED***,
    ('fr', 'fr'***REMOVED***,
    ('ru', 'ru'***REMOVED***,
***REMOVED***


class Group(models.Model***REMOVED***:
    name = models.CharField(max_length=100***REMOVED***
    category = models.CharField(max_length=10, choices=ALLOWED_CATS***REMOVED***
    language = models.CharField(max_length=10, choices=ALLOWED_LANGS***REMOVED***
    invitation_id = models.CharField(max_length=32, db_index=True, default=_random_uuid, unique=True***REMOVED***
    invitation_sent = models.DateTimeField(null=True, blank=True, default=None***REMOVED***
    invitation_opened = models.DateTimeField(null=True, blank=True, default=None***REMOVED***
    is_invited = models.BooleanField(default=False***REMOVED***
    is_attending = models.BooleanField(default=None***REMOVED***
    message = models.TextField(null=True, blank=True***REMOVED***

    def __str__(self***REMOVED***:
        return self.name


class Guest(models.Model***REMOVED***:
    group = models.ForeignKey(Group, on_delete=models.DO_NOTHING***REMOVED***
    first_name = models.CharField(max_length=100***REMOVED***
    last_name = models.CharField(max_length=100***REMOVED***
    email = models.EmailField(null=True, blank=True***REMOVED***
    is_attending = models.BooleanField(default=None***REMOVED***
    dietary_specs = models.TextField(blank=True***REMOVED***

    def __str__(self***REMOVED***:
        return self.first_name
