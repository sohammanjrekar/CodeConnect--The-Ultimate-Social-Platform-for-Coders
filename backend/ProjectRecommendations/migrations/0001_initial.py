# Generated by Django 5.0.1 on 2024-01-20 18:24

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ProgrammingLanguage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('github_link', models.URLField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='project_images/')),
                ('difficulty', models.CharField(choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')], default='medium', max_length=10)),
                ('domain', models.CharField(choices=[('web', 'Web Development'), ('mobile', 'Mobile App Development'), ('data', 'Data Science'), ('ai', 'Artificial Intelligence'), ('iot', 'Internet of Things'), ('other', 'Other')], default='other', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('likes', models.PositiveIntegerField(default=0)),
                ('dislikes', models.PositiveIntegerField(default=0)),
                ('rating', models.FloatField(default=0.0)),
                ('languages', models.ManyToManyField(blank=True, related_name='projects', to='ProjectRecommendations.programminglanguage')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projectrecommendations_projects', to=settings.AUTH_USER_MODEL)),
                ('tags', models.ManyToManyField(blank=True, related_name='projects', to='ProjectRecommendations.tag')),
                ('tools', models.ManyToManyField(blank=True, related_name='projects', to='ProjectRecommendations.tool')),
            ],
        ),
    ]
