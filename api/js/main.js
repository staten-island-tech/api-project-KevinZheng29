import "../styles/main.css";

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

const page = document.getElementById("page");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
/////////////////////////////////////////////////////

btn.addEventListener("click", function () {
  let userinput = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${userinput}`;
  showresult(url);
});

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
      <img src="dataimage.back_default">
      </div>
      
      `
      );
    } else {
      console.log("Error");
    }
  } catch (error) {}
}

/*
const URL = `https://pokeapi.co/api/v2/pokemon/charmander`;

async function getData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

getData(URL);*/
