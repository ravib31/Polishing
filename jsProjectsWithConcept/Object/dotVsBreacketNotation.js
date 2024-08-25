const person= {
     name:"Ravi",
     age: 21,
     developer: true,
     language:"JavaScript",
     location:"Azamgarh",
    
}
const bottle = "language"
// const res = person.bottle /* Dot notation only allows static keys(property names types directly ) thats why its gives us undefined as a output*/
const res = person[bottle] /* Bracket notation allows dynamic keys(property names evaluated from an expression during runtime ) this is reason its give us correct output*/
console.log(res)
person["loca" + "tion"] = "Lucknow"/* You can perform this only in bracket notation its check directly if location is already available its update the location value if value is not available it set the value*/
console.log(person)

console.log(person["birth-place"]) /* this is not give any error only give us undefine due to bracket notation if we use dot notation it will give an error  */