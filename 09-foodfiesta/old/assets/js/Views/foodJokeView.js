import View from "./View.js";

class FoodJoke {
  homepage = document.querySelector(".homepage");
  foodJokeCard = document.querySelector(".card-food-joke");
  data;

  addFoodJokeHandler(handler) {
    this.foodJokeCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  render(text) {
    this.homepage.innerHTML = "";
    const html = `   <div class="food-joke-container">

     <div class="food-joke-card"  >
       <span class="food-joke">${text} </span>
      </div>
      <button class="refresh-joke-btn">
        <i class="fas fa-redo-alt"></i>
        refresh
      </button>
    </div>`;

    this.homepage.insertAdjacentHTML("beforeend", html);
  }
}

export default new FoodJoke();
