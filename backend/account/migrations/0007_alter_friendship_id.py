# Generated by Django 5.0.4 on 2024-04-23 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_user_user_points'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friendship',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
