# Generated by Django 5.0.4 on 2024-04-28 18:36

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobportal', '0006_jobposting_logo'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Keyword',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(default='', max_length=255, unique=True)),
                ('relevance', models.FloatField(default=0.0)),
                ('frequency', models.PositiveIntegerField(default=0)),
                ('context', models.TextField(blank=True, default='', null=True)),
            ],
        ),
        migrations.AddField(
            model_name='jobposting',
            name='keyword',
            field=models.ManyToManyField(blank=True, related_name='job_keyword', to='jobportal.keyword'),
        ),
        migrations.CreateModel(
            name='UserBehavior',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interaction_type', models.CharField(default='', max_length=20)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobportal.jobposting')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]