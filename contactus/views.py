from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.utils.translation import gettext as _


from .models import Contact


def contactus(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        next = request.POST.get('next', '/')

        contact = Contact(name=name, email=email, message=message)

        contact.save()

        #send_mail(
        #    name + ' has a question regarding the wedding!',
        #    message,
        #    email,
        #    ['joinus@mybigfatrussian.wedding'],
        #    fail_silently=False
        #)

        messages.success(request, _("We will get back to you as soon as a possible!"))
        return HttpResponseRedirect(next)
