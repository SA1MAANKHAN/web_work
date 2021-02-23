import View from "./View.js";

class FoodFact {
  homepage = document.querySelector(".homepage");
  foodFactCard = document.querySelector(".card-food-fact");
  data;
  reloadBtn = document.querySelector(".refresh-fact-btn");

  addFoodFactHandler(handler) {
    this.foodFactCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  render(text) {
    this.homepage.innerHTML = "";
    const html = `   <div class="food-fact-container">

     <div class="food-fact-card"  >
       <span class="food-fact">${text} </span>
      </div>
      <button class="refresh-fact-btn">
        <i class="fas fa-redo-alt"></i>
        refresh
      </button>
    </div>`;

    this.homepage.insertAdjacentHTML("beforeend", html);
  }

  addFoodFactReloadHandler(handler) {
    this.reloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("ckicked");
      handler();
    });
  }
}

export default new FoodFact();
