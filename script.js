var burgers = 0;
var customers = 0;
var money = 5;
var burgerType = 0;
// 0 = just cheese & buns (all have buns)
// 1 = just patty
// 2 = cheese & patty
var buns = 10;
var cheese = 5;
var patty = 0;
var stocksCheese = 3;
var stocksBuns = 4;
var cookBurgerTime = null;
var time = 0;
var updateCustomers = setInterval(updateOther, 10000);
var updateAll = setInterval(update, 100);
var updateComment = setInterval(comments, 15000);
var comment = "No comments yet...";
var random = Math.random();
var random2 = Math.random();
var custMult = 10;
function comments() {
  let num = Math.round(random * 10);
  switch(num) {
    case 0:
      comment = "This tastes horrible! 1/5 stars."
      break;
    case 1:
      comment = "I don't like it. 2/5 stars..."
      break;
    case 2:
      comment = "I guess I'll eat it... 3/5"
      break;
    case 3:
      comment = "What if I told you we live in a GAME!"
      break;
    case 4:
      comment = "OMG SUCH GUCCI YEET 10/% STARS"
      break;
    case 5:
      comment = "This place is pretty cheap, and it tastes kinda good. 4/5 star."
      break;
    case 6:
      comment = "Why no boterham? (english: sandwich)"
      break;
    case 7:
      comment = "Needs more kinds of food than just burgers."
      break;
    case 8:
      comment = "wtf happened to my toilet"
      break;
    case 9:
      comment = "DaveRainbowin said this was a good place to go! He's right!"
      break;
    default:
      comment = "what is stonks"
  }
}
function update() {
  random = Math.random();
  random2 = Math.random();
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
  document.getElementById("customerNum").innerHTML = "Customers: " + customers;
  document.getElementById("cheeseNum").innerHTML = "Cheese: " + cheese;
  document.getElementById("bunsNum").innerHTML = "Buns: " + buns;
  document.getElementById("pattyNum").innerHTML = "Patty: " + patty;
  document.getElementById("stonksCheese").innerHTML = "Price: " + stocksCheese;
  document.getElementById("stonksBuns").innerHTML = "Price: " + stocksBuns;
  document.getElementById("comments").innerHTML = comment;
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
  if (stocksCheese >= 1 && random2 >= 0.5) {
    stocksCheese--;
  } else {
    stocksCheese++;
  }
  if (random >= 0.5 && stocksBuns >= 1) {
    stocksBuns--;
  } else {
    stocksBuns++;
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
  if (food === 'cheese' && money >= stocksCheese) {
    cheese += 5;
    money -= stocksCheese;
  } else if (food === 'buns' && money >= stocksBuns) {
    buns += 5;
    money -= stocksBuns;
  }
}
function checkIngredients() {
  let cheeseCheck = document.getElementById("checkCheese").checked; 
  let pattyCheck = document.getElementById("checkPatty").checked;
  if (cheeseCheck && !pattyCheck) {
    burgerType = 0;
  } else if (!cheeseCheck && pattyCheck) {
    burgerType = 1;
  } else if (cheeseCheck && pattyCheck) {
    burgerType = 2;
  } else {
    window.alert("You have to have more than just buns!");
  };
};