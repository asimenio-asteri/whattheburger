var burgers = 0;
var customers = 0;
var money = 5;
var cookBurgerTime = null;
var time = 0;
var updateAll = setInterval(update, 100);
var largeObject = {
  shapeStuff: {
    polygon: {
      trigon: "triangle",
      quadgon: {
        common: "square",
        uncommon: "rectangle",
      },
      pentagon: "pentagon",
      hexagon: "hexagon",
      heptagon: "heptagon",
    },
    polyhedron: {
      tetrahedron: "d4",
      hexahedron: "d6",
      decahedron: "d10",
      dodecahedron: "d12",
      icosahedron: "d20",
    },
  },
  atoms: {
    hydrogen: {
      molecules: {
        num1: "H2",
      },
    },
  },
}
//to select an object, do "objectName". now, select the string "square" from largeObject. the answer is "largeObject.shapeStuff.polygon.quadgon.common"
function update() {
  document.getElementById("burgerNum").innerHTML = "Burgers: " + burgers;
  document.getElementById("moneyNum").innerHTML = "Money: " + money;
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
