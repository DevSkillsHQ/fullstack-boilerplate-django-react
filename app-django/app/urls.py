"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ping', views.ping, name='ping'),
    # TODO csrf_exempt will be removed
    path('amount', csrf_exempt(views.Transaction.as_view()), name='amount'),  # set transaction ,
    path('transaction/<str:transactionId>', views.Transaction.as_view(), name='transaction'),  # get transaction
    path('balance/<str:accountId>', views.getBalance, name='balance'),  # get balance
    # get all accounts with max number of transactions
    path('max_transaction_volume', views.getMaxTransactionVolume, name='max_transaction_volume'),
]
