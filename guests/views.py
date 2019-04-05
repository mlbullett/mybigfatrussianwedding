""" Imports """
import json
from django.core.mail import send_mail, BadHeaderError
from django.http import JsonResponse
from django.utils.translation import gettext as _

from .models import Party, Guest


def rsvp_view(request):
    """ RSVP form handling """
    if request.POST and request.is_ajax:
        if Party.objects.filter(email=request.POST['email']).exists():
            response = JsonResponse({
                "error": _("You've already RSVPed!")
            })
            response.status_code = 400
            return response

        newparty = Party(
            email=request.POST['email'],
            language=request.LANGUAGE_CODE,
            is_attending=eval(request.POST['is_attending']),
            song=request.POST['song'],
            message=request.POST['message'],
        )

        newparty.save()

        guestlead = None
        email_content = "Message:\n" + newparty.message + \
            "\n\nSong:\n" + newparty.song + "\n"

        for i in json.loads(request.POST['guests']):
            newguest = Guest(
                first_name=i['first_name'],
                last_name=i['last_name'],
                dietary=i['dietary'],
                party_id=newparty.pk
            )

            newguest.save()

            if guestlead is None:
                guestlead = newguest.first_name + " " + newguest.last_name
            email_content += "\n" + newguest.first_name + " " + \
                newguest.last_name + "\nDietary needs:" + newguest.dietary

        newparty.partyname = guestlead
        newparty.save()

        try:
            if newparty.is_attending:
                subject = guestlead + ' is coming to our wedding!'
            else:
                subject = guestlead + ' unfortunately won\'t make it to our wedding.'

            send_mail(
                subject,
                email_content,
                newparty.email,
                ['joinus@mybigfatrussian.wedding']
            )
        except BadHeaderError:
            response = JsonResponse({
                "error": _("Invalid header found. Please refresh the page and try again.")
            })
            response.status_code = 400
            return response

        if newparty.is_attending:
            guestmessage = _("Thank you for accepting %(name)s, we can't wait to celebrate with you!") % {
                'name': guestlead}
        else:
            guestmessage = _(
                "Thank you for taking the time to answer %(name)s. Although we understand, you will be missed at our wedding.") % {'name': guestlead}

        response = JsonResponse({
            "success": guestmessage
        })
        return response

    response = JsonResponse({
        "error": _("Invalid request. Please refresh the page and try again.")
    })
    response.status_code = 400
    return response
