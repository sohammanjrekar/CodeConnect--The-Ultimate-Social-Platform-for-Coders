# Generated by Django 5.0.4 on 2024-04-16 15:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MentorshipMatching', '0001_initial'),
        ('account', '0002_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mentorcomment',
            name='mentee',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.user'),
        ),
        migrations.AlterField(
            model_name='mentorshipprofile',
            name='accepted_mentees',
            field=models.ManyToManyField(blank=True, related_name='accepted_by_mentor', to='account.user'),
        ),
        migrations.AlterField(
            model_name='mentorshipprofile',
            name='mentees',
            field=models.ManyToManyField(blank=True, related_name='mentored_by', to='account.user'),
        ),
        migrations.AlterField(
            model_name='mentorshipprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='account.user'),
        ),
        migrations.AlterField(
            model_name='sharedresource',
            name='receiver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shared_resources_received', to='account.user'),
        ),
        migrations.AlterField(
            model_name='sharedresource',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shared_resources_sent', to='account.user'),
        ),
    ]