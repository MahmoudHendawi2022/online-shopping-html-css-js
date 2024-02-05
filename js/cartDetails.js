let productsAllFromLocal = JSON.parse(localStorage.getItem("productsAll"));
let productId = localStorage.getItem("productId");
let itemDetailsDom = document.querySelector(".itemDetails");

let itemDetails = productsAllFromLocal.find((item) => item.id == productId);
itemDetailsDom.innerHTML = `
<img src=${itemDetails.image} alt="" />
<p class="size">mediam</p>
<p class="price">${itemDetails.price}$</p>

`;
// let menuBar = document.querySelector(".fa-bars");
// menuBar.addEventListener("click", openMenu);
let dropMenu = document.querySelector("ul.userInfo");
function openMenu() {
  if (dropMenu.innerHTML !== "") {
    if (dropMenu.style.opacity == 0) {
      dropMenu.style.opacity = 1;
      dropMenu.style.transition = "0.6s"
    //   console.log("flex");
    } else {
      dropMenu.style.opacity = 0;
    //   console.log("none");
    }
  }
}