import View from "./View.js";

class FoodFact extends View {
  foodFactCard = document.querySelector(".card-food-fact");

  showFoodFact = function () {
    this.renderFoodFact;
  };

  addFoodFactHandler(handler) {
    this.foodFactCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderFoodFact() {
    this.clearHomePage();
    const html = `   <div class="food-fact-container">

     <div class="food-fact-card"  >
       <span class="food-fact">here i have  put dome text just to not get out of api requests </span>
      </div>
      <button class="refresh-fact-btn">
        <i class="fas fa-redo-alt"></i>
        refresh
      </button>
    </div>`;

    this.homepage.insertAdjacentHTML("beforeend", html);
  }
}

export default new FoodFact();
