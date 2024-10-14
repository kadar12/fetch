const img = document.querySelector("img");
const btn = document.querySelector("button");

async function handleGetFox() {
  const response = await fetch("https://randomfox.ca/floof/");

  const data = await response.json();

  img.src = data.image;
}

handleGetFox();

btn.addEventListener("click", handleGetFox);

async function getMyStuffFromOverThere() {
  const response = await fetch("https://api.github.com/repos/kadar12/forms");
  console.log("HTTP response:", response);
  const json = await response.json();
  console.log("JSON data:", json);
}

getMyStuffFromOverThere();
