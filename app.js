const img = document.querySelector("img");
const btn = document.querySelector("button");

async function handleGetFox() {
  const response = await fetch("https://randomfox.ca/floof/");

  const data = await response.json();

  img.src = data.image;
}

handleGetFox();

btn.addEventListener("click", handleGetFox);
