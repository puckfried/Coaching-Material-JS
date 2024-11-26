
# JavaScript Objects Cheat Sheet

---

## Table of Contents

- [What is an Object?](#what-is-an-object)
- [1. Creating an Object](#1-creating-an-object)
  - [Object Literal](#object-literal)
  - [Using `new Object()`](#using-new-object)
  - [Dynamic Key Creation](#dynamic-key-creation)
- [2. Accessing Properties](#2-accessing-properties)
  - [Dot Notation](#dot-notation)
  - [Bracket Notation](#bracket-notation)
- [3. Adding and Modifying Properties](#3-adding-and-modifying-properties)
- [4. Removing Properties](#4-removing-properties)
- [5. Iterating Over Objects](#5-iterating-over-objects)
  - [Using `for...in`](#using-forin)
  - [Using `Object.keys()`](#using-objectkeys)
  - [Using `Object.values()`](#using-objectvalues)
  - [Using `Object.entries()`](#using-objectentries)
- [6. Destructuring and Spread Operator](#6-destructuring-and-spread-operator)
  - [Destructuring](#destructuring)
  - [Spread Operator](#spread-operator)
- [7. Methods and Functions in Objects](#7-methods-and-functions-in-objects)
  - [Adding Methods](#adding-methods)
  - [Shorthand Syntax for Methods](#shorthand-syntax-for-methods)
- [8. Comparing Objects](#8-comparing-objects)
  - [Reference Comparison](#reference-comparison)
  - [Deep Comparison](#deep-comparison)
- [Quick Reference](#quick-reference)

---

## What is an Object?

- An object is a collection of key-value pairs (properties).
- Keys are strings (or symbols), and values can be of any data type.

### Example:
```javascript
const person = {
  name: "Max",
  age: 30,
  isStudent: false
};
```

---

## 1. Creating an Object

### Object Literal
The most common and simplest way to create an object:
```javascript
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023
};
```

### Using `new Object()`
```javascript
const car = new Object();
car.brand = "Tesla";
car.model = "Model 3";
car.year = 2023;
```

### Dynamic Key Creation
```javascript
const key = "color";
const car = {
  brand: "Tesla",
  [key]: "red" // Dynamically created key
};
```

---

## 2. Accessing Properties

### Dot Notation
```javascript
console.log(person.name); // "Max"
```

### Bracket Notation
```javascript
console.log(person["name"]); // "Max"
```

> **Note:** Use bracket notation for dynamic keys or invalid variable names.

---

## 3. Adding and Modifying Properties

### Adding New Properties
```javascript
person.hobby = "Cycling";
console.log(person);
// { name: "Max", age: 30, isStudent: false, hobby: "Cycling" }
```

### Modifying Existing Properties
```javascript
person.age = 31;
console.log(person.age); // 31
```

---

## 4. Removing Properties

### Using `delete`
```javascript
delete person.isStudent;
console.log(person);
// { name: "Max", age: 31, hobby: "Cycling" }
```

---

## 5. Iterating Over Objects

### Using `for...in`
Iterate over the keys of an object:
```javascript
for (let key in person) {
  console.log(key, person[key]);
}
// name Max
// age 31
// hobby Cycling
```

### Using `Object.keys()`
```javascript
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "hobby"]
```

### Using `Object.values()`
```javascript
const values = Object.values(person);
console.log(values); // ["Max", 31, "Cycling"]
```

### Using `Object.entries()`
```javascript
const entries = Object.entries(person);
console.log(entries);
// [["name", "Max"], ["age", 31], ["hobby", "Cycling"]]
```

---

## 6. Destructuring and Spread Operator

### Destructuring
Destructuring makes it easy to extract key-value pairs from an object.

#### Example: Destructuring
```javascript
const person = { name: "Max", age: 30, city: "Berlin" };
const { name, age } = person;

console.log(name); // "Max"
console.log(age);  // 30
```

#### Renaming Variables
```javascript
const { name: firstName, city: hometown } = person;
console.log(firstName); // "Max"
console.log(hometown);  // "Berlin"
```

#### Setting Default Values
```javascript
const { name, country = "Germany" } = person;
console.log(country); // "Germany"
```

### Spread Operator
The spread operator (`...`) is used to copy or merge objects.

#### Copying an Object
```javascript
const copiedPerson = { ...person };
console.log(copiedPerson);
// { name: "Max", age: 30, city: "Berlin" }
```

#### Merging Objects
```javascript
const additionalInfo = { hobby: "Cycling", country: "Germany" };
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);
// { name: "Max", age: 30, city: "Berlin", hobby: "Cycling", country: "Germany" }
```

---

## 7. Methods and Functions in Objects

### Adding Methods
Objects can include functions as values:
```javascript
const person = {
  name: "Max",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet(); // "Hello, my name is Max"
```

### Shorthand Syntax for Methods
```javascript
const person = {
  name: "Max",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};
```

---

## 8. Comparing Objects

### Reference Comparison
Objects are only equal if they reference the same memory location:
```javascript
const obj1 = { name: "Max" };
const obj2 = { name: "Max" };

console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj1); // true
```

### Deep Comparison (Manual or Libraries)
To deeply compare objects, use JSON or libraries:
```javascript
JSON.stringify(obj1) === JSON.stringify(obj2); // true
```

---

## Quick Reference

| **Operation**          | **Example**                              | **Description**                       |
|-------------------------|------------------------------------------|---------------------------------------|
| Access (Dot)            | `obj.key`                               | Access a property                    |
| Access (Bracket)        | `obj["key"]`                            | Access with dynamic keys             |
| Add Property            | `obj.newKey = value`                    | Adds a new property                  |
| Modify Property         | `obj.key = newValue`                    | Changes a property value             |
| Remove Property         | `delete obj.key`                        | Removes a property                   |
| Iterate (Keys)          | `Object.keys(obj)`                      | Returns an array of keys             |
| Iterate (Values)        | `Object.values(obj)`                    | Returns an array of values           |
| Iterate (Entries)       | `Object.entries(obj)`                   | Returns key-value pairs as an array  |
| Copy Object             | `{ ...obj }`                            | Creates a shallow copy of the object |
| Merge Objects           | `{ ...obj1, ...obj2 }`                  | Combines two objects                 |
| Destructuring           | `const { key } = obj`                   | Extracts values from an object       |

---
