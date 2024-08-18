// 1- Shallow Copy
let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// From the above example, it is seen that when the name of newEmployee is modified, it is also reflected for the old employee object. This can cause data inconsistency. This is known as a shallow copy. The newly created object has the same memory address as the old one. Hence, any change made to either of them changes the attributes for both. To overcome this problem, a deep copy is used. If one of them is removed from memory, the other one ceases to exist. In a way the two objects are interdependent.


// 2-Deep Copy
let employee2 = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee2));
console.log("Employee=> ", employee2);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee2);
console.log("New Employee=> ", newEmployee);


// Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected. Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.