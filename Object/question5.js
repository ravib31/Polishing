const ravi={
    name:"Ravi",
    age:24,
    developer:true

}

const data = JSON.stringify(ravi,["age","developer"]);/* if we pass the perticular key in an array like this then it will only stringify the given value in an array*/

console.log(data);
