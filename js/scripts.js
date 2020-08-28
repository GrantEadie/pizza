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
}


// Business Logic for Pizzas --------- 
function Pizza(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = topping;
}

// Price Logic

Order.prototype.price = function(pizza) {
  let sum = 0;
  let i = 0;
  for (let a in pizza) {
    i ++;
    console.log(i);
    if(pizza.hasOwnProperty(a) && (i <= 3)) {
      sum += parseInt(pizza[a]);
    } else {
      return sum
    }
  }
  return sum;
}

function priceFinder(priceManager) {
  if (priceManager < 4) {
    return "Your total is 20";
  } else if (priceManager <= 5) {
    return "Your total is 30";
  } else if (priceManager <= 6) {
    return "Your total is 40";
  } else if (priceManager <= 7) {
    return "Your total is 50";
  } else if (priceManager <= 8) {
    return "Your total is 60" 
  } else {
    return "Your total is 70";
  }
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
    const inputtedPizzaSize = $("#pizza-size").val();
    const inputtedPizzaCheese = $("#pizza-cheese").val();
    const inputtedPizzaTopping = $("#pizza-topping").val();
    console.log(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    let newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    newOrder.addPizza(newPizza);
    displayOrder(newOrder);

    let priceManager = newOrder.price(newPizza);
    console.log(priceFinder(priceManager));
  });
});
