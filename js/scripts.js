// Business Logic for Order Form ---------

function Order() {
  this.sides = [];
  this.pizzas = [];
  this.currentId = 0;
}

Order.prototype.addSide = function(side) {
  side.id = this.assignId();
  this.sides.push(side);
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

// Business Logic for Sides --------- 

function Sides(salad, drink, desert) {
  this.salad = salad;
  this.drink = drink;
  this.desert = desert;
  this.currentId = 0
}

// Business Logic for Pizzas --------- 

function Pizza(cheese, toppings) {
  this.cheese = cheese;
  this.toppings = [];
  this.currentId = 0
}

Pizza.prototype.assignIdTopping = function() {
  this.currentId +=1;
  return this.currentId;
}

Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignIdTopping();
  this.toppings.push(topping);
}

// Business Logic for Toppings (nested in Pizzas) ---------

function Topping(topping1) {
  this.topping1 = [];
}

// Deleting options ---------

Order.prototype.deleteSide = function(id) {
  for (let i=0; i< this.sides.length; i++) {
    if (this.sides[i].id == id) {
      delete this.sides[i];
      return true;
    }
  };
  return false;
}

Order.prototype.deletePizza = function(id) {
  for (let i=0; i< this.sides.length; i++) {
    if (this.sides[i].id == id) {
      delete this.sides[i];
      return true;
    }
  };
  return false;
}

Pizza.prototype.deleteToppings = function(id) {
  for (let i=0; i< this.sides.length; i++) {
    if (this.sides[i].id == id) {
      delete this.sides[i];
      return true;
    }
  };
  return false;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});