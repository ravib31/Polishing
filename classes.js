/* A class is a logical inteties its a ES6 concept its provide a more structured and cleaner way to work with objects*/

// class Student{
//     setDetails(sid,sname,grade){
//         this.sid=sid;
//         this.sname=sname;
//         this.grade=grade;
//     }
//     display(){
//         console.log(this.sid,this.sname,this.grade);
//     }
// }

// let stu = new Student();
// stu.setDetails(12,"ravi","A");
// stu.display();



/* using constructor */

class Student{
    constructor(sid,sname,grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }
    display(){
        console.log(this.sid,this.sname,this.grade);
    }
}

let stu = new Student(12,"ravi","A");
stu.display();


/*we can create any number of object for any class,object is independent from class and every object has its individual memory*/

let stu1 = new Student(13, "kumar", "B");
stu1.display();
let stu2 = new Student(14, "raju", "C");
stu2.display();
let stu3 = new Student(15, "suresh", "D");
stu3.display();