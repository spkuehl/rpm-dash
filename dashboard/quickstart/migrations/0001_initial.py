# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-04 02:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Signal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_recieved', models.DateTimeField()),
            ],
        ),
    ]
