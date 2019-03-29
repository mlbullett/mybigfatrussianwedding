""" contactus/views.py """
import json
from django.core.mail import send_mail, BadHeaderError
#from django.contrib import messages
from django.http import HttpResponse
from django.utils.translation import gettext as _

from .models import Contact


def contactus(request):
    """ Contact form handling """
    print(request.method)
    if request.method == 'POST':
        name = request.POST['name']
        from_email = request.POST['from_email']
        message = request.POST['message']

        contact = Contact(
            name=name,
            from_email=from_email,
            message=message
        )
        contact.save()

        """
        try:
            send_mail(
                name + ' has a question regarding the wedding!',
                message,
                from_email,
                ['joinus@mybigfatrussian.wedding']
            )
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        """

        response_data = {}
        response_data['result'] = 'Message sent!'
        response_data['name'] = contact.name

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    return HttpResponse(
        json.dumps({"nothing to see": "this isn't happening"}),
        content_type="application/json"
    )
