import View from "./View.js";

class SearchRecipe extends View {
  searchCard = document.querySelector(".card-search-food");

  searchFoodInput = document.querySelector(".search-food-input");
  searchFoodBtn = document.querySelector(".btn-search-food");
  searchRecipeInput = document.querySelector(".search-recipe-input");
  searchRecipeBtn = document.querySelector(".btn-search-recipe");

  searchFood = function () {
    this.renderSearchFood;
  };

  searchRecipe = function () {
    this.renderSerchRecipe;
  };
  addSearchHandler() {
    this.searchCard.addEventListener("click", this.renderSearchFood.bind(this));
  }

  addSearchFoodHandler() {
    this.searchFoodBtn.addEventListener(
      "click",
      this.renderSearchFood.bind(this)
    );
  }

  addSearchRecipeHandler() {
    this.searchRecipeBtn.addEventListener(
      "click",
      this.renderSerchRecipe.bind(this)
    );
  }

  renderSearchFood() {
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

  renderSerchRecipe() {
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

export default new SearchRecipe();
