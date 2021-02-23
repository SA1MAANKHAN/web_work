import View from "./View.js";

class SearchRecipe extends View {
  homepage = document.querySelector(".homepage");

  searchCard = document.querySelector(".card-search-recipe");

  searchRecipeInput = document.querySelector(".search-recipe-input");
  searchRecipeBtn = document.querySelector(".btn-search-recipe");

  // searchRecipe = function () {
  //   this.renderSerchRecipe;
  // };

  addSearchRecipeHandler(handler) {
    this.searchCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderSearch() {
    this.homepage.innerHTML = "";
    const html = `  
         <div class="input-search search-recipe">
          <span class="label">Search Recipes from Ingredients </span>
          <input
            class="search-input search-recipe-input"
            type="text"
            placeholder="Ingredients:"
          />
          <button type="submit" class="search-btn btn-search-recipe">
            <i class="fas fa-search"></i> Search
          </button>
        </div>

       `;

    this.homepage.insertAdjacentHTML("beforeend", html);
  }

  // addSearchFoodHandler() {
  //   this.searchFoodBtn.addEventListener(
  //     "click",
  //     this.renderSearchFood.bind(this)
  //   );
  // }

  // addSearchRecipeHandler() {
  //   this.searchRecipeBtn.addEventListener(
  //     "click",
  //     this.renderSerchRecipe.bind(this)
  //   );
  // }

  // renderSearchInput() {
  //   this.homepage;
  // }

  // renderSearchFood() {
  //   this.clearHomePage();
  //   const html = `   <div class="food-fact-container">

  //    <div class="food-fact-card"  >
  //      <span class="food-fact">here i have  put dome text just to not get out of api requests </span>
  //     </div>
  //     <button class="refresh-fact-btn">
  //       <i class="fas fa-redo-alt"></i>
  //       refresh
  //     </button>
  //   </div>`;

  //   this.homepage.insertAdjacentHTML("beforeend", html);
  // }

  // renderSerchRecipe() {
  //   this.clearHomePage();
  //   const html = `   <div class="food-fact-container">

  //    <div class="food-fact-card"  >
  //      <span class="food-fact">here i have  put dome text just to not get out of api requests </span>
  //     </div>
  //     <button class="refresh-fact-btn">
  //       <i class="fas fa-redo-alt"></i>
  //       refresh
  //     </button>
  //   </div>`;

  //   this.homepage.insertAdjacentHTML("beforeend", html);
  // }
}

export default new SearchRecipe();
