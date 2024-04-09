const menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector(".nav-container");
projectContainer = document.querySelector(".portfolio-card-container");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen
    ? (menu.style.transform = "translateY(-100%)")
    : (menu.style.transform = "translateY(0)");
  isOpen = !isOpen;
});

const createProjectCard = () => {};

// fetch project data

fetch("project.json")
  .then((response) => response.json())
  .then((data) => {
    const projectCardsHTML = data
      .map(
        (project) => `
      <div class="portfolio-card">
        <div class="flex-center image">
        <img src="${project.image}" alt="${project.name}" />
      </div>
      <div class="card-des">
        <h3 class="heading-three">${project.name}</h3>
        <a href="${project.liveLink}" target="_blank" class="btn portfolio-links"
          ><span>Live Site</span></a
        >
        <a href="${project.githubLink}" class="btn portfolio-links"><span>Github</span></a>
      </div>
    </div>
  `
      )
      .join("");

    // Append project cards HTML to the container
    projectContainer.innerHTML = projectCardsHTML;
  })
  .catch((error) => {
    console.error("Error fetching projects:", error);
  });
