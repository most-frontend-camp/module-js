function sum(n){
    if (n === 1) {
        return 1;
    }
    return 1 + sum(n-1)
}

function factorial(n){
    if(n === 1) {
        return 1;
    }    
    if(n === 2) {
        return 2;
    } 
    return n*factorial(n-1)
}


console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78