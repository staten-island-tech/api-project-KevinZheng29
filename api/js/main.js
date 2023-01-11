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

const page = document.getElementById("hi");

const URL = "https://pokeapi.co/api/v2/pokemon/magikarp";

async function getData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

getData(URL);
