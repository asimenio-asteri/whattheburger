var burgers_0 = 0;
var burgers_1 = 0;
var burgers_2 = 0;
var customers_0 = 0;
var customers_1 = 0;
var customers_2 = 0;
var money = 5;
var burgerType = 0;
var customersServed = 0;
/* 
0 = just cheese & buns (all have buns)
1 = just patty
2 = cheese & patty
*/
var pattyUnlock = false;
var visitedBefore = false;
var buns = 10;
var cheese = 5;
var patty = 0;
var stocksCheese = 3;
var stocksBuns = 4;
var stocksPatty = 6;
var time = {
  cook: 0,
  rPatty: 0
};
var resPt = 0;
var cookBurgerTime = null;
var resPattyTime = null;
setInterval(updateOther, 10000);
setInterval(update, 100);
setInterval(comments, 15000);
setInterval(timeClock, 100);
var comment = "No comments yet...";
var random = Math.random();
var random2 = Math.random();
var random3 = Math.random();
var custMult = 10;
var name = "";
var order = {
  nameList: ["Karen", "Dave", "Jacob", "Caroline", "Jack", "Kim", "Christopher", "David", "Rose", "Jennifer", "Carlos", "Derek", "Connor", "Jimmy", "Hank", "Dennis"],
  nameRandom: Math.floor(Math.random() * 16),
  orderFlip: Math.random(),
  orderRandom: (pattyUnlock ? (orderFlip >= 0.5 ? "patty" : "cheese") : "cheese"),
  ordersToday: 1,
  order: function() { 
    let orderName = this.nameList[this.nameRandom];
    let cardTemplate = `
    <h3>#${this.ordersToday}</h3>
    <p>Customer: ${orderName} <br />Order: ${this.orderRandom}</p>`;
    this.nameRandom = Math.floor(Math.random() * 16);
    var orderSect = document.getElementById("orderMenu");
    var card = document.createElement("div");
    card.innerHTML = cardTemplate;
    orderSect.appendChild(card);
    this.ordersToday++;
  }
};
var story = {
  storyPopup: function() {
    var storyPopupDiv = document.getElementById("storyMode");
    var whatName = document.createElement("p");
    whatName.innerHTML = "What is your name?";
    storyPopupDiv.appendChild(whatName);
    var inputName = document.createElement("input");
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'storyName');
    inputName.setAttribute('name', 'storyName');
    storyPopupDiv.appendChild(inputName);
    var submitName = document.createElement("button");
    submitName.innerHTML = "Start Working";
    submitName.setAttribute('onClick', 'story.submitName()');
    submitName.setAttribute('id', 'nameSubmit');
    storyPopupDiv.appendChild(submitName);
    var breakLine = document.createElement("br");
    storyPopupDiv.insertBefore(breakLine, submitName);
    visitedBefore = true;
  },
  submitName: function() {
    name = document.getElementById("storyName").value;
    localStorage.setItem('name', JSON.stringify(name));
    document.getElementById("storyMode").style.display = "none";
    document.getElementById("storyMode").style.backgroundColor = "#0000";
  },
  storyPopped: false
};
var rentPaid = true;
var achieve = {
  serve10: false
};
function save() {
  localStorage.setItem('money', JSON.stringify(money));
  localStorage.setItem('visted', JSON.stringify(visitedBefore));
  localStorage.setItem('served', JSON.stringify(customersServed));
}
function load() {
  money = JSON.parse(localStorage.getItem('money'));
  customersServed = JSON.parse(localStorage.getItem('served'));
}
var timeMin = 0;
var timeHour = 0;
var timeDay = 0;
var timeMonth = 0;
function timeClock() {
  let clock = document.getElementById("clock");
  let str_min = "";
  let str_hour = "";
  let str_day = "";
  let str_month = "";
  let str_time = "";
  timeMin++;
  if (timeMin == 59) {
    timeHour++;
    timeMin = 0;
  }
  if (timeHour == 23) {
    timeHour = 0;
    timeDay++;
  }
  if (timeDay == 29) {
    timeDay = 0;
    timeMonth++;
  }
  if (timeMonth == 11) {
    timeMonth = 0;
  }
  if (timeHour < 10) {
    str_hour = "0" + timeHour.toString();
  } else {
    str_hour = timeHour.toString();
  }
  if (timeMin < 10) {
    str_min = "0" + timeMin.toString();
  } else {
    str_min = timeMin.toString();
  }
  str_time = str_hour + ":" + str_min;
  clock.innerHTML = str_time;
  if (!rentPaid && timeMonth >= timeDay) {
    // ^ make someone get angry that you aren't paying rent
  }
}
function comments() {
  let num = Math.round(random * 10);
  switch(num) {
    case 0:
      comment = "This tastes horrible! 1/5 stars.";
      break;
    case 1:
      comment = "I don't like it. 2/5 stars...";
      break;
    case 2:
      comment = "I guess I'll eat it... 3/5";
      break;
    case 3:
      comment = "What if I told you we live in a GAME!";
      break;
    case 4:
      comment = "I need extra cheese!";
      break;
    case 5:
      comment = "This place is pretty cheap, and it tastes kinda good. 4/5 star.";
      break;
    case 6:
      comment = "Why no boterham?";
      break;
    case 7:
      comment = "Needs more kinds of food than just burgers.";
      break;
    case 8:
      comment = "wtf happened to my toilet";
      break;
    case 9:
      comment = "DaveRainbowin said this was a good place to go! He's right!";
      break;
    default:
      comment = "I want to see your manager!";
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
  document.getElementById("serve10").value = customersServed;
  visitedBefore = false;
  name = JSON.parse(localStorage.getItem('name'));
  visitedBefore = (name ? true : false);
  if (!visitedBefore && !story.storyPopped) {
    story.storyPopup();
    story.storyPopped = true;
  } else if (!story.storyPopped) {
    document.getElementById("storyMode").style.display = "none";
    document.getElementById("storyMode").style.backgroundColor = "#0000";
    story.storyPopped = true;
  }
  if (pattyUnlock) {
    let tags = document.getElementsByClassName("pattyBuy");
    for (i = 0; i < tags.length; i++) {
      tags[i].style.display = "block";
    }
  }
  if (customersServed >= 10) {
    achieve.serve10 = true;
  } else {
    achieve.serve10 = false;
  }
  if (achieve.serve10) {
    rentPaid = false;
  }
}
function updateOther() {
  let randomX = random * custMult;
  let mult = custMult / 2;
  customers_0 = (
    (randomX <= mult) ? 0
    : (randomX <= mult + 2) ? 1
    : (randomX <= mult + 4) ? 2
    : (randomX <= mult + 6) ? 3
    : (randomX <= mult + 8) ? 4
    : 5
  );
  stocksCheese = (stocksCheese >= 1 && random2 > 0.5) ? stocksCheese - 1 : stocksCheese + 1;
  stocksBuns = (random >= 0.5 && stocksBuns > 1) ? stocksBuns - 1 : stocksBuns + 1;
  stocksPatty = (random3 >= 0.5 && stocksPatty > 1) ? stocksPatty - 1 : stocksPatty + 1;
}
function serveBurger() {
  if (burgers_0 >= 1 && customers_0 >= 1) {
    burgers_0--;
    money += 5;
    customers_0--;
    resPt++;
    customersServed++;
  }
}
function cookBurger() {
  if (cookBurgerTime == null) {
    cookBurgerTime = setInterval(cookBar, 10);
  } else {
    document.getElementById("progressCook").value = time.cook;
  }
}
function cookBar() {
  if (cheese >= 1 && buns >= 2) {
    if (time.cook != 1000) {
      time.cook++;
      document.getElementById("progressCook").value = time.cook;
    } else {
      time.cook = 0;
      document.getElementById("progressCook").value = "0";
      clearInterval(cookBurgerTime);
      cookBurgerTime = null;
      burgers_0++;
      buns -= 2;
      cheese--;
    }
  }
}
function activate(func) {
  if (func == "resPatty") {
    if (resPattyTime == null && resPt >= 10) {
      resPattyTime = setInterval(resPatty, 1000);
    } else {
      document.getElementById("resBar").value = time.rPatty;
    }
  }
}
function resPatty() {
  if (resPt >= 25) {
    if (time.rPatty != 1000) {
      time.rPatty++;
      document.getElementById("resBar").value = time.rPatty;
    } else {
      time.rPatty = 0;
      resPt -= 25;
      clearInterval(resPattyTime);
      resPattyTime = null;
      pattyUnlock = true;
    }
  } else {
    clearInterval(resPattyTime);
    resPattyTime = null;
    time.rPatty = 0;
    document.getElementById("resBar"). value = "0";
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
}
var rules = document.styleSheets[0].cssRules;
function theme(type) {
  if (type == 0) {
    rules[0].style.color = "white";
    rules[0].style.backgroundColor = "#2C2F33";
    rules[1].style.color = "white";
    rules[1].style.backgroundColor = "#2C2F33";
    rules[1].style.borderColor = "white";
  } else if (type == 1) {
    rules[0].style.color = "black";
    rules[0].style.backgroundColor = "white";
    rules[1].style.color = "black";
    rules[1].style.backgroundColor = "white";
    rules[1].style.borderColor = "black";
  }
}
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