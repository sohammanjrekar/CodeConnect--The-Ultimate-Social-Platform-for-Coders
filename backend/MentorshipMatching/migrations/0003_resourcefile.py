# Generated by Django 5.0.4 on 2024-04-16 16:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MentorshipMatching', '0002_alter_mentorcomment_mentee_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResourceFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='shared_resources_files')),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='MentorshipMatching.sharedresource')),
            ],
        ),
    ]
