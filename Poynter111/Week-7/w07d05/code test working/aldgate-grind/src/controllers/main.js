function MainCtrl() {
  this.drinks = [
    { name: 'Latte', price: 2.5 },
    { name: 'Cappuccino', price: 2.5 },
    { name: 'Tea', price: 2 },
    { name: 'Flat White', price: 2.5 },
    { name: 'Espresso', price: 2 }
  ];

  this.extras = [
    { name: 'Extra shot', price: 1, withCoffee: true },
    { name: 'Chocolate', price: 0.5, withCoffee: true },
    { name: 'Vanilla', price: 0.5, withCoffee: true },
    { name: 'Caramel', price: 0.5, withCoffee: true },
    { name: 'Mint', price: 0.5, withTea: true },
    { name: 'Ginger', price: 0.5, withCoffee: true, withTea: true },
    { name: 'Honey', price: 0.5, withCoffee: true, withTea: true }
  ];

  this.order = [];

  function getTotal() {
    return this.order.reduce((total, item) => total + item.price, 0);
  }

  function addToOrder(item) {
    this.order.push(item);
  }

  function removeItem(item) {
    this.order.splice(this.order.indexOf(item), 1);
  }

  function canSelectItem(item) {
    // if the order is empty, can select anything from the drinks array (but not the extras array)
    if(this.order.length === 0) return this.drinks.includes(item);
    // if the order has 3 items, cannot select anything
    if(this.order.length === 3) return false;
    // if the first item is Tea, can select any extra where `withTea` is true
    if(this.order[0].name === 'Tea') return item.withTea;
    // otherwise any extra where `withCoffee` is true
    return item.withCoffee;
  }

  this.getTotal = getTotal;
  this.addToOrder = addToOrder;
  this.removeItem = removeItem;
  this.canSelectItem = canSelectItem;
}

export default MainCtrl;
