export default class View {
  homepage = document.querySelector(".homepage");

  clearHomePage() {
    this.homepage.innerHTML = "";
  }
}
