# Generated by Django 5.0.1 on 2024-01-26 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProjectRecommendations', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='id',
            field=models.UUIDField(editable=False, primary_key=True, serialize=False),
        ),
    ]