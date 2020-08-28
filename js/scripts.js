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
function Pizza(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = topping;
}

Order.prototype.price = function(pizza) {
  let array = this.pizzas[0];
  let sum = 0;
  for (let i=0; i <= 2; i++){
    console.log(array[i]);
  sum += array[i];
  }
  return sum;
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


// User Interface Logic ---------
let newOrder = new Order();

function displayOrder(orderToDisplay) {
  let orderList = $("ul#show-order");
  let htmlForOrder = "";
  orderToDisplay.pizzas.forEach(function(pizza) {
    htmlForOrder+= "<li id=" + pizza.id + ">" + pizza.id + ") " + pizza.size + " " + pizza.cheese + " " + pizza.toppings + "</li>";
  });
  orderList.html(htmlForOrder);
};


$(document).ready(function() {
  $("form.new-order").submit(function(event) {
    event.preventDefault();
    const inputtedPizzaSize = parseInt($("#pizza-size").val());
    const inputtedPizzaCheese = parseInt($("#pizza-cheese").val());
    const inputtedPizzaTopping = parseInt($("#pizza-topping").val());
    console.log(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    // const inputtedSide = $("input#side").val();
    let newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    newOrder.addPizza(newPizza);
    console.log(newOrder.price(newPizza));
    displayOrder(newOrder);
  });
});
