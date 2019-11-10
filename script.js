var burgers = 0;
var customers = 0;
var money = 5;
var buns = 10;
var cheese = 5;
var stonks1;
var stonks2;
var stocksCheese = 3;
var stocksBuns = 4;
var cookBurgerTime = null;
var time = 0;
var updateCustomers = setInterval(updateOther, 10000);
var updateAll = setInterval(update, 100);
var random = Math.random();
var random2 = Math.random();
var custMult = 10;
function update() {
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
  document.getElementById("customerNum").innerHTML = "Customers: " + customers;
  document.getElementById("cheeseNum").innerHTML = "Cheese: " + cheese;
  document.getElementById("bunsNum").innerHTML = "Buns: " + buns;
  document.getElementById("stonksCheese").innerHTML = "Price: " + stocksCheese;
  document.getElementById("stonksBuns").innerHTML = "Price: " + stocksBuns;
}
function updateOther() {
  random = Math.random();
  random2 = Math.random();
  let randomX = random * custMult;
  let mult = custMult / 2;
  if (randomX <= mult) {
    customers = 0;
  } else if (randomX <= mult + 2) {
    customers = 1;
  } else if (randomX <= mult + 4) {
    customers = 2;
  } else if (randomX <= mult + 6) {
    customers = 3; 
  } else if (randomX <= mult + 8) {
    customers = 4;
  } else if (randomX = 0) {
    customers = 5;
  }
  if (random <= 0.5) {
     stonks1 = true;
  } else {
    stonks1 = false;
  }
  if (random2 <= 0.5) {
    stonks2 = false;  
  } else {
    stonks2 = true;
  }
  if (stonks1 = true) {
    stocksCheese++;
  } else {
    stocksCheese--;
  }
  if (stonks2 = true) {
    stocksBuns++;
  } else {
    stocksBuns--;
  }
}
function serveBurger() {
  if (burgers >= 1 && customers >= 1) {
    burgers--;
    money += 5;
    customers--;
  };
};
function cookBurger() {
  if (cookBurgerTime == null) {
    cookBurgerTime = setInterval(cookBar, 10);
  } else {
    document.getElementById("progressCook").value = time;
  }
}
function cookBar() {
  if (cheese >= 1 && buns >= 2) {
    if (time != 1000) {
      time++;
      document.getElementById("progressCook").value = time;
    } else {
      time = 0;
      document.getElementById("progressCook").value = 0;
      clearInterval(cookBurgerTime);
      cookBurgerTime = null;
      burgers++;
      buns -= 2;
      cheese--;
    }
  }
}
function buy(food) {
  if (food === "cheese" && money >= stonksCheese) {
    cheese += 5;
    money -= stonksCheese;
  } else if (food === "buns" && money >= stonksBuns) {
    buns += 5;
    money -= stonksBuns;
  }
}
