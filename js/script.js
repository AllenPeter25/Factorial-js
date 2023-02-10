function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

const n = Number(prompt("Enter a Number",''))
let fact = factorial(n)
console.log(`Factorial of ${n} is ${fact}`);