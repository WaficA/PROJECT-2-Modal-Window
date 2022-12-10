"use strict";

const model = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector("close-model");
const btnsOpenModel = document.querySelectorAll(".show-modal");

console.log(btnsOpenModel);

for (let i = 0; i < btnsOpenModel.length; i++)
  console.log(btnsOpenModel[i].textContent);
