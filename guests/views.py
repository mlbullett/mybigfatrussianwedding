""" Imports """
from django.http import HttpResponseRedirect


def rsvp_view(request):
    """ RSVP form handling """
    if request.method == 'POST':
        email = request.POST['email']
        print(email)
        return HttpResponseRedirect('#thankyou')
