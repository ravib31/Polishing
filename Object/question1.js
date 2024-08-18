// Question - create a function multiplyByTwo(obj) that multiplies all numeric properties of obj by 2.

let ravi={
    age: 30,
    height: 5.6,
    dark: true
}

multiplyByTwo(ravi);
function multiplyByTwo(obj){
    for(let key in obj){
        if(typeof obj[key]==='number'){
            obj[key]*=2;
        }
    }
}
console.log(ravi);