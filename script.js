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
var comment = "No comments yet...";
var random = Math.random();
var random2 = Math.random();
var random3 = Math.random();
var custServedInTick = 5;
var personName = "";
var autosave = true;
var saveList = ["buns", "burgers_0", "cheese", "customers_0", "customersServed", "money", "patty", "pattyUnlock", "personName", "resPt", "stocksBuns", "stocksCheese", "stocksPatty", "visitedBefore", "autosave", "order.currentOrders", "custServedInTick", "time.rPatty"];
var defaultList = [5, 0, 5, 0, 0, 5, 0, false, "", 0, 4, 3, 6, false, true, 0, 5, 0];
var order = {
  nameList: ["Karen", "Dave", "Jacob", "Caroline", "Jack", "Kim", "Christopher", "David", "Rose", "Jennifer", "Carlos", "Derek", "Connor", "Jimmy", "Hank", "Dennis", "Elle"],
  nameRandom: Math.floor(Math.random() * 17),
  orderFlip: Math.random(),
  orderRandom: (pattyUnlock ? (orderFlip >= 0.5 ? "patty" : "cheese") : "cheese"),
  ordersToday: 1,
  currentOrders: 0,
  newOrder: function() { 
    order.nameRandom = Math.floor(Math.random() * 17);
    let orderName = order.nameList[order.nameRandom];
    let cardTemplate = `
    <div id="order${order.ordersToday}">
    <h3>#${order.ordersToday}</h3>
    <p>Customer: ${orderName} <br />Order: ${order.orderRandom}</p> <br />
    <button onclick="serveOrder(${order.ordersToday})">Serve</button>
    </div>`;
    var orderSect = get("orderMenu");
    var card = document.createElement("div");
    card.innerHTML = cardTemplate;
    orderSect.appendChild(card);
    order.ordersToday++;
    order.currentOrders++;
  }
};
function serveOrder(orderNum) {
  if (burgers_0 >= 1) {
    burgers_0--;
    money += 5;
    get(`order${orderNum}`).remove();
    resPt++;
    customersServed++;
    custServedInTick++;
    order.currentOrders--;
  }
}
var story = {
  storyPopup: function() {
    var storyPopupDiv = get("storyMode");
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
    personName = get("storyName").value;
    localStorage.setItem('name', JSON.stringify(personName));
    get("storyMode").style.display = "none";
    get("storyMode").style.backgroundColor = "#0000";
  },
  storyPopped: false
};
var rentPaid = true;
var achieve = {
  serve10: false
};
var saveload = {
  save: function() {
    saveList.forEach(x => localStorage.setItem(x, JSON.stringify(window[x])));
  },
  load: function() {
    visitedBefore = JSON.parse(localStorage.getItem('visitedBefore'));
    if (visitedBefore == null || visitedBefore == undefined) {
      visitedBefore = false;
    }
    if (visitedBefore) {
      for (x = 0; x < saveList.length; x++) {
        window[saveList[x]] = JSON.parse(localStorage.getItem(saveList[x]));
        if (window[saveList[x]] == undefined) { window[saveList[x]] = defaultList[x]; }
      }
      for (x = 0; x < order.currentOrders; x++) {
        order.newOrder();
      }
      if (time.rPatty > 0) {
        resPatty();
      }
    }
  },
  reset: function() {
    for (x = 0; x < saveList.length; x++) {
      window[saveList[x]] = defaultList[x];
    }
  }
};
function toggleAuto() {
  autosave = autosave ? false : true;
  get("autoTog").innerHTML = `Autosave is ${autosave ? "ON" : "OFF"}`;
  if (autoInterval) {
    autoInterval = setInterval(saveload.save, 5000);
  } else {
    clearInterval(autoInterval);
  }
}
var timeMin = 0;
var timeHour = 0;
var timeDay = 0;
var timeMonth = 0;
function timeClock() {
  let clock = get("clock");
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
let optionsBool = 1;
function optionsMenu() {
  let options = get("optionsMenu");
  if (optionsBool == 1) {
    options.style.display = "block";
    optionsBool = 0;
  } else if (optionsBool == 0) {
    options.style.display = "none";
    optionsBool = 1;
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
  if (achieve.serve10) {
    get("serve10div").style.backgroundColor = "rgba(30, 220, 36, 0.69)";
  }
  random = Math.random();
  random2 = Math.random();
  get("burgerNum").innerHTML = `Burgers: ${burgers_0}`;
  get("moneyNum").innerHTML = `Money: ${money}`;
  get("customerNum").innerHTML = `Customers: ${customers_0}`;
  get("cheeseNum").innerHTML = `Cheese: ${cheese}`;
  get("bunsNum").innerHTML = `Buns: ${buns}`;
  get("pattyNum").innerHTML = `Patty: ${patty}`;
  get("stonksCheese").innerHTML = `Price: ${stocksCheese}`;
  get("stonksBuns").innerHTML = `Price: ${stocksBuns}`;
  get("stonksPatty").innerHTML = `Price: ${stocksPatty}`;
  get("comments").innerHTML = comment;
  get("serve10").value = customersServed;
  get("rpCount").innerHTML = `${resPt} RP`;
  visitedBefore = true;
  /* i don't even know what this part was for
  personName = JSON.parse(localStorage.getItem('personName'));
  visitedBefore = (personName ? true : false); */
  /* make a popup happen
  if (!visitedBefore && !story.storyPopped) {
    story.storyPopup();
    story.storyPopped = true;
  } else if (!story.storyPopped) {
    get("storyMode").style.display = "none";
    get("storyMode").style.backgroundColor = "#0000";
    story.storyPopped = true;
  } */
  if (pattyUnlock) {
    let tags = document.getElementsByClassName("pattyBuy");
    tags[0].style.display = "inline";
    tags[1].style.display = "block";
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
  customers_0 = Math.round((random + 0.5) * (custServedInTick + 1));
  for (x = 0; x < customers_0; x++) {
    order.newOrder();
  }
  stocksCheese = ((random >= 0.5 && stocksCheese > 1) ? stocksCheese - 1 : (stocksCheese >= 8) ? stocksCheese - 1 : stocksCheese + 1);
  stocksBuns = ((random2 >= 0.5 && stocksBuns > 1) ? stocksBuns - 1 : (stocksBuns >= 8) ? stocksBuns - 1 : stocksBuns + 1);
  stocksPatty = ((random3 >= 0.5 && stocksPatty > 1) ? stocksPatty - 1 : (stocksPatty >= 8) ? stocksPatty - 1 : stocksPatty + 1);
  custServedInTick = 0;
}
function adReboot() {
  if (money >= 10) {
    money -= 10;
    custServedInTick++;
  }
}
function cookBurger() {
  if (cookBurgerTime == null) {
    cookBurgerTime = setInterval(cookBar, 10);
  } else {
    get("progressCook").value = time.cook;
  }
}
function cookBar() {
  if (cheese >= 1 && buns >= 2) {
    if (time.cook != 1000) {
      time.cook++;
      get("progressCook").value = time.cook;
    } else {
      time.cook = 0;
      get("progressCook").value = "0";
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
    if (resPattyTime == null && resPt >= 25) {
      resPattyTime = setInterval(resPatty, 1000);
    }
  }
}
function resPatty() {
  if (resPt >= 25) {
    if (time.rPatty != 1000) {
      time.rPatty++;
      get("resBar").value = time.rPatty;
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
    get("resBar"). value = "0";
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
  let cheeseCheck = get("checkCheese").checked; 
  let pattyCheck = get("checkPatty").checked;
  if (cheeseCheck && !pattyCheck) {
    burgerType = 0;
  } else if (!cheeseCheck && pattyCheck) {
    burgerType = 1;
  } else if (cheeseCheck && pattyCheck) {
    burgerType = 2;
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
  get(pageName).style.display = "block";
}
function get(id) {
  return document.getElementById(id);
}
function init() {
  saveload.load();
}
init();
setInterval(updateOther, 10000);
setInterval(update, 100);
setInterval(comments, 15000);
setInterval(timeClock, 2000);
if (autosave) { var autoInterval = setInterval(saveload.save, 5000); }