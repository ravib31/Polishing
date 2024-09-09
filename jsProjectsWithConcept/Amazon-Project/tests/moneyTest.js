import { formatCurrency } from "../scripts/utils/money.js";



console.log("convert cents into dollars")
if(formatCurrency(2095)==='20.95'){
    console.log('Passed');
}else{
    console.log('Failed');
}

console.log("works with 0");
if(formatCurrency(0)==='0.00'){
    console.log('Passed');
}else{
    console.log('Failed');
}
