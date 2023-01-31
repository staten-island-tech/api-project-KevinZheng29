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

const testlink = "https://api.jikan.moe/v4/anime?q=Bocchi The Rock&sfw";
async function test(URL) {
  const Response = await fetch(URL);
  const data = await Response.json();
  console.log(data);
}
test(testlink);

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
    const Data = await Response.json();
    const Data2 = Data.data;
    const Link = Data2[0].images.jpg.large_image_url;
    const Synopsis = Data.data[0].synopsis;
    const Title = Data.data[0].title;
    try {
      if (Response.status > 199 || Response.status < 300) {
        DOM.DisplayPage.insertAdjacentHTML(
          "beforeend",
          `
        <div class="child">
        <h1 class="title">${Title}</h1>
        <img class="img" src="${Link}"><img>
        <h1 class="synopsis">${Synopsis}</h1>
        <h1 class="rating">Rating: ${Data2[0].score}</h1>
        </div>
        `
        );
      } else {
        DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
      }
    } catch (error) {
      DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
    }
  },
};
