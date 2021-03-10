from django.db import models


class Account(models.Model):
    id = models.CharField(max_length=36, primary_key=True)  # string representation of the UUID
    balance = models.IntegerField(default=0)

    class Meta:
        db_table = 'account'


class Transaction(models.Model):
    id = models.CharField(max_length=36, primary_key=True)  # string representation of the UUID
    accountId = models.ForeignKey(Account, on_delete=models.CASCADE, db_column='account_id')
    amount = models.IntegerField()

    class Meta:
        db_table = 'transaction'
