""" Imports """
from django.contrib import admin
from .models import Party, Guest


class GuestInline(admin.TabularInline):
    """
    Inline guest view
    """
    model = Guest
    fields = ('first_name', 'last_name', 'dietary')


class PartyAdmin(admin.ModelAdmin):
    """
    Party view
    """
    list_display = ('partyname', 'email', 'language',
                    'is_attending', 'message', 'song')
    list_filter = ('language', 'is_attending')
    inlines = [GuestInline, ]


class GuestAdmin(admin.ModelAdmin):
    """
    Guest view
    """
    list_display = ('first_name', 'last_name', 'party',
                    'get_email', 'get_lang', 'get_attending', 'dietary')
    list_filter = ('party__is_attending', 'party__language')

    def get_email(self, obj):
        """ Needed to display party leader email """
        return obj.party.email

    def get_attending(self, obj):
        """ Needed to display party attendance """
        return obj.party.is_attending

    def get_lang(self, obj):
        """ Needed to display guest language """
        return obj.party.language


admin.site.register(Party, PartyAdmin)
admin.site.register(Guest, GuestAdmin)
