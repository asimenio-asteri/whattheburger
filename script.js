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
}
function updateOther() {
  random = Math.random();
  random2 = Math.random();
  let random2 =andom * custMult;
  let mult = custMult / 2;
  if (random <= mult) {
    customers = 0;
  } else if (random2 <= mult + 2) {
    customers = 1;
  } else if (random2 <= mult + 4) {
    customers = 2;
  } else if (random2 <= mult + 6) {
    customers = 3; 
  } else if (random2 <= mult + 8) {
    customers = 4;
  } else if (random2 = 0) {
    customers = 5;
  }
  if (random <= 0.5) {
     stonks1 = true;
  } else {
    stonks1 = false;
  }
  if (random
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
  if (food === "cheese" && money >= 3) {
    cheese += 5;
    money -= 3;
  } else if (food === "buns" && money >= 4) {
    buns += 5;
    money -= 4;
  }
}
