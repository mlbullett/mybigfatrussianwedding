# Generated by Django 2.1.7 on 2019-03-20 21:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guests', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Party',
            new_name='Group',
        ),
        migrations.RenameField(
            model_name='guest',
            old_name='party',
            new_name='group',
        ),
    ]
