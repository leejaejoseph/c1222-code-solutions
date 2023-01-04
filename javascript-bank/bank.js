/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var openAccount = new Account(this.nextAccountNumber, holder);
    openAccount.deposit(balance);
    this.accounts.push(openAccount);
    this.nextAccountNumber++;
    return openAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var accountIndex = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      accountIndex = i;
    }
  }
  if (accountIndex !== null) {
    return this.accounts[accountIndex];
  } else {
    return accountIndex;
  }
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  } return total;
};
