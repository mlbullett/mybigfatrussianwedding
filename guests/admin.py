from django.contrib import admin
from .models import Group, Guest


class GuestInline(admin.TabularInline***REMOVED***:
    model = Guest
    fields = ('first_name', 'last_name', 'email', 'is_attending', 'dietary_specs'***REMOVED***


class GroupAdmin(admin.ModelAdmin***REMOVED***:
    list_display = ('name', 'category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending'***REMOVED***
    list_filter = ('category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending'***REMOVED***
    inlines = [GuestInline***REMOVED***


class GuestAdmin(admin.ModelAdmin***REMOVED***:
    list_display = ('first_name', 'last_name', 'group', 'email', 'is_attending', 'dietary_specs'***REMOVED***
    list_filter = ('is_attending', 'group__category', 'group__language', 'group__is_invited'***REMOVED***


admin.site.register(Group, GroupAdmin***REMOVED***
admin.site.register(Guest, GuestAdmin***REMOVED***
