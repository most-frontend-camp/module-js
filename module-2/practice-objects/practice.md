## Example:

### 1

Create an empty object `user`.
Add the property `name` with the value `John`.
Add the property `surname` with the value `Smith`.
Change the value of the `name` to `Pete`.
Remove the property `name` from the `object`.

```js
console.log(user); // { surname: "Smith" }
```


```js
user = {}
user["name"] = "John"
user["surname"] = "Smith"

user["name"] = "Pete"
delete user["name"]
```

### 2

Check for emptiness.

```js
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
```
Solutions is below
```js
function isEmpty(obj) {
  // Check if Object.keys returns an empty array for the object
  return Object.keys(obj).length === 0;
}
```

### 3

Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of
the box.

```js
console.log(volumeOfBox({width: 2, length: 5, height: 1})) // 10

console.log(volumeOfBox({width: 4, length: 2, height: 2})) // 16

console.log(volumeOfBox({width: 2, length: 3, height: 5})) // 30
```

Solution
```js
function volumeOfBox(sizes) {
// Check if all required properties exist
  if (!sizes || !sizes.width || !sizes.length || !sizes.height) {
    throw new Error("Missing required properties in sizes object.");
  }
  
  // Destructuring assignment for cleaner access to properties
  const { width, length, height } = sizes;
  // Calculate volume using formula
  return width * length * height;
}```

### 4

Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation
of that person to Luke.

| Person      | Relation       |
|-------------|----------------|
| Darth Vader | father         |
| Leia        | sister         |
| Han         | brother in law |
| R2D2        | droid          |

```js
console.log(relationToLuke("Darth Vader")) // "Luke, I am your father."

console.log(relationToLuke("Leia")) // "Luke, I am your sister."

console.log(relationToLuke("Han")) // "Luke, I am your brother in law."
```

Solution
```js
const relations = {
  "Darth Vader": "father",
  "Leia": "sister",
  "Han": "brother in law",
  "R2D2": "droid"
};

function relationToLuke(name) {
  """
  This function takes a name as input and returns a personalized message for Luke.

  Args:
      name: The name of the person (string).

  Returns:
      A personalized message for Luke about his relation to the person (string).
  """
  const relation = relations.get(name.toLowerCase(), "unknown") // Get relation with case-insensitive matching
  if (relation === "unknown") {
      return f"Luke, I don't know you."
  } else {
      return f"Luke, I am your {relation}."
  }
}
```

### 5

Sum object properties.

```js
console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480
```
```js
function sumValues(obj) {
  let sum = 0;
  // Loop through each property in the object
  for (const key in obj) {
    // Check if the property is directly on the object (not inherited)
    if (obj.hasOwnProperty(key)) {
      // Add the value of the property to the sum
      sum += obj[key];
    }
  }
  return sum;
}
```

### 6

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of obj by `2`.

```js
// before the call
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

multiplyNumeric(menu);

// after the call
console.log(menu);
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
```

Solution
```js
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
```
### 7

Given a number and an object with `min` and `max` properties, return `true` if the number lies within the given range (
inclusive).

```js
console.log(isInRange(4, {min: 0, max: 5})) // true

console.log(isInRange(4, {min: 4, max: 5})) // true

console.log(isInRange(4, {min: 6, max: 10})) // false

console.log(isInRange(5, {min: 5, max: 5})) // true
```

```js
function isInRange(number, range) {
  return range && number >= range.min && number <= range.max;
}
```

### 8

Merge the price lists and return with higher priority for first one. Return first object __not shallow copy__.

```js
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeInPlace(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // true
```

Solution
```js
function mergeInPlaceSimple(list1, ...otherLists) {
  for (const otherList of otherLists) {
    Object.assign(list1, ...otherLists.filter(list => list !== list1));
  }
}
```
### 9

Merge the price lists and return with higher priority for first one. Return first object __shallow copy__.

```js
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeCopy(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // false
```

```js
function mergeCopy(list1, ...otherLists) {
  // Create a shallow copy of list1 using the spread operator (...)
  const mergedList = { ...list1 };
  
  // Loop through other price lists
  for (const otherList of otherLists) {
    // For each item in the other list, add or update in mergedList if not present with higher price
    for (const [key, value] of Object.entries(otherList)) {
      mergedList[key] = mergedList.hasOwnProperty(key) ? Math.max(mergedList[key], value) : value;
    }
  }
  
  // Return the merged list (shallow copy)
  return mergedList;
}
```