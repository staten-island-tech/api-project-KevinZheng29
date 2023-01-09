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

const URL = "https://anime-facts-rest-api.herokuapp.com/api/v1";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
}

getData(URL);
