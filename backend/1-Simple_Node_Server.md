
# **Introduction: Core Components of a Simple Node.js Server**

This document introduces the fundamental building blocks of a basic web server using Node.js and Express. 
---

## **Code Overview**

Here is the code for a simple server, within [exercises](../exercises/explainServer/) you find the related files:

```javascript
import express from "express";
import bodyParser from "body-parser"; // Import BodyParser

const app = express(); // Create a server instance

app.use(bodyParser.json()); // Middleware to process JSON data

// GET endpoint
app.get("/", (req, res) => {
  res.send("Hi");
});

// POST endpoint
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Ok");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
```

---

## **Core Components of a Simple Server**

### **1. Importing Modules**
```javascript
import express from "express";
import bodyParser from "body-parser";
```
- **Express**: A framework that simplifies building web servers.
- **BodyParser**: Middleware that helps process the body of HTTP requests (e.g., JSON data).

---

### **2. Creating a Server Instance**
```javascript
const app = express();
```
- `app` represents the server instance, where routes and middleware are registered.

---

### **3. Adding Middleware**
```javascript
app.use(bodyParser.json());
```
- **Middleware**: Functions applied to HTTP requests before they reach endpoints.
- **`bodyParser.json()`**: Parses the request body as JSON.

---

### **4. Defining Endpoints**
#### **GET Endpoint**
```javascript
app.get("/", (req, res) => {
  res.send("Hi");
});
```
- **GET**: Triggered when the client makes a request to `/`.
- **`req`**: The request object containing details about the client's request.
- **`res`**: The response object used to send data back to the client.

#### **POST Endpoint**
```javascript
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Ok");
});
```
- **POST**: Used to send data to the server (e.g., login data).
- **`req.body`**: Contains the data sent in the HTTP body.

---

### **5. Starting the Server**
```javascript
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
```
- **`app.listen(port, callback)`**: Starts the server and specifies the port (3000) to listen for requests.
- **Callback**: Optional; in this case, logs that the server is running.

---

## **Summary of Core Components**
- **Modules**: Tools and libraries that add functionality.
- **Server Instance**: The central piece of server logic.
- **Middleware**: Additional logic to manipulate requests and responses.
- **Endpoints**: Routes where the server handles requests.
- **Starting the Server**: The step where the server goes live.

---

This document can serve as an entry point and could be extended with practical exercises such as:
1. Adding a new endpoint.
2. Manipulating request and response objects.
3. Integrating additional middleware.

---

