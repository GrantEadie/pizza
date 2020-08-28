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

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};


$(document).ready(function() {
  $("form.new-order").submit(function(event) {
    event.preventDefault();
    const inputtedPizzaSize = $("#pizza-size").val();
    const inputtedPizzaCheese = $("#pizza-cheese").val();
    const inputtedPizzaTopping = $("#pizza-topping").val();
    console.log(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    // const inputtedSide = $("input#side").val();
    let newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    newOrder.addPizza(newPizza);
    console.log(newOrder.pizzas);
  });
});