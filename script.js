var burgers = 0;
var customers = 0;
var money = 0;
var cookBurgerTime = null;
var time = 0;
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
    cookBurgerTime = null;
    burgers++;
    money--;
  }
}
