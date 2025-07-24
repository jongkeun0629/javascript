class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("입금 금액은 1보다 커야합니다.");
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("출금 금액은 0보다 커야합니다.");
    if (amount > this.balance) throw new Error("잔액이 부족합니다.");
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
console.log(`초기 잔액: ${account.getBalance()}`);
account.deposit(500);
console.log(`입금 후 잔액: ${account.getBalance()}`);
account.withdraw(300);
console.log(`출금 후 잔액: ${account.getBalance()}`);
try {
  account.withdraw(1500);
} catch (error) {
  console.error(error.message);
}
console.log(`최종 잔액: ${account.getBalance()}`);
