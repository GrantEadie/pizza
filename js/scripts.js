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
function Sides(salad, drink, dessert) {
  this.salad = salad;
  this.drink = drink;
  this.dessert = dessert;
}


// Business Logic for Pizzas --------- 
function Pizza(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = topping;
}

// Price Logic

Order.prototype.pricePizza = function(pizza) {
  let sum = 0;
  let i = 0;
  for (let a in pizza) {
    i ++;
    if(pizza.hasOwnProperty(a) && (i <= 3)) {
      sum += parseInt(pizza[a]);
    } else {
      return sum
    }
  }
  return sum;
}

Order.prototype.priceSides = function(side) {
  let sum = 0;
  let i = 0;
  for (let a in side) {
    i ++;
    if(side.hasOwnProperty(a) && (i <= 3)) {
      sum += parseInt(side[a]);
    } else {
      return sum
    }
  }
  return sum;
}

function priceFinder(priceManager) {
  if (priceManager < 4) {
    return "Your total will be 20";
  } else if (priceManager <= 5) {
    return "Your total will be 30";
  } else if (priceManager <= 6) {
    return "Your total will be 40";
  } else if (priceManager <= 7) {
    return "Your total will be 50";
  } else if (priceManager <= 8) {
    return "Your total will be 60" 
  } else {
    return "Your total will be 70";
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

function displayOrder(input) {
  const keys = Object.keys(input);
  let finalItemList = "";
  let arrayOfItems = [];
    keys.forEach(function(key) {
      arrayOfItems.push(key + ":" + input[key]);
      console.log(arrayOfItems);
    });
    for (let i = 0; i < 3; i++){
      console.log(arrayOfItems[i]);
      if (arrayOfItems[i] === "size:1") {
        finalItemList += "Square, 12 inches <br>";
      } else if (arrayOfItems[i] === "size:2") {
        finalItemList += "Circle, 16 inches <br>";
      } else if (arrayOfItems[i] === "size:3") {
        finalItemList += "Mobius Strip, undefined size <br>";
      } else if (arrayOfItems[i] === "cheese:1") {
        finalItemList += "Aged Chèvre <br>";
    };
  }
  return finalItemList;
}

$(document).ready(function() {
  $("form.new-order").submit(function(event) {
    event.preventDefault();
    const inputtedPizzaSize = $("#pizza-size").val();
    const inputtedPizzaCheese = $("#pizza-cheese").val();
    const inputtedPizzaTopping = $("#pizza-topping").val();
    const inputtedSalad = $("#salad").val();
    const inputtedDrink = $("#drink").val();
    const inputtedDessert = $("#dessert").val();

    // New Order, Sides, and Pizza
    let newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCheese, inputtedPizzaTopping);
    let newSide = new Sides(inputtedSalad, inputtedDrink, inputtedDessert)
    newOrder.addPizza(newPizza);
    newOrder.addSide(newSide);

    // prices
    let priceManager = ((newOrder.pricePizza(newPizza)) + (newOrder.priceSides(newSide)));
    $("p#price").text(priceFinder(priceManager));

    // User Input Displayed 
    $("p#show-order").html(displayOrder(newPizza));
  });
});