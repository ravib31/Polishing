const user = {
    name: 'John',
    age: 30,
   

}

const addAdmin = { isAdmin: true,...user};
console.log(addAdmin); /*{ isAdmin: true, name: 'John', age: 30 }*/