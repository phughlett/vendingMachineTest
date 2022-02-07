class VendingMachine {
  constructor() {
    this.snacks = []
    this.customerFunds = 0
  }

  seeSelections() {
    // displays all available snacks
  }

  stock(newSnacks = []) {
    // adds input array of snacks to exisitng snacks
  }

  deposit(amount) {
    // updates existing customerFunds with the amount deposited
  }

  giveChange(amount){
    // updates customerFunds to 0 and returns the remaining amount
  }

  buy(snackName) {
    // updates inventory with bought snacks
    // updates customerFunds to reflect purchase
    // notifies customer if a snack is unavailable
    // notifies customer when a snack costs more than available customerFunds
    // clears out customerFunds by calling giveChange()
  }
}

module.exports = VendingMachine;