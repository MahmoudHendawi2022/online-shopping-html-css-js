// let productsGetItems = JSON.parse(localStorage.getItem("productsAll"));
// console.log(productsGetItems);
// const cards = document.querySelector(".cards");

// // show allProducts
// if (productsGetItems) {
//   allProducts(productsGetItems);
// }
// function allProducts(products) {
//   const cards = document.querySelector(".cards");
//   cards.innerHTML = "";
//   products.forEach((product) => {
//     cards.innerHTML += `
//         <div class="card">
//         <i class="favorite-icon fas fa-heart" style = " color : ${
//           product.liked === true ? "red" : ""
//         }"  onclick = 'addToFavorite(${product.id})'></i>
//         <div class="card-img">
//           <img src=${product.image} alt="" />
//         </div>
//         <div class="card-content">
//           <a onclick = "itemDetailsId(${product.id})" class="card-title">${
//       product.name
//     }</a>
//           <div class="card-price">$${product.price}</div>
//           <div class="card-category">${product.category}</div>
//           <button class='add-to-cart-button' onclick = 'addToCart(${
//             product.id
//           })'>Add to Cart</button>
         
//         </div>
        
//         </div>
//         `;
//   });
// }
// // get itemDetailsId
// function itemDetailsId(id) {
//   localStorage.setItem("productId", id);
//   window.location = "../cartDetails.html";
// }
// // search by name and category
// function searchByNameAndCategory() {
//   var searchDropdown = document.querySelector(".search-dropdown");
//   var searchInput = document.querySelector(".search-input");
//   searchInput.addEventListener("keyup", (e) => {
//     console.log(e.target);
//     var searchTerm = searchInput.value.toLowerCase();
//     var selectedOption = searchDropdown.value.toLowerCase();

//     const filteredItem = productsGetItems.filter((item) => {
//       if (selectedOption === "name") {
//         return item.name.toLowerCase().includes(searchTerm);
//       } else if (selectedOption === "category") {
//         return item.category.toLowerCase().includes(searchTerm);
//       }
//     });
//     allProducts(filteredItem);
//   });
// }
// searchByNameAndCategory();

// // add to cart function
// let cart = localStorage.getItem("productsSelected")
//   ? JSON.parse(localStorage.getItem("productsSelected"))
//   : [];
// let total = 0;
// function addToCart(id) {
//   let cartContainerProducts = document.querySelector(".cartContainerProducts");
//   let cartNumber = document.querySelector(".cartNumber");
//   let choosenItem = productsGetItems.find((item) => item.id === id);
//   console.log(choosenItem);
//   if (choosenItem) {
//     const existingCartItem = cart.find((item) => item.id === id);
//     if (existingCartItem) {
//       existingCartItem.quantity++;
//     } else {
//       cart.push(choosenItem); // cart = [...cart, choosenItem]
//     }
//     cartNumber.style.display = "block";
//     cartNumber.innerHTML = cart.length;
//     localStorage.setItem("productsSelected", JSON.stringify(cart)); //localStorage
//     localStorage.setItem("cartLength", cart.length);
//     cartContainerProducts.innerHTML = "";
//     cart.forEach((product) => {
//       cartContainerProducts.innerHTML += `<div class="itemContainer">
//       <span class="item-title">${product.name}</span>
//       <div class="quantity-controls">
//         <button class="quantity-btn"  onclick = "increaseQuantity(${product.quantity})">+</button>
//         <span class="quantity" id="quantity">${product.quantity}</span>
//         <button class="quantity-btn" onclick = "decreaseQuantity(${product.quantity})">-</button>
//       </div>
//   </div>`;
//     });
//   }
// }

// // add to favorite
// let addFavoriteCart = localStorage.getItem("favoriteItems")
//   ? JSON.parse(localStorage.getItem("favoriteItems"))
//   : [];
// // console.log(addFavoriteCart);
// function addToFavorite(id) {
//   let choosenItem = productsGetItems.find((item) => item.id === id);
//   if (choosenItem) {
//     const existingCartItem = addFavoriteCart.find((item) => item.id === id);
//     productsGetItems.map((product) => {
//       if (product.id === choosenItem.id) {
//         if (existingCartItem) {
//           let arrayAfterFav = addFavoriteCart.filter(
//             (item) => item.id !== existingCartItem.id
//           );
//           choosenItem.liked = false;
//           product.liked = false;
//           addFavoriteCart = arrayAfterFav;
//           localStorage.setItem(
//             "favoriteItems",
//             JSON.stringify(addFavoriteCart)
//           ); //localStorage favorite
//           //////////////////////////////////////
//           localStorage.setItem("productsAll", JSON.stringify(productsGetItems)); //localStorage all after fav
//           allProducts(productsGetItems);
//         } else {
//           product.liked = true;
//           choosenItem.liked = true;

//           addFavoriteCart = [...addFavoriteCart, choosenItem]; // cart = [...cart, choosenItem]
//           localStorage.setItem(
//             "favoriteItems",
//             JSON.stringify(addFavoriteCart)
//           ); //localStorage
//           //////////////////////////////////
//           localStorage.setItem("productsAll", JSON.stringify(productsGetItems)); //localStorage all after fav
//           allProducts(productsGetItems);
//         }
//       }
//     });
//   }


// }

// // save cartLength
// (function saveDataCartLength() {
//   let cartNumber = document.querySelector(".cartNumber");
//   cartNumber.style.display = "block";
//   let cartLengthFromLocal = JSON.parse(
//     localStorage.getItem("productsSelected")
//   );
//   cartNumber.innerHTML = cartLengthFromLocal.length;
// })();

// // save cartSelected
// function saveCartSelected() {
//   let addedProductFromLocal = JSON.parse(
//     localStorage.getItem("productsSelected")
//   );
//   let cartContainerProducts = document.querySelector(".cartContainerProducts");
//   addedProductFromLocal.forEach((product) => {
//     cartContainerProducts.innerHTML += `<div class="itemContainer">
//     <span class="item-title">${product.name}</span>
//     <div class="quantity-controls">
//       <button class="quantity-btn" onclick = "increaseQuantity(${product.quantity})">+</button>
//       <span class="quantity" id="quantity">${product.quantity}</span>
//       <button class="quantity-btn" onclick = "decreaseQuantity(${product.quantity})">-</button>
//     </div>
//     </div>`;
//   });
// }
// saveCartSelected();

// // logout code
// function logout() {
//   let logoutBtn = document.querySelector(".logout");
//   logoutBtn.addEventListener("click", () => {
//     localStorage.clear();
//     setTimeout(() => {
//       window.location = "../index.html";
//     }, 1500);
//   });
//   console.log(12);
// }
// logout();

// // cart onclick = opencart
// let faCartShopping = document.querySelector(".cartIcon");
// let cartContainer = document.querySelector(".cartContainer");
// let cartContainerProducts = document.querySelector(".cartContainerProducts");
// faCartShopping.addEventListener("click", opencart);
// function opencart() {
//   if (cartContainerProducts != "") {
//     if (cartContainer.style.display == "block") {
//       cartContainer.style.display = "none";
//     } else {
//       cartContainer.style.display = "block";
//     }
//   }
// }

// // username in home page
// let usernameLocalStorageValue = localStorage.getItem("username");
// let productUser = document.querySelector(".productUser");
// productUser.innerHTML = `Hi ${usernameLocalStorageValue}`;

// // let viewAllProducts = document.querySelector(".viewProduct");
// // let quantity = document.getElementById("quantity");
// // // let quantityBtn = document.querySelector(".quantity-btn");

// // increaseQuantity()

// // function decreaseQuantity(){
// //   let quantityValue = +quantity.textContent;
// // if(quantityValue > 1){
// //   quantity.textContent = quantityValue - 1;
// // }
// // }
// // decreaseQuantity()

// // /////////////////////////////////////////////////////////////
