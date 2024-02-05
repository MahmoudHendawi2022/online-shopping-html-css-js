let usernameLocalStorageValue = localStorage.getItem("username");
let productUser = document.querySelector(".productUser");
if (usernameLocalStorageValue) {
  productUser.innerHTML = ` <a href="index.html" >Hi ${usernameLocalStorageValue}</a>`;
}
let productsInProductsCardBox = document.querySelector(".box");
let noProductsDom = document.querySelector(".noProducts");
////////////////////////////////////////////////////////////////

function showCards(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsSelected")).length === 0) {
    noProductsDom.innerHTML = "There Is No Items";
  }

  let products =
    JSON.parse(localStorage.getItem("productsSelected")) || allProducts;
  let productUI = products
    .map((item) => {
      return `<div class="boxCardProduct">
         <div class="boxCardProductImage">
           <img src=${item.image} alt="" />
         </div>
         <div class="boxCardProductInfo">
           <p>product: ${item.name}</p>
           <p>category: ${item.category}</p>
           <p>price: ${item.price} $</p>
           <p>Description: ${item.desc} </p>
           <p>Size: ${item.size} </p>
           <div class="quantity-controls">
            
             <p class="quantity" id="quantity"> Quantity: ${item.quantity}</p>
             <button class="remove" onclick = "removeItemFromCart(${item.id})">Remove</button>
           </div>
         </div>
       </div>`;
    })
    .join("");
  console.log(productUI);
  productsInProductsCardBox.innerHTML = productUI;
}
showCards();

function removeItemFromCart(id) {
  let productInCart = localStorage.getItem("productsSelected");
  if (productInCart) {
    let items = JSON.parse(productInCart);
    let filterdArrayAfterRemove = items.filter((item) => item.id !== id);
    localStorage.setItem(
      "productsSelected",
      JSON.stringify(filterdArrayAfterRemove)
    );
    showCards(filterdArrayAfterRemove);
    console.log(filterdArrayAfterRemove);
  }
}
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
///////////////////////////////////////////////////////////////

// function updateCart(id) {
//   // let cartPrice = document.querySelector(".cartPrice");
//   // let total = 0;
//   let returnItem = productCardsLocal.find((item) => {
//     return item.id === id;
//   });
//   returnItem.remove();
//   ArrayNew.splice(returnItem.id, 1);

//   console.log(ArrayNew);

// for (let i = 0; i < productCardsLocal.length; i++) {
//   productCardsLocal.splice(returnItem.id, 1);
//   console.log(productCardsLocal.length);
//   total = total + productCardsLocal[i].price;
// }
// cartPrice.innerHTML = total;

///////////////////////////////////////////////////////////////

// let btnsRemove = document.querySelectorAll(".remove");
// for (let i = 0; i < btnsRemove.length; i++) {
//   var button = btnsRemove[i];
//   button.addEventListener("click", removeCard);
// }

// function removeCard(event) {
//   console.log(event);
//   let removeItem = event.target;
//   removeItem.parentElement.parentElement.parentElement.remove();
//   console.log(productsInProductsCardBox);
// }

///////////////////////////////////////////////////////////////

// function totalPrice() {
//   let cartPrice = document.querySelector(".cartPrice");
//   let total = localStorage.getItem("totalPrice");
//   if (productsInProductsCardBox.innerHTML === "") {
//     cartPrice.innerHTML = 0;
//   } else {
//     cartPrice.innerHTML = `${total} $`;
//   }
// }

// totalPrice();

// ///////////////////////////////////////////////////////
