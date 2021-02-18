const PUBLIC_KEY = "1c80cbb2037c919804c4052ca1f2158f";
const PRIV_KEY = "e47fb40a74a8171a841dc314947d32fd1b17581d";

// web-Elements
const heroImg = document.querySelector(".hero-img");
const heroName = document.querySelector(".hero-name");
const heroDescription = document.querySelector(".hero-description");

const cardContainer = document.querySelector(".card-container");

// inputs
const nameInput = document.querySelector(".name-input");

// submit btns
const nameBtn = document.querySelector(".name-btn");

// ----------------------------------------------------------------------------------------------------

const clearInput = function (element) {
  element.value = "";
};

// ----------------------------------------------------------------------------------------------------

const renderCharacterCards = function (cardArray) {
  let i = 0;
  cardContainer.innerHTML = "";
  cardArray.forEach((card) => {
    let html = `
            <div class="card">
        <img src="${
          cardArray[i]?.thumbnail.path + ".jpg"
        }" alt="Nothing to show yet..." class="hero-img" />
        <h2 class="hero-name">${cardArray[i]?.name}</h2>
        <p class="hero-description">
        ${
          cardArray[i].description.length > 5
            ? cardArray[i]?.description
            : "Not much is known about this character, our agents are on work and    will surely return with some information."
        }</p>
            <button class="get-comics">
          <a href="${
            cardArray[i].urls[0].url
          }" class="get-comics-link">Get comics</a>
        </button>
         </div>
        `;

    cardContainer.insertAdjacentHTML("beforeend", html);

    i++;
  });
};

const getCharacter = async function (input) {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&limit=100&apikey=1c80cbb2037c919804c4052ca1f2158f&orderBy=-modified`
  );
  const data = await response.json();

  renderCharacterCards(data.data.results);
};

// ----------------------------------------------------------------------------------------------------

// const getComic = async function () {
//   const response = await fetch(
//     `https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=1c80cbb2037c919804c4052ca1f2158f`
//   );
//   const data = await response.json();

//   console.log(data);
//   heroImg.src = data.data.results[5].thumbnail.path + ".jpg";
//   heroName.textContent = data.data.results[5].title;
//   heroDescription.textContent = data.data.results[5].description?.split(
//     "<br>"
//   )[0];
// };

// getComic();

// -------------------for  name-------------------
nameBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!nameInput.value) return;
  getCharacter(nameInput.value);
  clearInput(nameInput);
});

// SAVED FOR LATER**************************************
// import CRYPTO from "crypto-js";
// const ts = new Date().getTime();
// const hash = CRYPTO.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
