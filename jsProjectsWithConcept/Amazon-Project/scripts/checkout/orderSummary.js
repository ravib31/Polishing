import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.2/dist/index.mjs";
import { deliveryOptions } from "../../data/deliveryOptions.js";

// console.log(dayjs());
// const today = dayjs();
// const deliveryDate = today.add(7, "days").format("dddd, MMMM, D");
// const deliveryDate1 = today.add(4, "days").format("dddd, MMMM, D");
// const deliveryDate2 = today.add(2, "days").format("dddd, MMMM, D");
// console.log(deliveryDate);

export function renderOrderSummary(){

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  const deliveryOptionId = cartItem.deliveryOptionId;
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  console.log(deliveryOption);

  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM, D");
  //  console.log(dateString);
  cartSummaryHTML += `
  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
               Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingProduct.name}
                </div>
                <div class="product-price">
                 $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                    matchingProduct.id
                  }">Delete</span>

                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
               ${deliveryOptionsHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
          `;
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today
      .add(deliveryOption.deliveryDays, "days")
      .format("dddd, MMMM, D");
    const priceString =
      deliveryOption.price === 0
        ? "FREE Shipping"
        : `$${formatCurrency(deliveryOption.price)} - Shipping`;
    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;


    html += `
       <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" 
         data-delivery-option-id="${deliveryOption.id}">
                  <input type="radio"
                  ${isChecked ? "checked" : ""} 
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                       ${deliveryDate}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString}
                    </div>
                  </div>
                </div>`;
  });
  return html;
}

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
// console.log(cartSummaryHTML);
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    // console.log('delete');
    const productId = link.dataset.productId;
    // console.log(productId);
    removeFromCart(productId);
    // console.log(cart);
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    // console.log(container);
    container.remove();
    renderOrderSummary();
  });
  
});

document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener("click", () => {
    const { productId, deliveryOptionId } = element.dataset;
    updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
  });
});
};