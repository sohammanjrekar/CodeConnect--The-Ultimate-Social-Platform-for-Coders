# Generated by Django 5.0.4 on 2024-04-28 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0014_rename_keyword_userkeyword'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='Keyword',
            field=models.ManyToManyField(blank=True, related_name='users_keywords', to='account.userkeyword'),
        ),
    ]