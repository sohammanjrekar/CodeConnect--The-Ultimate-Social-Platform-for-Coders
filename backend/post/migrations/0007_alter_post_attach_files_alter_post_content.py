# Generated by Django 5.0.4 on 2024-04-23 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='attach_files',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(),
        ),
    ]