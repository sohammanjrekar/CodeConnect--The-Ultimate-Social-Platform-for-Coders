# Generated by Django 5.0.4 on 2024-04-22 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_remove_user_user_points'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='User_points',
            field=models.PositiveIntegerField(default=0),
        ),
    ]