import View from "./View.js";

class RandomRecipe {
  homepage = document.querySelector(".homepage");
  randomRecipeCard = document.querySelector(".card-random-recipe");

  addRandomRecipeHandler(handler) {
    this.randomRecipeCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  render(data) {
    this.homepage.innerHTML = "";
    const html = `   <div>RandomRecipe will go here</div>`;

    this.homepage.insertAdjacentHTML("beforeend", html);
  }
}

export default new RandomRecipe();
