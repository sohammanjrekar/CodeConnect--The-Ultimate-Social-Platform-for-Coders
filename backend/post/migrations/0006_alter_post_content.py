# Generated by Django 5.0.4 on 2024-04-23 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_comment_created_at_comment_is_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(blank=True),
        ),
    ]
