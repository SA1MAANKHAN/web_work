"use strict";

// scroll ------------------------------
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// nav fade-  ---------------------------------

const nav = document.querySelector(".nav-links");

function handlehover(e) {
  if (e.target.classList.contains("nav-link")) {
    const siblings = e.target
      .closest(".nav-links")
      .querySelectorAll(".nav-link");
    const logo = e.target.closest(".links").querySelector(".nav-name");

    siblings.forEach((element) => {
      if (element !== e.target) element.style.opacity = this;
    });
  }
}
nav.addEventListener("mouseover", handlehover.bind(0.5));
nav.addEventListener("mouseout", handlehover.bind(1));

// home button ------------------------------

const header = document.querySelector("#header");
const homeBtn = document.querySelector(".to-home");

const homeBtnVis = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    homeBtn.style.display = "none";
  } else {
    homeBtn.style.display = "flex";
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(homeBtnVis, obsOptions);

observer.observe(header);

// skills animation --------------------------

// const skills = document.querySelector(".skills");
// const htmlSkill = document.querySelector(".html-skill");

// const skillsAnimation = function (entries) {
//   entries.forEach((entry) => {
//     entry.isIntersecting;
//     htmlSkill.classList.add("html-skill-animate");
//     console.log("now");
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.3,
// };

// const observer = new IntersectionObserver(skillsAnimation, obsOptions);

// observer.observe(skills)
