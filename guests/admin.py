from django.contrib import admin
from .models import Group, Guest


class GuestInline(admin.TabularInline):
    model = Guest
    fields = ('first_name', 'last_name', 'email', 'is_attending', 'dietary_specs')


class GroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending')
    list_filter = ('category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending')
    inlines = [GuestInline]


class GuestAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'group', 'email', 'is_attending', 'dietary_specs')
    list_filter = ('is_attending', 'group__category', 'group__language', 'group__is_invited')


admin.site.register(Group, GroupAdmin)
admin.site.register(Guest, GuestAdmin)
