var burgers = 0;
var customers = 0;
var rand1 = Math.random();
setInterval(customerGen, 10000);
setInterval(updRand, 100)
function customerGen() {
  let randCust = Math.floor(rand1 * 10);
  switch (randCust) {
    case 0:
      customers = 1;
      break;
    case 1:
      customers = 2;
      break;
    case 2:
      customers = 3;
      break;
    case 3:
      customers = 4;
      break;
    case 4:
      customers = 5;
      break;
    case 5:
      customers = 6;
      break;
    case 6:
      customers = 7;
      break;
    case 7:
      customers = 8;
      break;
    case 8:
      customers = 9;
      break;
    case 9:
      customers = 10;
      break;
    case 10:
      customers = 11;
    default:
      customers = 0;
      break;
  }
};
function updRand() {
  rand1 = Math.random();
};
