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

const obj1=person
console.log(obj1===person)