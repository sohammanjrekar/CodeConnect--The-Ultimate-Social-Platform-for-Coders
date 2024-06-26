# Generated by Django 5.0.4 on 2024-04-28 18:36

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_blogpost_featured_image'),
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
            model_name='blogpost',
            name='keyword',
            field=models.ManyToManyField(blank=True, related_name='blog_keyword', to='blog.keyword'),
        ),
        migrations.CreateModel(
            name='UserBehavior',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interaction_type', models.CharField(default='', max_length=20)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.blogpost')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bloguser', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
