# Generated by Django 5.0.4 on 2024-04-28 16:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0013_user_post_predictions'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Keyword',
            new_name='UserKeyword',
        ),
    ]
