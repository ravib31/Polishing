import { loadCart } from "../data/cart.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js'


async function loadPage(){
    try {
        // throw 'Error1'

        await loadProductsFetch()
        const value = await new Promise((resolve,reject)=>{
            loadCart(()=>{
                // reject('Error3')
                resolve();
            });
        })
        
    } catch (error) {
        console.log('error found please try again later');
    }
   
   
    renderOrderSummary();
    renderPaymentSummary();
    
}
loadPage()

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/


// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//     });

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     });

// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
