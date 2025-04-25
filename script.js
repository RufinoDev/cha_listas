const cardContainer = document.querySelector("main"); 
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

let cardWidth = document.querySelector(".card").getBoundingClientRect().width;

nxtBtn.addEventListener("click", () => {
    cardContainer.scrollLeft += cardWidth + 16; // Adicionando espaço entre os cards
});

preBtn.addEventListener("click", () => {
    cardContainer.scrollLeft -= cardWidth + 16;
});
