class Bank {
  #email;
  #profitPercentage = 1.5;

  constructor(name, mobile, email, amount) {
    this.accountHolder = name;
    this.mobile = mobile;
    this.email = email;
    this.balance = amount;
    console.log("Rectangle Constructor Called");
  }

  deposit(amount) {
    this.balance += Number(amount);
  }

  checkBankProfile() {
    const { accountHolder, mobile, email, balance } = this;
    console.log(`Account Holder = ${accountHolder}`);
    console.log(`Mobile no. = ${mobile}`);
    console.log(`Email = ${email}`);
    console.log(`Account Balance = ${Number(balance)}`);
  }

  checkBalance() {
    console.log(`Current Balance is ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Balance is ${this.balance}`);
    }
  }

  #calculateProfit() {
    return (this.balance * this.#profitPercentage) / 100;
  }

  showProfit() {
    console.log(`Profit is ${this.#calculateProfit()}`);
  }

  set email(value) {
    this.#email = value;
  }

  get email() {
    return this.#email;
  }

  set accountHolder(value) {
    this._accountHolder = value;
  }

  get accountHolder() {
    return this._accountHolder;
  }
}

function sendMail(transaction, amount, balance) {
  console.log(`

To: ${this.email} 

Hello ${this.accountHolder}, 

This is to inform you that an amount of ₹${amount} has been successfully ${transaction}ed.

Available Balance: ₹${balance}

`);
}
function InsufficientBalance(transaction, amount, balance) {
  console.log(`
To: ${this.email} 

Hello ${this.accountHolder}, 

This is infrom you that u dont have sufficent balance;
        `);
}

let obj1 = new Bank("Jil", "9638527411", "jil@gmail.com", 10000);
// console.log(obj1.accountHolder);
// obj1.deposit(10000);
// obj1.checkBankProfile();
// obj1.withdraw(200000);
// obj1.checkBalance();
// obj1.email = "jil.new@gmail.com";
// console.log(obj1.email);
// obj1.showProfit();

sendMail.call(obj1, "deposit", 10000, obj1.balance);
InsufficientBalance.call(obj1, "withdraw", 2000, obj1.balance);
console.log(typeof Bank);
