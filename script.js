var burgers_0 = 0;
var burgers_1 = 0;
var burgers_2 = 0;
var customers_0 = 0;
var customers_1 = 0;
var customers_2 = 0;
var money = 5;
var burgerType = 0;
/* 
0 = just cheese & buns (all have buns)
1 = just patty
2 = cheese & patty
*/
var pattyUnlock = false;
var buns = 10;
var cheese = 5;
var patty = 0;
var stocksCheese = 3;
var stocksBuns = 4;
var stocksPatty = 6;
var time = 0;
var resPt = 0;
var cookBurgerTime = null;
var resPattyTime = null;
var updateCustomers = setInterval(updateOther, 10000);
var updateAll = setInterval(update, 100);
var updateComment = setInterval(comments, 15000);
var comment = "No comments yet...";
var random = Math.random();
var random2 = Math.random();
var random3 = Math.random();
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
      comment = "Hast du irgend käse?"
      break;
    case 5:
      comment = "This place is pretty cheap, and it tastes kinda good. 4/5 star."
      break;
    case 6:
      comment = "Why no boterham?"
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
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers_0;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
  document.getElementById("customerNum").innerHTML = "Customers: " + customers_0;
  document.getElementById("cheeseNum").innerHTML = "Cheese: " + cheese;
  document.getElementById("bunsNum").innerHTML = "Buns: " + buns;
  document.getElementById("pattyNum").innerHTML = "Patty: " + patty;
  document.getElementById("stonksCheese").innerHTML = "Price: " + stocksCheese;
  document.getElementById("stonksBuns").innerHTML = "Price: " + stocksBuns;
  document.getElementById("stonksPatty").innerHTML = "Price: " + stocksPatty;
  document.getElementById("comments").innerHTML = comment;
  if (pattyUnlock) {
    let tags = document.getElementsByClassName("pattyBuy")
    for (i = 0; i < tags.length; i++) {
      tags[i].style.display = "block";
    }
  }
}
function updateOther() {
  let randomX = random * custMult;
  let mult = custMult / 2;
  if (randomX <= mult) {
    customers_0 = 0;
  } else if (randomX <= mult + 2) {
    customers_0 = 1;
  } else if (randomX <= mult + 4) {
    customers_0 = 2;
  } else if (randomX <= mult + 6) {
    customers_0 = 3; 
  } else if (randomX <= mult + 8) {
    customers_0 = 4;
  } else if (randomX = 0) {
    customers_0 = 5;
  }
  if (stocksCheese >= 1 && random2 > 0.5) {
    stocksCheese--;
  } else {
    stocksCheese++;
  }
  if (random >= 0.5 && stocksBuns > 1) {
    stocksBuns--;
  } else {
    stocksBuns++;
  }
  if (random3 >= 0.5 && stocksPatty > 1) {
    stocksPatty--;
  } else {
    stocksPatty++;
  }
}
function serveBurger() {
  if (burgers_0 >= 1 && customers_0 >= 1) {
    burgers_0--;
    money += 5;
    customers_0--;
    resPt++;
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
      document.getElementById("progressCook").value = "0";
      clearInterval(cookBurgerTime);
      cookBurgerTime = null;
      burgers_0++;
      buns -= 2;
      cheese--;
    }
  }
}
function progressBars() {
  var resBar = document.getElementById("resBar");
  var value = 0;
  if (resPattyTime == null && !pattyUnlock) {
    resPattyTime = setInterval(resPatty, 1000);
  } else {
    resBar.value = value;
  }
}
function resPatty() {
  var researched = 0;
  if (resPt >= 100) {
    if (researched != 1000) {
      researched += 1;
      document.getElementById("resBar").value = researched;
    } else {
      researched = 0;
      clearInterval(resPattyTime);
      resPattyTime = null;
      resPt -= 100;
      pattyUnlock = true;
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
  } else if (food === 'patty' && money >= stocksPatty) {
    patty += 5;
    money -= stocksPatty;
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
  }
};
function openTab(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("menu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("menuBtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
}