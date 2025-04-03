// Base class representing a general Bank Account
class BankAccount {
  // Private properties (Encapsulation & Abstraction)
  #balance;

  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance; // Private variable
  }

  // Getter method to access balance safely
  getBalance() {
    return this.#balance;
  }

  // Setter method to modify balance with validation
  setBalance(amount) {
    if (amount < 0) {
      console.log("Invalid amount. Balance cannot be negative.");
    } else {
      this.#balance = amount;
    }
  }

  // Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `${this.accountHolder} deposited $${amount}. New balance: $${
          this.#balance
        }`
      );
    } else {
      console.log("Deposit amount must be positive.");
    }
    return this; // Enables method chaining
  }

  // Withdraw method with validation
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `${this.accountHolder} withdrew $${amount}. Remaining balance: $${
          this.#balance
        }`
      );
    } else {
      console.log("Invalid withdrawal amount.");
    }
    return this; // Enables method chaining
  }

  // Static method to validate account details (does not belong to instances)
  static isValidAccount(account) {
    return account instanceof BankAccount;
  }
}

// Inherited class for Savings Account (Demonstrating Inheritance)
class SavingsAccount extends BankAccount {
  constructor(accountHolder, initialBalance, interestRate) {
    super(accountHolder, initialBalance); // Call parent constructor
    this.interestRate = interestRate;
  }

  // Method to calculate interest
  applyInterest() {
    let interest = this.getBalance() * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Interest of $${interest.toFixed(2)} applied.`);
    return this; // Method chaining
  }
}

// Inherited class for Checking Account with Overriding
class CheckingAccount extends BankAccount {
  constructor(accountHolder, initialBalance, overdraftLimit) {
    super(accountHolder, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  // Overriding the withdraw method (Polymorphism)
  withdraw(amount) {
    if (amount > 0 && amount <= this.getBalance() + this.overdraftLimit) {
      this.setBalance(this.getBalance() - amount);
      console.log(
        `${
          this.accountHolder
        } withdrew $${amount}. New balance: $${this.getBalance()}`
      );
    } else {
      console.log("Overdraft limit exceeded.");
    }
    return this;
  }
}

// Factory Function to create accounts dynamically
function createAccount(type, name, balance, extraFeature) {
  if (type === "savings") {
    return new SavingsAccount(name, balance, extraFeature);
  } else if (type === "checking") {
    return new CheckingAccount(name, balance, extraFeature);
  } else {
    throw new Error("Invalid account type.");
  }
}

// Creating Instances
const acc1 = new SavingsAccount("Alice", 1000, 5);
const acc2 = new CheckingAccount("Bob", 500, 200);

// Performing Transactions
acc1.deposit(500).applyInterest().withdraw(200); // Method chaining
acc2.withdraw(600).deposit(300);

// Using Factory Function
const acc3 = createAccount("savings", "Charlie", 2000, 4);
acc3.applyInterest();

console.log(BankAccount.isValidAccount(acc3)); // Static method usage
