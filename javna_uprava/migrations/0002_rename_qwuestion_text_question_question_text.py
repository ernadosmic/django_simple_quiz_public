# Generated by Django 4.0.6 on 2022-07-12 20:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('javna_uprava', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='qwuestion_text',
            new_name='question_text',
        ),
    ]
