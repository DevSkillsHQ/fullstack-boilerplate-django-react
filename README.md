# Fulstack Boilerplate

- React 11
- create-react-app
- Python 3
- Django
- Cypress
- GitHub Actions

---

Made by [DevSkills](https://devskills.co).

Implementation details

POST /amount
    updates user's balance by the given amount and adds a transaction entry in transaction table
    2 db transactions are done in atomic way, If both queries are successfully completed, the changes will be committed.
    If there is an exception, the changes are rolled back.

GET /transaction/{transaction_id}
    returns transaction details for the given transaction_id

GET /balance/{account_id}
    returns balance for given account_id

GET /max_transaction_volume
    returns max amount of transactions and the corresponding  list of account_ids

Input parameters for all calls are being validated as well as post body.
Validation criteria are - missing, incorrect type, empty


DB schema
Tables - account, transaction - one to many
account
    id - pk
    balance - integer

transaction
    id - pk
    account_id - fk
    amount - integer


TODO

1. POST amount - remove csrf_exempt from urls.py

2. Error Handling

3. Not allow transaction with the same id

4. Add docstrings