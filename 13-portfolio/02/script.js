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

const observerHomeBtn = new IntersectionObserver(homeBtnVis, obsOptions);

observerHomeBtn.observe(header);

// skills animation --------------------------

const skillSection = document.querySelector(".skills");
const htmlSkill = document.querySelector(".html-skill");
const cssSkill = document.querySelector(".css-skill");
const jsSkill = document.querySelector(".js-skill");
const golangSkill = document.querySelector(".golang-skill");
const pythonSkill = document.querySelector(".python-skill");
const sqlSkill = document.querySelector(".sql-skill");
const cppSkill = document.querySelector(".cpp-skill");

const skillsAnimation = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      htmlSkill.classList.add("html-skill-animate");
      cssSkill.classList.add("css-skill-animate");
      jsSkill.classList.add("js-skill-animate");
      golangSkill.classList.add("go-skill-animate");
      pythonSkill.classList.add("py-skill-animate");
      sqlSkill.classList.add("sql-skill-animate");
      cppSkill.classList.add("cpp-skill-animate");
    } else {
      htmlSkill.classList.remove("html-skill-animate");
      cssSkill.classList.remove("css-skill-animate");
      jsSkill.classList.remove("js-skill-animate");
      golangSkill.classList.remove("go-skill-animate");
      pythonSkill.classList.remove("py-skill-animate");
      sqlSkill.classList.remove("sql-skill-animate");
      cppSkill.classList.remove("cpp-skill-animate");
    }
  });
};

const obsOptionsSkills = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(skillsAnimation, obsOptionsSkills);

observer.observe(skills);
