
# JavaScript Arrays Cheat Sheet

---

## Navigation

- [What is an Array?](#what-is-an-array)
- [1. Creating an Array](#1-creating-an-array)
- [2. Looping Through Arrays](#2-looping-through-arrays)
- [3. Basic Array Methods](#3-basic-array-methods)
  - [Adding Elements](#adding-elements)
  - [Removing Elements](#removing-elements)
  - [Finding Elements](#finding-elements)
  - [Getting a Subset](#getting-a-subset)
  - [Removing and Replacing Elements](#removing-and-replacing-elements)
  - [Conversion to String](#conversion-to-string)
  - [Sorting](#sorting)
- [4. Intermediate Methods](#4-intermediate-methods)
- [5. Advanced Methods](#5-advanced-methods)
- [Quick Reference for Methods and Return Values](#quick-reference-for-methods-and-return-values)

---

## **What is an Array?**
An array is a variable in JavaScript that can store multiple values. These values, called elements, are indexed starting from `0`.

---

## **1. Creating an Array**

### **Basic Creation**
- Using square brackets (preferred):
  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  ```

- Using the `Array` constructor:
  ```javascript
  let numbers = new Array(1, 2, 3);
  ```

---

### **Spread Operator**
The spread operator (`...`) allows you to copy or combine arrays.

- **Copying an array:**
  ```javascript
  let copiedFruits = [...fruits]; // ["apple", "banana", "cherry"]
  ```

- **Combining arrays:**
  ```javascript
  let moreFruits = ["orange", "pineapple"];
  let allFruits = [...fruits, ...moreFruits];
  // ["apple", "banana", "cherry", "orange", "pineapple"]
  ```

---

### **Destructuring**
Destructuring makes it easy to extract elements from an array.

- **Extracting values:**
  ```javascript
  let [firstFruit, secondFruit] = fruits;
  console.log(firstFruit); // "apple"
  console.log(secondFruit); // "banana"
  ```

---

## **2. Looping Through Arrays**
Looping allows you to process each element in an array.

### **For Loop**
```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### **For...of Loop**
```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

### **forEach() Method**
```javascript
fruits.forEach((fruit) => console.log(fruit));
```

---

## **3. Basic Array Methods**

### **Adding Elements**
- **`push()`**: Adds elements to the end.
  ```javascript
  let result = fruits.push("mango"); 
  // Returns: 4 (number, new length)
  // ["apple", "banana", "cherry", "mango"]
  ```

- **`unshift()`**: Adds elements to the beginning.
  ```javascript
  let result = fruits.unshift("strawberry"); 
  // Returns: 5 (number, new length)
  // ["strawberry", "apple", "banana", "cherry", "mango"]
  ```

---

### **Removing Elements**
- **`pop()`**: Removes the last element.
  ```javascript
  let removed = fruits.pop(); 
  // Returns: "mango" (string, removed element)
  // ["strawberry", "apple", "banana", "cherry"]
  ```

- **`shift()`**: Removes the first element.
  ```javascript
  let removed = fruits.shift(); 
  // Returns: "strawberry" (string, removed element)
  // ["apple", "banana", "cherry"]
  ```

---

### **Finding Elements**
- **`indexOf()`**: Finds the first index of a value or `-1` if not found.
  ```javascript
  let index = fruits.indexOf("cherry"); 
  // Returns: 2 (number, index)
  ```

- **`includes()`**: Checks if an element exists.
  ```javascript
  let exists = fruits.includes("banana"); 
  // Returns: true (boolean, existence check)
  ```

---

### **Getting a Subset**
- **`slice()`**: Creates a shallow copy of part of an array.
  ```javascript
  let subset = fruits.slice(1, 3); 
  // Returns: ["banana", "cherry"] (array, subset)
  ```

---

### **Removing and Replacing Elements**
- **`splice()`**: Removes/replaces elements in an array.
  ```javascript
  let removed = fruits.splice(1, 1, "kiwi"); 
  // Removes: ["banana"] (array, removed elements)
  // New array: ["apple", "kiwi", "cherry"]
  ```

---

### **Conversion to String**
- **`join()`**: Converts the array into a string, separated by a given delimiter.
  ```javascript
  let fruitString = fruits.join(", "); 
  // Returns: "apple, kiwi, cherry" (string, converted array)
  ```

---

### **Sorting**
- **`sort()`**: Sorts elements alphabetically.
  ```javascript
  fruits.sort(); 
  // Returns: ["apple", "cherry", "kiwi"] (array, sorted elements)
  ```

> **Tip:** To sort arrays with custom logic (e.g., numbers), see the advanced methods section.

---

## **4. Intermediate Methods**

### **Transforming Arrays**
- **`map()`**: Creates a new array by transforming each element.
  ```javascript
  let lengths = fruits.map((fruit) => fruit.length); 
  // Returns: [5, 6, 5] (array, transformed values)
  ```

- **`filter()`**: Returns elements that pass a test.
  ```javascript
  let shortFruits = fruits.filter((fruit) => fruit.length <= 5); 
  // Returns: ["kiwi", "apple"] (array, filtered elements)
  ```

---

## **5. Advanced Methods**

### **Sorting with Custom Logic**
To sort arrays with specific logic, use a comparison function that returns:
- `-1` if the first value should come before the second.
- `1` if the first value should come after the second.
- `0` if the values are equal.

#### **Example: Sorting Numbers**
```javascript
let numbers = [10, 2, 5, 1];
numbers.sort((a, b) => {
  if (a < b) return -1; // a comes before b
  if (a > b) return 1;  // a comes after b
  return 0;             // a and b are equal
});
// Returns: [1, 2, 5, 10] (array, sorted numbers)
```

---

### **Reducing Arrays**
The `reduce()` method combines array elements into a single value by applying a function repeatedly.

#### **Example: Summing Numbers**
```javascript
let numbers = [10, 20, 30];
let total = numbers.reduce((sum, num) => sum + num, 0); 
// Returns: 60 (number, total sum)
```

#### **Example: Finding Maximum**
```javascript
let max = numbers.reduce((max, num) => (num > max ? num : max), -Infinity); 
// Returns: 30 (number, maximum value)
```

---

## **Quick Reference for Methods and Return Values**

| **Method**       | **Action**                       | **Return Value**                          |
|-------------------|----------------------------------|-------------------------------------------|
| `push()`         | Add to end                       | New length of array (number)              |
| `pop()`          | Remove from end                 | Removed element (same type as array)      |
| `unshift()`      | Add to start                    | New length of array (number)              |
| `shift()`        | Remove from start               | Removed element (same type as array)      |
| `indexOf()`      | Find index of value             | Index or `-1` (number)                    |
| `includes()`     | Check for value                 | `true` or `false` (boolean)               |
| `slice()`        | Get part of array               | Subset (array)                            |
| `splice()`       | Remove/replace elements         | Removed elements (array)                  |
| `join()`         | Convert array to string         | Converted array (string)                  |
| `sort()`         | Sort alphabetically             | Sorted array (array)                      |
| `map()`          | Transform elements              | New transformed array (array)             |
| `filter()`       | Filter elements                 | New filtered array (array)                |
| `reduce()`       | Combine into single value       | Single reduced value (varies, usually number)|

---
