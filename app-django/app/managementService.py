from django.db import connection, transaction

from .models import Account
from .models import Transaction as TransactionModel


class ManagementService:
    @staticmethod
    def getAccountById(accountId):
        account = Account.objects.filter(id=accountId)  # too simple to do with sql query
        if len(account) == 0:
            return None
        # TODO error case if len(account) > 1
        return account[0]

    @staticmethod
    def getTransactionById(transactionId):
        transaction = TransactionModel.objects.filter(id=transactionId)  # too simple to do with sql query
        if len(transaction) == 0:
            return None
        # TODO error case if len(account) > 1
        return transaction[0]

    @staticmethod
    def getMaxTransactionVolume():
        query = """SELECT count(*) as transactions, account_id 
                            FROM 'transaction' 
                            GROUP BY account_id 
                            HAVING transactions=(SELECT count(*) as count 
                                                 FROM 'transaction' 
                                                 GROUP BY account_id
                                                 ORDER BY count DESC limit 1 );"""

        cursor = connection.cursor()
        result = cursor.execute(query).fetchall()
        if len(result) != 0:
            accounts = []
            for entry in result:
                accounts.append(entry[1])
            return {"maxVolume": result[0][0], "accounts": accounts}

        return None

    @staticmethod
    def postTransaction(transactionId, accountId, amount):  # does not create a new account if not present
        with transaction.atomic():
            account = ManagementService.getAccountById(accountId)
            if account is not None:
                account.balance += amount
                account.save()
                newTransaction = TransactionModel(id=transactionId, amount=amount, accountId=account)
                newTransaction.save()
                return True
        return False
