function calculateTotal() {
  const inputElement = document.querySelector(".jsCostInput");
  let cost = +inputElement.value; /*When we will receive the value from HTML like this ,we will always got the string value so we have to convert in to the number using unary operator or Number*/
  //   console.log(typeof cost)
  if (cost < 40) {
    cost = cost + 10;
  } else {
    cost = cost;
  }
  document.querySelector('.jsTotalCost').innerHTML = `$${cost}`;
}

function handleCostKeyDown(event){
if(event.key==='Enter'){
    calculateTotal()
}
}