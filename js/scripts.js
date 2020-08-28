function Order() {
  this.sides = [];
  this.pizzas = [];
  this.currentId = 0;
}

function Sides(salad, drink, desert) {
  this.salad = salad;
  this.drink = drink;
  this.desert = desert;
}

function Pizza(cheese, toppings) {
  this.cheese = cheese;
  this.toppings = [];
}

Order.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}
