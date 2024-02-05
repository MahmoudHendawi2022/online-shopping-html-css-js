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
