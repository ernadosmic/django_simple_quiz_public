# Generated by Django 4.0.6 on 2022-07-12 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('javna_uprava', '0002_rename_qwuestion_text_question_question_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='choice',
            name='correct',
            field=models.BooleanField(default=False),
        ),
    ]