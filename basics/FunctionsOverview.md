
# JavaScript Function Types Cheat Sheet

## **1. Function Declaration**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### **Properties:**
- **Hoisting:** Fully hoisted to the top of the scope (can be called before its definition).
- **Naming:** Must always have a name.
- **`this`:** Dynamically bound, depending on how the function is called.

### **Pros and Cons:**
| Pros                                 | Cons                              |
|--------------------------------------|-----------------------------------|
| Clear and easy to read.              | Less flexible than expressions.  |
| Ideal for reusable functions.        | Cannot be used anonymously.      |
| Hoisting allows flexible placement.  |                                   |

### **Use Cases:**
- Reusable named functions.
- Larger or central functions in the code.

---

## **2. Function Expression**
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### **Properties:**
- **Hoisting:** None. Must be defined before use.
- **Naming:** Can be anonymous or named (for recursion or debugging).
- **`this`:** Dynamically bound, depending on the call.

### **Pros and Cons:**
| Pros                                 | Cons                              |
|--------------------------------------|-----------------------------------|
| Can be anonymous or named.           | No hoisting, less flexible.      |
| Great for closures and dynamic assignments. | Harder to debug if anonymous.    |

### **Use Cases:**
- Functions assigned to variables.
- Dynamically created functions.
- Callback functions.

---

## **3. Arrow Function**
```javascript
const greet = (name) => `Hello, ${name}!`;
```

### **Properties:**
- **Hoisting:** None. Must be defined before use.
- **Naming:** Always anonymous.
- **`this`:** Lexically bound (inherits the `this` from the outer context).
- **Syntax:** Shorter and more concise, especially for short functions.

### **Pros and Cons:**
| Pros                                 | Cons                              |
|--------------------------------------|-----------------------------------|
| Shorter and more readable syntax.    | No own `this`.                   |
| Ideal for callbacks and functional programming. | Not suitable for methods needing dynamic `this`. |
| Compact for simple operations.       | Cannot be called with `new`.     |

### **Use Cases:**
- Callbacks (e.g., in `map`, `filter`, `forEach`).
- Functions without their own `this` (e.g., in class methods or closures).
- Small and compact logic.

---

## **Comparison Table**

| Property             | Function Declaration          | Function Expression         | Arrow Function              |
|----------------------|-------------------------------|-----------------------------|-----------------------------|
| **Hoisting**         | Yes                           | No                          | No                          |
| **Naming**           | Required                     | Optional (anonymous or named) | Always anonymous           |
| **`this` Binding**   | Dynamic                       | Dynamic                     | Lexical (from outer scope)  |
| **Flexibility**      | For global and reusable functions | Dynamic and flexible assignments | Short syntax, no own `this` |
| **Syntax**           | Long and classic              | Medium                      | Short and modern            |
