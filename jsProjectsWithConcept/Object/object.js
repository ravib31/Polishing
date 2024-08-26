// An  object groups multiple values together

const products={
    name:"laptop",
    price:1000,
    quantity:5,
    inStock:true,
}
// name,price quantity and inStock is property
console.log(products.price); /*1000*/
products.price=2000;
console.log(products.price);/*2000*/
delete products.inStock; /*it will delete the property inStock*/


const person={
    name:"John",
    age:30,
    city:"New York"
}
console.log(person["name"])

const obj1=person /*obj1 is a copy by reference of person object*/

console.log(obj1===person)


const person2={
    name:"Johnny",
    age:30,
    city:"New York"
}

const {name} = person2; /*this is called destructuring*/
console.log(name);


const person3={
    name:name,
    // name ,
    method :function ravi(){
        console.log("this is method")
    },
    // method() {
    //     console.log("this is method")
    // }
}

console.log(person3.name);
person3.method()