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

import "../styles/main.css";
import { DOM } from "../js/dom";
/*
DOM.BTN.addEventListener("click", function () {
  let input = DOM.userInput.value;
  const API = `https://pokeapi.co/api/v2/pokemon/${input}`;
  allfunction.Pokemon(API);
  DOM.userInput.value = "";
});

const allfunction = {
  Pokemon: async function (API) {
    try {
      const Response = await fetch(API);
      const Data = await Response.json();
      const DataImage = Data.sprites;
      const Type = Data.types;
      console.log(Data);
      if (Response.status > 199 || Response.status < 300) {
        page.insertAdjacentHTML(
          "beforeend",
          `
    
    <div class="child">
    <img class="image" src="${DataImage.front_default}"><img>
    <h1 class="name">${Data.name}</h1>
    </div>
    
    `
        );
      }
    } catch (error) {}
  },
}; */

const API = "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin&sfw";
async function getData(URL) {
  const Response = await fetch(URL);
  const Data = await Response.json();
  console.log(Data);
  const Data2 = Data.data;
  const link = Data2[0].trailer.embed_url;
  DOM.DisplayPage.insertAdjacentHTML(
    "beforeend",
    `
  <div>
  <embed style="width:1080px; height:720px;" src="${link}"><embed>
  </div>
  `
  );
}
getData(API);
