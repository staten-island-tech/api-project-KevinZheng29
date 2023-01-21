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

/*DOM.S1BTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  const URL =
    "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin: The Final Season&sfw";
  functionlist.S1(URL);
});

DOM.S2BTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  const URL =
    "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin: The Final Season&sfw";
  functionlist.S2(URL);
});

DOM.S3BTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  const URL =
    "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin: The Final Season&sfw";
  functionlist.S3(URL);
});

DOM.S4BTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  const URL =
    "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin: The Final Season&sfw";
  functionlist.S4(URL);
});*/

DOM.customBTN.addEventListener("click", function () {
  DOM.DisplayPage.innerHTML = "";
  let input = DOM.userInput.value;
  const URL = `https://api.jikan.moe/v4/anime?q=${input}&sfw`;
  functionlist.Custom(URL);
  DOM.userInput.value = "";
});

const functionlist = {
  /*  S1: async function (URL) {
    const Response = await fetch(URL);
    const Data = await Response.json();
    const Data2 = Data.data;
    const Link = Data2[9].trailer.embed_url;
    const Synopsis = Data.data[9].synopsis;
    const Title = Data.data[9].title;
    try {
      if (Response.status > 199 || Response.status < 300) {
        DOM.DisplayPage.insertAdjacentHTML(
          "beforeend",
          `
        <div class="child">
        <h1 class="title">${Title}</h1>
        <embed  class="video" src="${Link}"><embed>
        <h1 class="synopsis">${Synopsis}</h1>
        </div>
        `
        );
      } else {
        DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
      }
    } catch (error) {}
  },
  S2: async function (URL) {
    const Response = await fetch(URL);
    const Data = await Response.json();
    const Data2 = Data.data;
    const Link = Data2[8].trailer.embed_url;
    const Synopsis = Data.data[8].synopsis;
    const Title = Data.data[8].title;
    try {
      if (Response.status > 199 || Response.status < 300) {
        DOM.DisplayPage.insertAdjacentHTML(
          "beforeend",
          `
        <div class="child">
        <h1 class="title">${Title}</h1>
        <embed  class="video" src="${Link}"><embed>
        <h1 class="synopsis">${Synopsis}</h1>
        </div>
        `
        );
      } else {
        DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
      }
    } catch (error) {}
  },
  S3: async function (URL) {
    const Response = await fetch(URL);
    const Data = await Response.json();
    const Data2 = Data.data;
    const Link = Data2[7].trailer.embed_url;
    const Synopsis = Data.data[7].synopsis;
    const Title = Data.data[7].title;
    try {
      if (Response.status > 199 || Response.status < 300) {
        DOM.DisplayPage.insertAdjacentHTML(
          "beforeend",
          `
        <div class="child">
        <h1 class="title">${Title}</h1>
        <embed  class="video" src="${Link}"><embed>
        <h1 class="synopsis">${Synopsis}</h1>
        </div>
        `
        );
      } else {
        DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
      }
    } catch (error) {}
  },
  S4: async function (URL) {
    const Response = await fetch(URL);
    const Data = await Response.json();
    const Data2 = Data.data;
    const Link = Data2[0].trailer.embed_url;
    const Synopsis = Data.data[0].synopsis;
    const Title = Data.data[0].title;
    try {
      if (Response.status > 199 || Response.status < 300) {
        DOM.DisplayPage.insertAdjacentHTML(
          "beforeend",
          `
        <div class="child">
        <h1 class="title">${Title}</h1>
        <embed  class="video" src="${Link}"><embed>
        <h1 class="synopsis">${Synopsis}</h1>
        </div>
        `
        );
      } else {
        DOM.DisplayPage.insertAdjacentHTML("beforeend", `<h1>Error</h1>`);
      }
    } catch (error) {}
  },*/
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

/*const API = "https://api.jikan.moe/v4/anime?q=Shingeki no Kyojin&sfw";
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
getData(API);*/
