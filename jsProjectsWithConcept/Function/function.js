// function is let us to reuse the code
// inside the curly brackets is called the body of the function
// return = gets a value back from the function
// parameters = are the values that are passed into the function

// function ravi(a,b){
//     console.log(a+b);

// }
// ravi(3,7);

function calculateText(text) {
  console.log(text.length);
}
calculateText("ravi");

// we can provide a default value to the parameter if we will not provide the value of parameter at the time of function call, it will take the default value as a parameter
function calculateText(text="vishal") {
  console.log(text.length);
}
calculateText();

