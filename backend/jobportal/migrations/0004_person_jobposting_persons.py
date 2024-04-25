# Generated by Django 5.0.3 on 2024-04-15 13:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_user_name'),
        ('jobportal', '0003_alter_benefit_slug_alter_jobcategory_slug_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(choices=[('Creator', 'Creator'), ('Admin', 'Admin'), ('Leader Helper', 'Leader Helper'), ('Head Leader', 'Head Leader'), ('Web Developer', 'Web Developer'), ('Master', 'Master'), ('Leader', 'Leader')], max_length=50)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='account.user')),
            ],
        ),
        migrations.AddField(
            model_name='jobposting',
            name='persons',
            field=models.ManyToManyField(blank=True, related_name='job_postings', to='jobportal.person'),
        ),
    ]