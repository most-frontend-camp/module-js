function basicCalculator(a, operation, b) {
if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === 'x') return null;
  if (operation === '/') return b ===0 ? null : a/b;
//   if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
}

console.log(basicCalculator(2, '+', 4)) // 6
console.log(basicCalculator(6, '-', 5)) // 1
console.log(basicCalculator(12, '/', 3)) // 4
console.log(basicCalculator(3, '*', 4)) // 12
console.log(basicCalculator(1, '/', 0)) // null
// Division by zero is not possible
console.log(basicCalculator(1, 'x', 0)) // null
// 'x' is not an operator
