# Generated by Django 5.0.3 on 2024-04-03 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_user_name'),
        ('chat', '0002_rename_sent_to_conversationmessage_recipient_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='users',
            field=models.ManyToManyField(related_name='conversation_participants', to='account.user'),
        ),
    ]
