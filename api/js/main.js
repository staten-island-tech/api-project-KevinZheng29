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

import "../styles/main.css";
import { DOM } from "../js/dom";

DOM.customBTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  let input = DOM.userInput.value;
  const URL = `https://api.jikan.moe/v4/anime?q=${input}&sfw`;
  functionlist.Custom(URL);
  DOM.userInput.value = "";
});

const functionlist = {
  Custom: async function (URL) {
    const Response = await fetch(URL);
    const data = await Response.json();
    console.log(data);
    try {
      if (Response.status > 199 || Response.status < 300) {
        data.data.forEach((element) => {
          DOM.DisplayPage.insertAdjacentHTML(
            "beforeend",
            `
        <div class="child">
        <h1 class="title">${element.title}</h1>
        <img class="img" src="${element.images.jpg.large_image_url}"><img>
        <h2 class="genre">Genre: ${element.genres[0].name}</h2>
        <h1 class="rating">Rating: ${element.score}</h1>
        </div>
        `
          );
        });
      }
    } catch (error) {}
  },
};

//////////////////////////////////////////////

const api3 = fetch(
  "https://api.jikan.moe/v4/anime?q=Bocchi%20The%20Rock&sfw&limit=1"
)
  .then((res) => res.json())
  .then((data) =>
    data.data.forEach((element) => {
      DOM.DisplayPage.insertAdjacentHTML(
        "beforeend",
        `
    <div class="child">
    <h1 class="title">${element.title}</h1>
    <img class="img" src="${element.images.jpg.large_image_url}"><img>
    <h2 class="genre">Genre: ${element.genres[0].name}</h2>
    <h1 class="rating">Rating: ${element.score}</h1>
    </div>
    `
      );
    })
  );

DOM.delete.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
});
