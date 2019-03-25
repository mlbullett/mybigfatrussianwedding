from django.contrib import admin
from .models import Group, Guest


class GuestInline(admin.TabularInline):
    model = Guest
    fields = ('first_name', 'last_name', 'dietary')


class GroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending')
    list_filter = ('category', 'language', 'invitation_sent', 'invitation_opened', 'is_invited', 'is_attending')
    inlines = [GuestInline]


class GuestAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'group', 'get_email', 'get_attending', 'dietary')
    list_filter = ('group__is_attending', 'group__category', 'group__language', 'group__is_invited')

    def get_email(self, obj):
        return obj.group.email

    def get_attending(self, obj):
        return obj.group.is_attending


admin.site.register(Group, GroupAdmin)
admin.site.register(Guest, GuestAdmin)
