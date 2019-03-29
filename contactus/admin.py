""" contactus/admin """
from django.contrib import admin

from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    """ Admin view of contacts """
    list_display = ('id', 'name', 'from_email', 'contact_date', 'message')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'from_email', 'message')
    list_per_page = 25


admin.site.register(Contact, ContactAdmin)
