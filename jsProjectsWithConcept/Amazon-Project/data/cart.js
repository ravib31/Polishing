export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart || cart.length === 0) {
  document.getElementById("cartMessage").innerText = "Your cart is empty.";
}

function saveToStorage(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        // item.quantity++;
        // console.log(cart);
        // return;
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
    saveToStorage();
    console.log(cart);
  }
  

  export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
    // console.log(newCart);
    cart = newCart;
    saveToStorage();
  }