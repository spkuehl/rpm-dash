# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-04 03:49
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signal',
            name='time_recieved',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 4, 3, 49, 26, 900680, tzinfo=utc)),
        ),
    ]