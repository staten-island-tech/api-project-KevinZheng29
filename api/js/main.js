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

const URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

async function getData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  const dataphoto = data.photos;
  console.log(data);
  console.log(dataphoto);
  dataphoto.forEach((data) =>
    page.insertAdjacentHTML(
      "beforeend",
      `
    <div>
    <img src="${data.img_src}"><img>
    </div>
    `
    )
  );
}

getData(URL);
