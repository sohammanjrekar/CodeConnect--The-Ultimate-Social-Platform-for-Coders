# Generated by Django 5.0.4 on 2024-04-23 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0007_alter_post_attach_files_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hashtag',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
