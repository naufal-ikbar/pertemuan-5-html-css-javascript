function changeColorBackground() {
  const randomHex = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  header.style.backgroundColor = randomHex;
  footer.style.backgroundColor = randomHex;
}

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const button = document.getElementById("button");

button.addEventListener("click", changeColorBackground);
