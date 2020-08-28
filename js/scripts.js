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

function Pizza(cheese, toppings) {
  this.cheese = cheese;
  this.toppings = [];
  this.currentId = 0
}

