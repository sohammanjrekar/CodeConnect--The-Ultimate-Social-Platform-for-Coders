# Generated by Django 5.0.4 on 2024-04-22 05:35

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_user_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='User_points',
            field=models.PositiveIntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='points',
            field=models.PositiveIntegerField(default=0),
        ),
    ]