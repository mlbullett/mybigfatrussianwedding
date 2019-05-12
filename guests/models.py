""" Imports """
from django.db import models

ALLOWED_LANGS = [
    ('en', 'en'),
    ('fr', 'fr'),
    ('ru', 'ru'),
]


class Party(models.Model):
    """ Model for parties consisting of one or more guests """
    class Meta:
        """ Meta properties """
        verbose_name_plural = 'Parties'

    partyname = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=100)
    language = models.CharField(max_length=10, choices=ALLOWED_LANGS)
    is_attending = models.BooleanField(default=None)
    song = models.TextField(null=True, blank=True)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.partyname)


class Guest(models.Model):
    """ Model for individual guests """
    party = models.ForeignKey(Party, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dietary = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.first_name + ' ' + self.last_name)
