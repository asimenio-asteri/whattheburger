var burgers = 0;
var customers = 0;
var money = 5;
var buns = 10;
var cheese = 5;
var cookBurgerTime = null;
var time = 0;
var updateCustomers = setInterval(updateCust, 10000);
var updateAll = setInterval(update, 100);
var random = Math.random();
var custMult = 10;
function update() {
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
  document.getElementById("customerNum").innerHTML = "Customers: " + customers;
}
function updateCust() {
  random = Math.random();
  let random2 = random * custMult;
  let mult = custMult / 2;
  if (random2 <= mult) {
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
