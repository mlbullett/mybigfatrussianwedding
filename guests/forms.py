""" Imports """
from django import forms
from .models import Party, Guest


class GuestForm(forms.Form):
    class Meta:
        model = Party
        fields = [
            'email',
            'is_attending',
        ]
