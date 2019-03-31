""" contactus/views.py """
from django.core.exceptions import ValidationError
from django.core.mail import send_mail, BadHeaderError
from django.http import JsonResponse
from django.utils.translation import gettext as _

from .models import Contact


def contactus(request):
    """ Contact form handling """
    if request.POST and request.is_ajax:
        name = request.POST['name']
        from_email = request.POST['from_email']
        message = request.POST['message']

        contact = Contact(
            name=name,
            from_email=from_email,
            message=message
        )

        try:
            contact.full_clean()
        except ValidationError as err:
            response = JsonResponse({"error": err.messages})
            response.status_code = 400
            return response

        contact.save()

        try:
            send_mail(
                name + ' has a question regarding the wedding!',
                message,
                from_email,
                ['joinus@mybigfatrussian.wedding']
            )
        except BadHeaderError:
            response = JsonResponse({
                "error": _("Invalid header found. Please refresh the page and try again.")
            })
            response.status_code = 400
            return response

        response = JsonResponse({
            "success": _("Thank you %(name)s, we will get back to you as soon as possible!") % {'name': contact.name}
        })
        return response

    response = JsonResponse({
        "error": _("Invalid request. Please refresh the page and try again.")
    })
    response.status_code = 400
    return response
