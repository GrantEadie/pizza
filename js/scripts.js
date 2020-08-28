// Business Logic for Order Form

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

// Business Logic for Sides 

function Sides(salad, drink, desert) {
  this.salad = salad;
  this.drink = drink;
  this.desert = desert;
  this.currentId = 0
}

// Business Logic for Pizzas 

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

// Business Logic for Toppings (nested in Pizzas)

function Topping(topping1, topping2, topping3) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

// Deleting options

Order.prototype.deleteSide = function(id) {
  for (let i=0; i< this.sides.length; i++) {
    if (this.sides[i].id == id) {
      delete this.sides[i];
      return true;
    }
  }
}


