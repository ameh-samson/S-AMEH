const menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector(".nav-container");
navLinks = document.querySelectorAll(".nav-container a");
projectContainer = document.querySelector(".portfolio-card-container");
copyrightEl = document.querySelector(".footer-container");

// navigation
let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen
    ? (menu.style.transform = "translateY(-100%)")
    : (menu.style.transform = "translateY(0)");
  isOpen = !isOpen;
});

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.transform = "translateY(-100%)";
    isOpen = false;
  });
});

// create project card
const createProjectCard = (project) => {
  return `
    <div class="portfolio-card">
    <div class="flex-center image">
      <img src="${project.image}" alt="${project.name}" />
    </div>
    <div class="card-des">
      <h3 class="heading-three">${project.name}</h3>
      <a href="${project.liveLink}" target="_blank" class="btn portfolio-links">
        <span>Live Site</span>
      </a>
      <a href="${project.githubLink}" class="btn portfolio-links">
        <span>Github</span>
      </a>
    </div>
  </div>`;
};

// fetch project data

fetch("project.json")
  .then((response) => response.json())
  .then((data) => {
    const projectCardsHTML = data.map(createProjectCard).join("");

    projectContainer.innerHTML = projectCardsHTML;
  })
  .catch((error) => {
    console.error("Error fetching project:", error);
  });

// date function
const currentYear = new Date().getFullYear();
copyrightEl.innerHTML = `<p class="secondary-text">&copy;${currentYear} SAMSON AMEH</p>`;
