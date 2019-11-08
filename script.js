var burgers = 0;
var customers = 0;
var money = 0;
var cookBurgerTime;
var time = 0;
function serveBurger() {
  if (burgers >= 1) {
    burgers--;
    money += 5;
  };
};
function cookBurger() {
  if (cookBurgerTime !== setInterval(cookBar, 10)) {
    cookBurgerTime = setInterval(cookBar, 10);
  }
}
function cookBar() {
  if (time <= 1000) {
    document.getElementById("progressCook").value = time;
    time++;
  } else {
    time = 0;
    document.getElementById("progressCook").value = 0;
    clearInterval(cookBurgerTime);
    burgers++;
    money--;
  }
}
