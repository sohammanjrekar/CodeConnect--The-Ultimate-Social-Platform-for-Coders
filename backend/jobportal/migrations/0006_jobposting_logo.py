# Generated by Django 5.0.4 on 2024-04-26 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobportal', '0005_jobposting_dislikes_jobposting_likes'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobposting',
            name='logo',
            field=models.URLField(max_length=2000, null=True),
        ),
    ]
