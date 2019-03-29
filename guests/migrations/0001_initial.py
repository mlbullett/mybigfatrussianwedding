# Generated by Django 2.1.7 on 2019-03-28 20:05

from django.db import migrations, models
import django.db.models.deletion
import guests.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('dietary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Party',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('partyname', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('max,', 'max'), ('nastia', 'nastia'), ('both', 'both')], max_length=10)),
                ('email', models.EmailField(max_length=100)),
                ('language', models.CharField(choices=[('en', 'en'), ('fr', 'fr'), ('ru', 'ru')], max_length=10)),
                ('invitation_id', models.CharField(db_index=True, default=guests.models._random_uuid, max_length=32, unique=True)),
                ('invitation_sent', models.DateTimeField(blank=True, default=None, null=True)),
                ('invitation_opened', models.DateTimeField(blank=True, default=None, null=True)),
                ('is_invited', models.BooleanField(default=False)),
                ('is_attending', models.BooleanField(default=None)),
                ('song', models.TextField(blank=True, null=True)),
                ('message', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='guest',
            name='party',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='guests.Party'),
        ),
    ]
