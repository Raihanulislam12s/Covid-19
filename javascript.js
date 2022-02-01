"use strict";

//Covid API

const casesId = document.getElementById("data");
const recoveredId = document.getElementById("recovered");
const deathsId = document.getElementById("deaths");

//Get Func

$(document).ready(function () {
  init();

  function init()
});

// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

//     OLD COVID API - IGNORE

// COVID API
// $(document).ready(function () {
//   init();

//   function init() {
//     var url = "https://api.covid19api.com/summary";

//     var data = "";

//     $.get(url, function (data) {
//       console.log(data.Global);

//       data = `
//              <p>${data.Global.TotalConfirmed}</p>
// `;
//       $("#data").html(data);
//     });

//     var recovered = "";

//     $.get(url, function (recovered) {
//       console.log(data.Global);

//       recovered = `
//              <p>${recovered.Global.TotalRecovered}</p>

// `;
//       $("#recovered").html(recovered);
//     });

//     var deaths = "";

//     $.get(url, function (deaths) {
//       console.log(data.Global);

//       deaths = `
//              <p>${deaths.Global.TotalDeaths}</p>

// `;
//       $("#deaths").html(deaths);
//     });
//   }
// });

// END 
