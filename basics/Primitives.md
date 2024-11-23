
# JavaScript Primitives Cheat Sheet

## 1. What Are Primitives?
Primitives are immutable data types in JavaScript. They include:
- **String**: Text data.
- **Number**: Numeric values (including `Infinity` and `NaN`).
- **BigInt**: Large integers beyond the `Number` type limit.
- **Boolean**: Logical values (`true` or `false`).
- **undefined**: A variable declared but not assigned a value.
- **null**: Explicitly represents "no value."
- **Symbol**: A unique and immutable value, often used as object property identifiers.

> **Note**: For beginners, understanding `Symbol` is less critical as it's used more in advanced JavaScript concepts.

> **Note**: `NaN` (Not-a-Number) is considered a special numeric value and is part of the **Number** type, not a separate primitive.

---

## 2. String

- **Definition**: Represents text.
- **Syntax**: Can use `'single'`, `"double"`, or `` backticks (template literals).

### Operators
- **`+`**: Concatenation (`"Hello " + "World"` → `"Hello World!"`).

### Properties
| Property    | Description                   | Example                           |
|-------------|-------------------------------|-----------------------------------|
| `.length`   | Returns the length of a string | `"Hello".length` → `5`           |

### Methods
| Method                   | Description                          | Return Value                | Example                                |
|--------------------------|--------------------------------------|-----------------------------|----------------------------------------|
| `.toLowerCase()`         | Converts to lowercase               | New string                  | `"Hello".toLowerCase()` → `"hello"`    |
| `.toUpperCase()`         | Converts to uppercase               | New string                  | `"Hello".toUpperCase()` → `"HELLO"`    |
| `.trim()`                | Removes whitespace from both ends   | New string                  | `"  hello  ".trim()` → `"hello"`       |
| `.split(separator)`      | Splits string into an array         | Array of substrings         | `"a,b,c".split(",")` → `["a", "b", "c"]` |

---

## 3. Number

- **Definition**: Represents numeric data, both integers and floating-point numbers.
- **Special Values**: `Infinity`, `-Infinity`, `NaN`.

### Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**` (exponentiation).

### Methods
| Method                   | Description                          | Return Value                | Example                                  |
|--------------------------|--------------------------------------|-----------------------------|------------------------------------------|
| `.toFixed(d)`            | Formats number to `d` decimal places | String                      | `(3.14159).toFixed(2)` → `"3.14"`        |
| `.toString([radix])`     | Converts number to string (optionally in a different numeral system) | String | `(42).toString(2)` → `"101010"` (binary) |
| `Number(value)`          | Converts value to a number           | Number                      | `Number("42")` → `42`                    |

> **Tip**: The `toString()` method can be used to change the numeral system by specifying the `radix` (e.g., base 2 for binary or base 16 for hexadecimal).

---

## 4. Boolean

- **Definition**: Logical type with values `true` or `false`.
- **Created By**:
  - **Comparison Operators**: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`.
  - **Logical Operators**: `&&`, `||`, `!`.

### Use Cases
- Control flow (`if`, `while`, `ternary operator`).
- Truthy and falsy evaluation.

---

## 5. undefined

- **Definition**: A variable that has been declared but not assigned a value.
- **Common Cases**:
  - Uninitialized variables: `let x; // undefined`.
  - Non-existent object properties: `obj.keyThatDoesNotExist // undefined`.

---

## 6. null

- **Definition**: Represents the intentional absence of any value.
- **Key Difference**: Unlike `undefined`, it must be explicitly assigned.

```javascript
let x = null; // Assigned null
```

---

## 7. NaN (Not-a-Number)

- **Definition**: A special numeric value that represents an invalid or unrepresentable number.
- **Type**: `Number` (despite the name, it is part of the `Number` primitive type).
- **Examples**:
  ```javascript
  Number("Hello"); // NaN
  0 / 0; // NaN
  ```

- **Key Notes**:
  - `NaN` is the only value in JavaScript that is **not equal to itself**:
    ```javascript
    console.log(NaN === NaN); // false
    ```
  - Use `isNaN()` to check for `NaN`:
    ```javascript
    console.log(isNaN(NaN)); // true
    ```

---

## 8. Symbol

- **Definition**: A unique and immutable primitive value often used as property keys for objects.
- **Use Cases**:
  - Avoid naming collisions in object properties.
  - Represent hidden or "private" properties of objects.

### Example:
```javascript
const uniqueId = Symbol("id");
const obj = {
  [uniqueId]: "This is a unique property",
};
console.log(obj[uniqueId]); // "This is a unique property"
```

---

## 9. Type Coercion
Primitives can be automatically or explicitly converted into other types.

### To Number
| Method            | Example                  | Result  |
|-------------------|--------------------------|---------|
| `Number(value)`   | `Number("42")`           | `42`    |
| Unary `+`         | `+"42"`                  | `42`    |
| `parseInt(value)` | `parseInt("42", 10)`     | `42`    |

### To String
| Method                | Example               | Result  |
|-----------------------|-----------------------|---------|
| `.toString()`         | `(42).toString()`     | `"42"`  |
| String Concatenation  | `42 + ""`             | `"42"`  |

---

## 10. Truthy and Falsy Values
- **Truthy**: Any value except the following falsy values.
- **Falsy Values**:
  - `false`
  - `0`, `-0`
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN`

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
```

---

### How to Use This Cheat Sheet:
- **Referencing types**: Look at the type sections (String, Number, etc.) for syntax and examples.
- **Operator quick-checks**: Use for common operations and conversions.
- **Debugging help**: Use `truthy/falsy` and `NaN` sections to troubleshoot logic.
