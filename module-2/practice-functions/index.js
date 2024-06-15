function min(){
    if (arguments.length === 0) {
        return null;
    }

    let minValue = arguments[0]; // Initialize minValue with the first argument

    // Iterate through all arguments to find the minimum value
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        }
    }

    return minValue;
}


console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123