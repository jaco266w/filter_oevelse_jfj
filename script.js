const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");
const elK = document.querySelector("#el");
const toS = document.querySelector("#to_s");
const ejK = document.querySelector("#eJonas");
const rK = document.querySelector("#r_en");
const alleK = document.querySelector("#alle");


window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  showTheseVehicles(vehicles);

  elK.addEventListener("click", function() {showTheseVehicles(elFiltered(vehicles))});
  // elK.addEventListener("click",  showTheseVehicles(elFiltered(vehicles)));
  
  toS.addEventListener("click", function() {showTheseVehicles(toSFiltered(vehicles))});
  ejK.addEventListener("click", function() {showTheseVehicles(ejFiltered(vehicles))});
  rK.addEventListener("click", function() {showTheseVehicles(r1Filtered(vehicles))});
  alleK.addEventListener("click", function() {showTheseVehicles(vehicles)});

}



function showTheseVehicles(arr) {
  console.log("showTheseVehicles");
  console.log(arr);
  ulPointer.innerHTML = `<li><strong>Type</strong></li>
  <li><strong>Fuel</strong></li>
  <li><strong>Passengers</strong></li>
  <li><strong>Stops</strong></li>
  <li><strong>OwnedBy</strong></li>
  <li><strong>Electric</strong></li>
  <li><strong>Tandem</strong></li>`;

  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type ? each.type : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ? each.fuel : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers ? each.passengers : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ? each.stops : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ? each.ownedBy : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? each.isElectric : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem ? each.isTandem : ""}</li>`;
  });
}


function elFiltered(arr) {
  console.log("elFiltered");
  let result = arr.filter((each) => { 
    return each.isElectric;
  });
  return result;
}

function toSFiltered(arr) {
  let result = arr.filter((each) => {
    return each.passengers > 2
    });
  return result;
}

function ejFiltered(arr) {
  let result = arr.filter((each) => {
    return each.isElectric && each.ownedBy == "Jonas"
    });
  return result;
}

function r1Filtered(arr) {
  let result = arr.filter((each) => {
    return each.fuel == "Rugbrød" && each.passengers > 1
    });
  return result;
}
