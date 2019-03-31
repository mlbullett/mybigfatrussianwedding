""" pages/views.py """
from django.shortcuts import render
from guests.forms import PARTYFORMSET, GUESTFORMSET


def index(request):
    """ Render index page """
    partyform = PARTYFORMSET(prefix="rsvp")
    guestform = GUESTFORMSET()
    context = {
        'partyform': partyform,
        'guestformset': guestform
    }
    return render(request, 'pages/index.html', context)
