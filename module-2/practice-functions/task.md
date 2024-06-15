
## Example:

### 1

Create a function that takes the age in years and returns the age in days. Use __365 days__ as the length of a year for
this challenge.

```js
console.log(calcAge(65)) // 23725

console.log(calcAge(0)) // 0

console.log(calcAge(20)) // 7300
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
```

### 4

Create a function that returns the number of arguments it was called with.

```js
console.log(numArgs()) // 0

console.log(numArgs("foo")) // 1

console.log(numArgs("foo", "bar")) // 2

console.log(numArgs(true, false)) // 2

console.log(numArgs({})) // 1
```

### 5

Find min number from arguments of a function.

```js
console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123
```

### 6

Write chat function where if user says nothing should send smile.

```js
console.log(showMessage('Ann', 'Hello!')) // Ann: Hello!

console.log(showMessage('Ann')) // Ann: 😀
```

### 7

Write calculator with operations.

```js
console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4
```

### 8

Write filter functions for an array with a predicate function

```js
console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]
```

### 9

Write a function that finds the sum of the first n natural numbers. Make your function recursive.

```js
console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78
```