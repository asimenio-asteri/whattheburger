var burgers = 0;
var customers = 0;
var money = 5;
var cookBurgerTime = null;
var time = 0;
var updateCustomers = setInterval(updateCust, 10000);
var updateAll = setInterval(update, 100);
var random = Math.random();
var custMult = 10;
function update() {
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
}
function updateCust() {
  let random2 = random * custMult;
  let mult = custMult / 2;
  if (random2 <= mult) {
    customers = 1;
  }
}
function serveBurger() {
  if (burgers >= 1) {
    burgers--;
    money += 5;
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
    money--;
  }
}
