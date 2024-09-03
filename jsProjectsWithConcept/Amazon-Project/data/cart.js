export let cart =[
    {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
    },
    {
        productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity:2,
    },
   
];

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
  }