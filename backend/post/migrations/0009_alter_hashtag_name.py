# Generated by Django 5.0.4 on 2024-04-23 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0008_alter_hashtag_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hashtag',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]