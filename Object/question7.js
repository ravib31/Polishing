// emplimentation of destrucring in the nested Object

let person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

const { address: { city} } = person;
console.log(city); /*New York */