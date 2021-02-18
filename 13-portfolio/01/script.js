"use strict";

const scrollBtn = document.querySelector(".scroll-down-landing");

const nav = document.querySelector(".nav");

const aboutMe = document.querySelector("#about-me");
const aboutMeNav = document.querySelector(".nav-links-1");
const skills = document.querySelector("#skills");
const skillsNav = document.querySelector(".nav-links-2");
const blog = document.querySelector("#blog");
const blogNav = document.querySelector(".nav-links-3");
const contact = document.querySelector("#contact");
const contactNav = document.querySelector(".nav-links-4");

const slidingName = document.querySelector(".sliding-names");

/////////////////////////////// scroll

scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  aboutMe.scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////////navigation fade animation

function handlehover(e) {
  if (e.target.classList.contains("nav-link")) {
    const siblings = e.target
      .closest(".nav-links")
      .querySelectorAll(".nav-link");
    const logo = e.target.closest(".nav").querySelector(".nav-name");

    siblings.forEach((element) => {
      if (element !== e.target) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener("mouseover", handlehover.bind(0.5));
nav.addEventListener("mouseout", handlehover.bind(1));

///////////////////////////////////////////slider

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const arr = ["developer", "meditator", "blogger", "gutarist"];

let curSlide = 0;
const maxslide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX( ${100 * (i - slide)}%)`)
  );
};

const goToName = function (index) {
  slidingName.textContent = `${arr[index]}`;
};

goToSlide(0);

const nextSlide = function () {
  curSlide === maxslide - 1 ? (curSlide = 0) : curSlide++;

  console.log("right button ");

  goToSlide(curSlide);
  goToName(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  goToName(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// old scroll method

// document.querySelectorAll(".nav-link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// function scrollToAbout(e) {
//       e.preventDefault();
//       const aboutCoords = aboutMe.getBoundingClientRect();
//       console.log(aboutCoords);

//       console.log(e.target.getBoundingClientRect());

//       console.log(pageXOffset, pageYOffset);

//       console.log(
//             document.documentElement.clientHeight,
//             document.documentElement.clientWidth
//           );

//           scrollTo(aboutCoords.left, aboutCoords.top);
//         }
//

// aboutMeNav.addEventListener("click", function (e) {
//   e.preventDefault();
//   aboutMe.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// skillsNav.addEventListener("click", function (e) {
//   e.preventDefault();
//   skills.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// blogNav.addEventListener("click", function (e) {
//   e.preventDefault();
//   blog.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// contactNav.addEventListener("click", function (e) {
//   e.preventDefault();
//   contact.scrollIntoView({
//     behavior: "smooth",
//   });
// });
