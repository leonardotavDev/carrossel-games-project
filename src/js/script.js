const button = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const informations = document.querySelectorAll(".information");

button.forEach((buttons, indice) => {
  buttons.addEventListener("click", () => {
    const buttonActive = document.querySelector(".button.active");
    buttonActive.classList.remove("active");

    button[indice].classList.add("active");

    const imageActive = document.querySelector(".image.active");
    imageActive.classList.remove("active");

    images[indice].classList.add("active");

    const informationActive = document.querySelector(".information.active");
    informationActive.classList.remove("active");

    informations[indice].classList.add("active");
  });
});
