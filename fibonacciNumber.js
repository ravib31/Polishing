// in the fibonacci series the number should be the sum of the previous two number;


// 1-Normal solution
var fib = function(n){
    const arr = [0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
fib(4);

// 2-Using recursion
// var fib = function (n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(4));