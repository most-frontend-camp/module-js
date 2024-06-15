
## Example:

### 1

Create a function that takes the age in years and returns the age in days. Use __365 days__ as the length of a year for
this challenge.

```js
console.log(calcAge(65)) // 23725

console.log(calcAge(0)) // 0

console.log(calcAge(20)) // 7300

function calcAge(year) {
    return year*365;
}
```

### 2

Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

    A is misinterpreted as 4
    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

```js
console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"

// solution
function keyboardMistakes(string) {
    let errors = {'4':'A', '5': 'S','0':'O', '1': 'I'};
    for (const char in string) {
        if(char in errors){
            string = string.replace(char, errors[char])
        }
    }
    return string;
}

// solution 2 
function keyboardMistakes(string) {
    let string2 = '';
    for (const char of string) {
        if(char === '5') {
            string2 += 'S'
        } else if (char === '4') {
            string2 += 'A'
        } else if (char === '0') {
            string2 += 'O'
        } else if (char === '1') {
            string2 += 'I'
        } else {
            string2 += char;
        }
    }
    return string2;
}
```

### 3

Create a function that calculates two numbers.

```js
console.log(basicCalculator(2, '+', 4)) // 6

console.log(basicCalculator(6, '-', 5)) // 1

console.log(basicCalculator(12, '/', 3)) // 4

console.log(basicCalculator(3, '*', 4)) // 12

console.log(basicCalculator(1, '/', 0)) // null
// Division by zero is not possible

console.log(basicCalculator(1, 'x', 0)) // null
// 'x' is not an operator

// solution1
function basicCalculator(a, operation, b) {
if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === 'x') return null;
  if (operation === '/') return b ===0 ? null : a/b;
//   if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
}


```

### 4

Create a function that returns the number of arguments it was called with.

```js
console.log(numArgs()) // 0

console.log(numArgs("foo")) // 1

console.log(numArgs("foo", "bar")) // 2

console.log(numArgs(true, false)) // 2

console.log(numArgs({})) // 1

// solution 1
function numArgs(...args){
    return args.length
}

// solution 2, without length property
function numArgs() {
    let count = 0;
    while (arguments[count] !== undefined) {
        count++;
    }
    return count;
}

```

### 5

Find min number from arguments of a function.

```js
console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123

// solution 1
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
```

### 6

Write chat function where if user says nothing should send smile.

```js
console.log(showMessage('Ann', 'Hello!')) // Ann: Hello!

console.log(showMessage('Ann')) // Ann: 😀

// solution 
function showMessage(user, msg = '😀') {
    return `${user}: ${msg}`;
}

```

### 7

Write calculator with operations.

```js
console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4

// solution
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
```

### 8

Write filter functions for an array with a predicate function

```js
console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]

// solution
function filter(array, predicate){
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
/* 
The filter function takes an array (arr) and a predicate function (predicate).
It iterates through each element of the array (arr), applies the predicate function to each element, and collects elements for which the predicate returns true into the filteredArray.
Finally, it returns filteredArray which contains only the elements that satisfy the predicate.
*/
```

### 9

Write a function that finds the sum of the first n natural numbers. Make your function recursive.

```js
console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78

// simple loop
function sum(target){
    let sum = 0;
    for(let i = 1; i <= target; i++){
        sum += i;
    }
    return sum;
}
```