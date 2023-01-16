/*function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
    reject(`error`);
  });
  return greetPromise;
}

const suzie = greet("suzie");

console.log(suzie);

const page = document.getElementById("hi");

suzie.then((result) => {
  page.insertAdjacentHTML("beforeend", `${result}`);
}); */

/*const URL = "https://api.quotable.io/random";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
}


getData(URL); */

/*
const page = document.getElementById("page");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
/////////////////////////////////////////////////////

btn.addEventListener("click", function () {
  ShowPokemon();
});

function ShowPokemon() {
  let userinput = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${userinput}`;
  showresult(url);
}

async function showresult(url) {
  try {
    const response2 = await fetch(url);
    const data2 = await response2.json();
    const dataimage = data2.sprites;
    if (response2.status > 199 || response2.status < 300) {
      console.log(data2);
      page.insertAdjacentHTML(
        "beforeend",
        `
      
      <div>
      <img src="${dataimage.front_shiny}">
      </div>
      
      `
      );
    } 
  } catch (error) {}
}*/

import "../styles/main.css";
import { DOM } from "../js/dom";

DOM.BTN.addEventListener("click", function () {
  let input = DOM.userInput.value;
  const API = `https://pokeapi.co/api/v2/pokemon/${input}`;
  allfunction.Pokemon(API);
});

const allfunction = {
  Pokemon: async function (API) {
    try {
      const Response = await fetch(API);
      const Data = await Response.json();
      const DataImage = Data.sprites;
      console.log(Data);
      if (Response.status > 199 || Response.status < 300) {
        page.insertAdjacentHTML(
          "beforeend",
          `
    
    <div>
    <img class="image" src="${DataImage.front_default}"><img>
    </div>
    
    `
        );
      }
      return Data;
    } catch (error) {}
  },
};

const getAPI = await fetch("https://pokeapi.co/api/v2/pokemon/");
const JSData = await getAPI.json();
console.log(JSData);
console.log(JSData.results.name);
/////////////
const getArray = [JSData];
console.log(getArray);
console.log(getArray.results);
