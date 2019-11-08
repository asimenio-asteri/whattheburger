var burgers = 0;
var customers = 0;
var money = 0;
function serveBurger() {
  if (burgers >= 1) {
    burgers--;
    money += 5;
  };
};
function cookBurger() {
  burgers++;
  money--;
}
