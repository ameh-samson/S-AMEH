const projectCards = document.querySelector(".project-cards");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let cardIndex = 0;

function showCard(index) {
  const cardWidth = projectCards.children[0].offsetWidth;
  projectCards.style.transform = `translateX(-${index * cardWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  if (cardIndex > 0) {
    cardIndex--;
    showCard(cardIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (cardIndex < projectCards.children.length - 1) {
    cardIndex++;
    showCard(cardIndex);
  }
});
