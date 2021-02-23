import View from "./View.js";

class SearchFood extends View {
  homepage = document.querySelector(".homepage");

  searchCard = document.querySelector(".card-search-food");

  searchFoodInput = document.querySelector(".search-food-input");
  searchFoodBtn = document.querySelector(".btn-search-food");

  // searchFood = function () {
  //   this.renderSearchFood;
  // };

  addSearchFoodHandler(handler) {
    this.searchCard.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderSearch() {
    this.homepage.innerHTML = "";
    const html = `  
        <div class="input-search search-food">
          <span class="label">Search about food items</span>
          <input
            class="search-input search-food-input"
            type="text"
            placeholder="food"
          />
          <button type="submit" class="search-btn btn-search-food">
            <i class="fas fa-search"></i>Search
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

export default new SearchFood();
