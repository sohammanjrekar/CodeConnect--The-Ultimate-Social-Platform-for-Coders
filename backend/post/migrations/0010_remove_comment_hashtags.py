# Generated by Django 5.0.4 on 2024-04-23 09:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0009_alter_hashtag_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='hashtags',
        ),
    ]