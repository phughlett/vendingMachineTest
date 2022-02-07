const VendingMachine = require('../src/VendingMachine.js')
const Item = require('../src/Item.js')


describe('the vending machine', () => {
  // YOUR TEST CASES GO HERE
  let vending;

  beforeEach(() => {
    vending = new VendingMachine();
  })

  test('Vending machine to have a place for snacks', () => {
    expect(vending.snacks).toEqual([]);
  })

  test('Customer Funds to be zero', () => {
    expect(vending.customerFunds).toEqual(0);
  })

  test('see selection shows available snacks', () => {
    expect(vending.seeSelections().toEqual(vending.snacks));
  })

  test('stock to add one item to inventory',() => {
    let item = new Item("Snickers", 1.5, "abc123");
    vending.stock(item);

    expect(vending.snacks.length).toEqual(1);

  })

  test('stock to add multiple items to inventory', () => {
    let item = new Item("Snickers", 1.5, "abc123");
    let item2 = new Item("Coke", 1, "bcd552");

    let itemArray = [item, item2];

    vending.stock(itemArray);

    expect(vending.snacks[0]).toEqual(item);
    expect(vending.snacks[1]).toEqual(item2);
    expect(vending.snacks.length).toEqual(2);

  })

  test('stock to add multiple items to existing inventory', () => {
    let item = new Item("Snickers", 1.5, "abc123");
    let item2 = new Item("Coke", 1, "bcd552");

    vending.snacks = [item, item2]

    let item3 = new Item("Banana", .5, "bdc123");
    let item4 = new Item("Apple", .5, "bfd522");

    let itemArray = [item3, item4];

    vending.stock(itemArray);

    expect(vending.snacks[2]).toEqual(item3);
    expect(vending.snacks[3]).toEqual(item4);
    expect(vending.snacks.length).toEqual(4);

  })

  test('deposit should increase customer funds', () => {
    vending.deposit(30);

    expect(vending.customerFunds).toEqual(30);

    vending.deposit(40);

    expect(vending.customerFunds).toEqual(70);
  })

  test('give change returns proper amount', () =>{
    vending.deposit(5);

    expect(vending.giveChange()).toEqual(5);
    expect(vending.customerFunds).toEqual(0);
  })

  test('Updates inventory with bought snacks', () =>{
    let item = new Item("Snickers", 1.5, "abc123");
    let item2 = new Item("Coke", 1, "bcd552");

    vending.snacks = [item, item2];
    vending.buy("Coke");
    expect(vending.snacks).not.toContainEqual({name:"Coke",price: 1,code: "bcd552"})
  })



});