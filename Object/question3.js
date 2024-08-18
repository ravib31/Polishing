// what is difference between JSON.parse and JSON.stringify

const user={
    name:"John",
    age:30,
    city:"New York"
}
const stringifiedUser=JSON.stringify(user);
// console.log(stringifiedUser);
localStorage.setItem("user",stringifiedUser);




console.log(JSON.parse(localStorage.getItem("user")));