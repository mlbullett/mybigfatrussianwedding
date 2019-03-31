""" Imports """
from django import forms
from django.utils.translation import ugettext_lazy as _

from .models import Party, Guest

firstname_ph = _('First name')
surname_ph = _('Surname')
dietary_ph = _('Any dietary restrictions?')
accept_ph = _("Accept with pleasure")
reject_ph = _("Decline with regrets")
email_ph = _('Your email address')
song_ph = _('Suggest a song for the reception')
message_ph = _('Leave a message for the bride and groom')

GUESTFORMSET = forms.inlineformset_factory(
    Party,
    Guest,
    fields=(
        'first_name',
        'last_name',
        'dietary'
    ),
    widgets={
        'first_name': forms.TextInput(attrs={'placeholder': firstname_ph, 'required': True}),
        'last_name': forms.TextInput(attrs={'placeholder': surname_ph, 'required': True}),
        'dietary': forms.TextInput(attrs={'placeholder': dietary_ph})
    },
    extra=1
)

BOOLCHOICES = (
    (True, accept_ph),
    (False, reject_ph),
)

PARTYFORMSET = forms.modelform_factory(
    Party,
    fields=(
        'email',
        'is_attending',
        'song',
        'message'
    ),
    widgets={
        'email': forms.EmailInput(attrs={'placeholder': email_ph, 'required': True}),
        'is_attending': forms.RadioSelect(choices=BOOLCHOICES, attrs={'required': True}),
        'song': forms.TextInput(attrs={'placeholder': song_ph}),
        'message': forms.Textarea(attrs={'placeholder': message_ph}),
    }
)
