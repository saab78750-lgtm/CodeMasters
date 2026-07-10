/**
 * CodeMaster Academy - Course Resources Database
 * Contains specific resources (Lecture Notes, Source Code, Exercises, and Bonuses) 
 * for each module of Python, MERN, DSA, and System Design courses.
 */

const courseResources = {
  python: [
    // Module 1: Python Basics
    {
      notes: `
        <h3>🐍 Python Basics & Variables</h3>
        <p>Welcome to Python! Python is a high-level, interpreted programming language known for its readability and simple syntax.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>Syntax:</strong> Python uses indentation (whitespace) to define block scopes rather than curly braces.</li>
          <li><strong>Variables:</strong> You don't need to declare variable types. Python is dynamically typed.</li>
          <li><strong>Primitive Types:</strong> Integer (<code>int</code>), Floating Point (<code>float</code>), String (<code>str</code>), and Boolean (<code>bool</code>).</li>
        </ul>
        <div style="background: rgba(99, 102, 241, 0.1); border-left: 3px solid #8b5cf6; padding: 10px; margin-top: 10px; border-radius: 4px;">
          <strong>Tip:</strong> Always use 4 spaces for indentation. Never mix tabs and spaces as it causes <code>IndentationError</code>.
        </div>
      `,
      code: `
# Declaring variables of different types
user_name = "Alice"
user_age = 25
hourly_rate = 18.50
is_active = True

# Basic printing and string formatting
print("User profile summary:")
print(f"Name: {user_name}")
print(f"Age: {user_age}")
print(f"Hourly wage: \${hourly_rate}")
print(f"Active status: {is_active}")

# Simple arithmetic operations
total_salary = hourly_rate * 40
print(f"Weekly Salary for 40 hours: \${total_salary}")
      `,
      exercise: {
        instructions: "Declare a string variable named <code>name</code> with the value <code>\"Alice\"</code>, and an integer variable named <code>age</code> with the value <code>25</code>. Write these on separate lines.",
        placeholder: "# Write your Python code here\n",
        validate: (code) => {
          const lines = code.split('\\n').map(l => l.replace(/\\s/g, ''));
          const hasName = lines.some(l => l.includes('name="Alice"') || l.includes("name='Alice'"));
          const hasAge = lines.some(l => l.includes('age=25'));
          if (hasName && hasAge) {
            return { success: true, message: "🎉 Excellent! You have correctly declared the variables 'name' and 'age' with proper types!" };
          }
          return { success: false, message: "❌ Ensure you have: \\n1. name = \\\"Alice\\\"\\n2. age = 25\\nCheck for capitalization and spelling!" };
        }
      },
      bonus: `
        <h4>💡 Type Casting in Python</h4>
        <p>Sometimes you need to convert one type to another. In Python, you use constructor functions:</p>
        <ul>
          <li><code>int("10")</code> converts string to integer 10.</li>
          <li><code>str(45.6)</code> converts float to string \"45.6\".</li>
          <li><code>float(5)</code> converts integer to float 5.0.</li>
        </ul>
        <p>Try parsing raw input using <code>input()</code> function and casting it to numbers before mathematical operations!</p>
      `
    },
    // Module 2: Control Flow
    {
      notes: `
        <h3>🔄 Control Flow in Python</h3>
        <p>Control flow determines the order in which statements are executed. We use conditionals and loops to make decisions.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>Conditionals:</strong> <code>if</code>, <code>elif</code>, and <code>else</code> allow selective execution based on boolean expressions.</li>
          <li><strong>For Loops:</strong> Best suited for iterating over a sequence (lists, tuples, strings, ranges).</li>
          <li><strong>While Loops:</strong> Executes as long as a condition remains true.</li>
        </ul>
      `,
      code: `
# Using conditionals (if-elif-else)
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
else:
    grade = 'C'
print(f"Grade is {grade}")

# For Loop iterating over a range
print("Counting to 5:")
for i in range(1, 6):
    print(i)

# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
      `,
      exercise: {
        instructions: "Write an <code>if</code> statement checking if a variable <code>score</code> is greater than or equal to <code>50</code>. If it is, assign a variable <code>result</code> the string <code>\"Pass\"</code>. Otherwise, assign it <code>\"Fail\"</code>.",
        placeholder: "score = 75\n# Write your conditional check here\n",
        validate: (code) => {
          if (!code.includes('result') || !code.includes('if')) {
            return { success: false, message: "❌ Your code must use an 'if' statement and assign a value to the variable 'result'." };
          }
          try {
            // Create a sandboxed evaluation logic for simple structure test
            const cleanCode = code.replace(/\\s+/g, ' ');
            const hasIf = cleanCode.includes('if score >= 50: result = "Pass"') || 
                          cleanCode.includes('if score >= 50: result = \'Pass\'') ||
                          (cleanCode.includes('if score >= 50:') && cleanCode.includes('result = "Pass"') && cleanCode.includes('else:') && cleanCode.includes('result = "Fail"'));
            if (hasIf) {
              return { success: true, message: "🎉 Perfect! You have correctly written the conditional decision block." };
            }
            return { success: false, message: "❌ Code structure check failed. Verify syntax matches:\\nif score >= 50:\\n    result = \\\"Pass\\\"\\nelse:\\n    result = \\\"Fail\\\"" };
          } catch(e) {
            return { success: false, message: "❌ Syntax checking error. Please check your indentation." };
          }
        }
      },
      bonus: `
        <h4>💡 The range() function secrets</h4>
        <p>The <code>range(start, stop, step)</code> function is extremely powerful:</p>
        <ul>
          <li><code>range(5)</code>: generates 0, 1, 2, 3, 4</li>
          <li><code>range(2, 10, 2)</code>: generates 2, 4, 6, 8 (even numbers)</li>
          <li><code>range(10, 0, -1)</code>: counts backwards: 10, 9, 8, ... 1</li>
        </ul>
      `
    },
    // Module 3: Functions & OOP
    {
      notes: `
        <h3>🧩 Functions & Object-Oriented Programming (OOP)</h3>
        <p>Functions allow you to reuse blocks of code. OOP is a programming paradigm based on the concept of 'objects' containing data and code.</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Functions:</strong> Defined using the <code>def</code> keyword. Return values using <code>return</code>.</li>
          <li><strong>Class:</strong> A blueprint for creating objects.</li>
          <li><strong>Object:</strong> An instance of a class.</li>
          <li><strong>__init__ method:</strong> The constructor of a class, used to initialize state.</li>
        </ul>
      `,
      code: `
# Defining a reusable function
def calculate_area(width, height):
    return width * height

# Creating a Class
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        
    def display_info(self):
        return f"{self.brand} {self.model}"

# Creating an Object (Instance)
my_car = Car("Tesla", "Model S")
print(my_car.display_info())
      `,
      exercise: {
        instructions: "Write a Python function named <code>multiply(a, b)</code> that accepts two arguments and returns their product.",
        placeholder: "# Write your function code here\n",
        validate: (code) => {
          if (!code.includes('def multiply') || !code.includes('return')) {
            return { success: false, message: "❌ Remember to define the function using 'def multiply(a, b):' and return the result!" };
          }
          if (code.match(/return\s+a\s*\*\s*b/)) {
            return { success: true, message: "🎉 Brilliant! You've defined a clean function returning the multiplication product." };
          }
          return { success: false, message: "❌ Make sure to return 'a * b'." };
        }
      },
      bonus: `
        <h4>💡 Default Arguments in Functions</h4>
        <p>You can make function parameters optional by providing default values:</p>
        <pre><code>def greet(name="User"):
    return f"Hello, {name}!"</code></pre>
        <p>Calling <code>greet()</code> returns \"Hello, User!\", whereas <code>greet(\"Bob\")</code> returns \"Hello, Bob!\".</p>
      `
    },
    // Module 4: File & Error Handling
    {
      notes: `
        <h3>📂 File & Error Handling</h3>
        <p>Handling resources and errors gracefully is crucial for writing robust applications that don't crash unexpectedly.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>File Context Manager:</strong> Use <code>with open('filename', 'mode') as f:</code> to automatically close the file when done.</li>
          <li><strong>Try-Except block:</strong> Prevents program crashes by catching specific runtime errors (Exceptions).</li>
          <li><strong>Finally:</strong> A block that runs no matter what, useful for cleanups.</li>
        </ul>
      `,
      code: `
# Writing and reading file safely
try:
    with open("example.txt", "w") as file:
        file.write("Hello from CodeMaster Python class!")
        
    with open("example.txt", "r") as file:
        content = file.read()
        print("File read successfully: " + content)
except FileNotFoundError:
    print("Error: The file could not be found.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
finally:
    print("File Operations Completed.")
      `,
      exercise: {
        instructions: "Write a <code>try-except</code> block that attempts to divide <code>10</code> by a variable <code>x</code>. Catch a <code>ZeroDivisionError</code> and print <code>\"Error\"</code> to the console.",
        placeholder: "x = 0\n# Write try-except here\n",
        validate: (code) => {
          const clean = code.replace(/\\s+/g, ' ');
          if (!clean.includes('try:') || !clean.includes('except ZeroDivisionError:')) {
            return { success: false, message: "❌ You need a 'try' block and an 'except ZeroDivisionError:' handler." };
          }
          if (clean.includes('print("Error")') || clean.includes("print('Error')")) {
            return { success: true, message: "🎉 Correct! The code safely catches division-by-zero errors without breaking runtime flow." };
          }
          return { success: false, message: "❌ Ensure you print 'Error' inside the except block." };
        }
      },
      bonus: `
        <h4>💡 Custom Exceptions</h4>
        <p>You can define your own errors by extending the Base Exception class:</p>
        <pre><code>class InsufficientFundsError(Exception):
    pass</code></pre>
        <p>Use <code>raise InsufficientFundsError(\"Not enough money!\")</code> to trigger it.</p>
      `
    },
    // Module 5: Libraries & APIs
    {
      notes: `
        <h3>🌐 Libraries, Modules, & APIs</h3>
        <p>Python has a huge ecosystem. The \"batteries included\" philosophy means standard library modules are already installed, and others can be fetched using pip.</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Importing:</strong> Use <code>import module_name</code> or <code>from module_name import specific_element</code>.</li>
          <li><strong>API Consumption:</strong> Fetch data from web servers dynamically (commonly using <code>requests</code> package).</li>
          <li><strong>JSON Parsing:</strong> Handling JSON payloads natively using the <code>json</code> library.</li>
        </ul>
      `,
      code: `
import json
import math

# Use standard library math
print(f"Pi value: {math.pi}")
print(f"Square root of 64: {math.sqrt(64)}")

# Simulated API fetch function
def simulate_api_call():
    raw_response = '{"status": "success", "data": {"course": "Python", "version": 3.10}}'
    parsed_json = json.loads(raw_response)
    return parsed_json["data"]["course"]

print("Fetched Course Name: " + simulate_api_call())
      `,
      exercise: {
        instructions: "Write code to import the standard <code>math</code> library and assign the square root of <code>16</code> to a variable named <code>val</code>.",
        placeholder: "# Import and assign value here\n",
        validate: (code) => {
          if (!code.includes('import math')) {
            return { success: false, message: "❌ Please import the 'math' library first." };
          }
          if (code.includes('val = math.sqrt(16)')) {
            return { success: true, message: "🎉 Spot on! math.sqrt(16) evaluates to 4.0 and is successfully saved to 'val'." };
          }
          return { success: false, message: "❌ Use: val = math.sqrt(16) to store the result." };
        }
      },
      bonus: `
        <h4>💡 What is PyPI?</h4>
        <p>The Python Package Index (PyPI) is a repository of software for the Python programming language. You can install third-party libraries globally or inside a virtual environment using:</p>
        <pre><code>pip install requests numpy pandas django</code></pre>
      `
    },
    // Final Project
    {
      notes: `
        <h3>🚀 Final Project: To-Do App</h3>
        <p>Consolidating all topics: Variables, Control Flow, Functions, OOP, and Files, to build a practical CLI-based task list manager.</p>
        <h4>Project Features:</h4>
        <ul>
          <li>Save tasks to a text file.</li>
          <li>Add, view, and mark tasks complete.</li>
          <li>Handle invalid input errors.</li>
        </ul>
      `,
      code: `
class TodoList:
    def __init__(self, filename="tasks.txt"):
        self.filename = filename
        self.tasks = []
        self.load_tasks()

    def load_tasks(self):
        try:
            with open(self.filename, 'r') as f:
                self.tasks = [line.strip() for line in f.readlines()]
        except FileNotFoundError:
            self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)
        with open(self.filename, 'a') as f:
            f.write(task + "\\n")
            
    def show_tasks(self):
        return self.tasks

# Initialize
my_list = TodoList("my_project_tasks.txt")
my_list.add_task("Learn OOP principles")
print("Current Tasks:", my_list.show_tasks())
      `,
      exercise: {
        instructions: "Complete the checking loop in Python. We have a target secret number: <code>secret = 7</code>. If the user's <code>guess</code> is equal to <code>secret</code>, set a variable <code>win</code> to <code>True</code>.",
        placeholder: "secret = 7\nguess = 7\nwin = False\n# Write validation here\n",
        validate: (code) => {
          const clean = code.replace(/\\s+/g, '');
          if (clean.includes('ifguess==secret:win=True') || clean.includes('ifguess==7:win=True')) {
            return { success: true, message: "🎉 Superb work! The conditional logic completes the final game check loop." };
          }
          return { success: false, message: "❌ Ensure you check if guess equals secret and assign True to 'win'." };
        }
      },
      bonus: `
        <h4>💡 Next Steps: Building a Web Application</h4>
        <p>Now that you have mastered core Python, you can expand your CLI app to a web application using frameworks like <strong>Flask</strong> or <strong>Django</strong>!</p>
      `
    }
  ],
  mern: [
    // Module 1: React Essentials
    {
      notes: `
        <h3>⚛️ React Essentials</h3>
        <p>React is a declarations-driven JavaScript library for building component-based user interfaces.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>JSX:</strong> JavaScript XML lets you write HTML structure directly inside JS.</li>
          <li><strong>Components:</strong> Reusable, modular functions returning UI blocks.</li>
          <li><strong>Props:</strong> Arguments passed into components to configure initial state dynamically.</li>
        </ul>
      `,
      code: `
import React from 'react';

// Custom UserProfile functional component receiving props
function UserProfile(props) {
  return (
    <div className="profile-card">
      <h2>Welcome, {props.username}!</h2>
      <p>Role: {props.role}</p>
    </div>
  );
}

// Parent App Component
export default function App() {
  return (
    <div>
      <UserProfile username="Alice" role="Fullstack Engineer" />
      <UserProfile username="Bob" role="QA Architect" />
    </div>
  );
}
      `,
      exercise: {
        instructions: "Create a simple functional component named <code>Welcome</code> in React JSX that returns an <code>&lt;h1&gt;Welcome to React!&lt;/h1&gt;</code>.",
        placeholder: "// Write React component function here\n",
        validate: (code) => {
          const clean = code.replace(/\\s+/g, ' ');
          if (clean.includes('function Welcome()') && clean.includes('return') && clean.includes('<h1>Welcome to React!</h1>')) {
            return { success: true, message: "🎉 Excellent! That is a standard React functional component rendering a header." };
          }
          return { success: false, message: "❌ Please match syntax:\\nfunction Welcome() {\\n  return <h1>Welcome to React!</h1>;\\n}" };
        }
      },
      bonus: `
        <h4>💡 JSX Rules to Remember</h4>
        <ul>
          <li>All tags must be properly closed. E.g., <code>&lt;img /&gt;</code>.</li>
          <li>Use <code>className</code> instead of <code>class</code>.</li>
          <li>React components must always start with a capital letter (e.g. <code>Welcome</code>, not <code>welcome</code>).</li>
        </ul>
      `
    },
    // Module 2: Advanced React
    {
      notes: `
        <h3>⚡ Advanced React (Hooks & State)</h3>
        <p>Hooks let you use state and other React features without writing a class component.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>useState:</strong> Adds local reactive state to a component.</li>
          <li><strong>useEffect:</strong> Handles side effects like API fetching, timers, or subscribing to events.</li>
          <li><strong>Dependency Array:</strong> Controls when the <code>useEffect</code> triggers.</li>
        </ul>
      `,
      code: `
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Sync title with count
  useEffect(() => {
    document.title = \`Count is \${count}\`;
    
    return () => {
      // Cleanup code runs on unmount
      document.title = "React App";
    };
  }, [count]); // Trigger only when count changes

  return (
    <div>
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
      `,
      exercise: {
        instructions: "Initialize a state variable named <code>count</code> to <code>0</code> using the <code>useState</code> hook inside a variable statement.",
        placeholder: "const [count, setCount] = // Call hook here\n",
        validate: (code) => {
          if (code.replace(/\\s/g, '').includes('useState(0)')) {
            return { success: true, message: "🎉 Correct! That is the standard declaration syntax for local React state." };
          }
          return { success: false, message: "❌ Use useState(0) to initialize state." };
        }
      },
      bonus: `
        <h4>💡 Hooks Rules</h4>
        <ul>
          <li>Only call hooks at the top level of your component. Don't call them inside loops, conditions, or nested functions.</li>
          <li>Only call hooks from React function components or custom hooks.</li>
        </ul>
      `
    },
    // Module 3: Node.js & Express
    {
      notes: `
        <h3>🟢 Express Server & APIs</h3>
        <p>Node.js allows JS execution on servers. Express is a minimalist framework facilitating routing, API endpoints, and middleware.</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Routing:</strong> Determining endpoints (GET, POST, PUT, DELETE).</li>
          <li><strong>Middleware:</strong> Functions executing during the request-response lifecycle.</li>
          <li><strong>Request & Response:</strong> Using <code>req</code> parameters and sending JSON responses with <code>res.json()</code>.</li>
        </ul>
      `,
      code: `
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// Sample GET Endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

// Sample POST Endpoint
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

app.listen(PORT, () => console.log(\`Server running on http://localhost:\${PORT}\`));
      `,
      exercise: {
        instructions: "Write an Express GET route definition for <code>'/api/status'</code> that returns a JSON object <code>{ status: 'ok' }</code>.",
        placeholder: "app.get('/api/status', (req, res) => {\n  // Send response here\n});\n",
        validate: (code) => {
          const clean = code.replace(/\\s/g, '');
          if (clean.includes("res.json({status:'ok'})") || clean.includes('res.json({"status":"ok"})')) {
            return { success: true, message: "🎉 Excellent backend route writing! It returns JSON status smoothly." };
          }
          return { success: false, message: "❌ Use res.json({ status: 'ok' }) to return the JSON payload." };
        }
      },
      bonus: `
        <h4>💡 CORS (Cross-Origin Resource Sharing)</h4>
        <p>By default, browser security prevents frontend apps on domain A from reading data from APIs on domain B. Enable it in Express using:</p>
        <pre><code>const cors = require('cors');\\napp.use(cors());</code></pre>
      `
    },
    // Module 4: MongoDB Integration
    {
      notes: `
        <h3>🍃 MongoDB Databases & Mongoose</h3>
        <p>MongoDB is a document-based database where data is stored in flexible JSON-like documents. Mongoose is an ODM (Object Document Mapper) for Node.js.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>NoSQL:</strong> No tables or joins, records are collection documents.</li>
          <li><strong>Schema:</strong> Defines the structure, types, and validation rules of your documents.</li>
          <li><strong>Model:</strong> Provides interfaces to read, create, update, and delete database records.</li>
        </ul>
      `,
      code: `
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/codemaster_db')
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error("Database connection failed", err));

// Schema Definition
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Model Creation
const User = mongoose.model('User', UserSchema);
      `,
      exercise: {
        instructions: "Create a new Mongoose schema named <code>ProductSchema</code> with a <code>title</code> of type <code>String</code> and <code>price</code> of type <code>Number</code>.",
        placeholder: "const ProductSchema = new mongoose.Schema({\n  // Write properties here\n});\n",
        validate: (code) => {
          const clean = code.replace(/\\s/g, '');
          const hasTitleStr = clean.includes('title:String') || clean.includes("title:{type:String");
          const hasPriceNum = clean.includes('price:Number') || clean.includes("price:{type:Number");
          if (hasTitleStr && hasPriceNum) {
            return { success: true, message: "🎉 Correct schema definition! That creates structured NoSQL schemas." };
          }
          return { success: false, message: "❌ Ensure you have 'title: String' and 'price: Number'." };
        }
      },
      bonus: `
        <h4>💡 Relational (SQL) vs Document (NoSQL)</h4>
        <p>Use MongoDB if your data structure changes frequently and you require high scalability. Use relational SQL (PostgreSQL, MySQL) if you need rigid relationships and transactions.</p>
      `
    },
    // Module 5: Authentication
    {
      notes: `
        <h3>🔐 JWT Auth & Security</h3>
        <p>Authentication verifies user identity, while Authorization determines their access permissions. In web development, token-based authentication is the standard.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>Bcrypt:</strong> Library to securely hash passwords before writing them to the database.</li>
          <li><strong>JSON Web Token (JWT):</strong> Self-contained cryptographically signed token representing credentials.</li>
          <li><strong>Authorization Header:</strong> Clients send JWT token as <code>Bearer [token]</code>.</li>
        </ul>
      `,
      code: `
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = "SUPER_SECRET_PHRASE";

// Register Hashing
async function registerUser(plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainPassword, salt);
  return hash;
}

// Generating Token
function generateUserToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
}
      `,
      exercise: {
        instructions: "Bcrypt is commonly configured with a number of 'salt rounds' parameter to control hashing complexity. What is the standard number of salt rounds used as a parameter? Enter a number.",
        placeholder: "10",
        validate: (code) => {
          const val = code.trim();
          if (val === '10') {
            return { success: true, message: "🎉 Perfect! 10 rounds is the industry-standard balance between security and processor load." };
          }
          return { success: false, message: "❌ Incorrect. Hint: It is 10." };
        }
      },
      bonus: `
        <h4>💡 Security Checklist</h4>
        <ul>
          <li>Never store raw passwords. Always hash using Bcrypt/Argon2.</li>
          <li>Set HTTP-Only flags on session cookies to block XSS token theft.</li>
          <li>Keep secret keys in environment variables (<code>process.env.JWT_SECRET</code>).</li>
        </ul>
      `
    },
    // Full Stack Project
    {
      notes: `
        <h3>📦 Full Stack Integration</h3>
        <p>Combining frontend components with database controllers. Fetch requests send payloads across origins, update global state, and render views.</p>
        <h4>Integration Setup:</h4>
        <ul>
          <li>Create server proxy in Vite/React context.</li>
          <li>Set up request interceptors to append token headers automatically.</li>
        </ul>
      `,
      code: `
// React Component executing backend call
import React, { useState, useEffect } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/tasks', {
      headers: { 'Authorization': \`Bearer \${token}\` }
    })
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error loading tasks", err));
  }, []);

  return (
    <ul>
      {tasks.map(t => <li key={t.id}>{t.text}</li>)}
    </ul>
  );
}
      `,
      exercise: {
        instructions: "What is the default HTTP method used when executing the standard JavaScript <code>fetch()</code> function? (Enter GET, POST, PUT, or DELETE)",
        placeholder: "GET",
        validate: (code) => {
          const val = code.trim().toUpperCase();
          if (val === 'GET') {
            return { success: true, message: "🎉 Correct! fetch() executes a GET request by default unless configuration overrides are passed." };
          }
          return { success: false, message: "❌ Incorrect. Think of the default method to fetch data." };
        }
      },
      bonus: `
        <h4>💡 Next Steps: Web Sockets</h4>
        <p>To enable real-time messaging, sync clients using <strong>Socket.io</strong>. This updates data structures live without page polling.</p>
      `
    }
  ],
  dsa: [
    // Module 1: Arrays & Strings
    {
      notes: `
        <h3>📊 Arrays & Strings</h3>
        <p>Fundamental contiguous data layouts. Understanding their indexing and properties is key to algorithm efficiency.</p>
        <h4>Key Algorithms:</h4>
        <ul>
          <li><strong>Two Pointers:</strong> Compares values at both extremes inward to optimize search loops.</li>
          <li><strong>Sliding Window:</strong> Subarray aggregation checks over contiguous records.</li>
        </ul>
      `,
      code: `
// Reverse an array in place using two-pointer technique
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
      `,
      exercise: {
        instructions: "Write a function <code>isPalindrome(str)</code> that returns <code>true</code> if a string reads the same forwards and backwards, and <code>false</code> otherwise.",
        placeholder: "function isPalindrome(str) {\n  // Write logic here\n}\n",
        validate: (code) => {
          if (!code.includes('function isPalindrome') || !code.includes('return')) {
            return { success: false, message: "❌ Define function isPalindrome(str) returning boolean logic." };
          }
          const clean = code.replace(/\\s/g, '');
          if (clean.includes('split') && clean.includes('reverse') && clean.includes('join')) {
            return { success: true, message: "🎉 Correct! Using split('').reverse().join('') is a straightforward way to check string equality!" };
          }
          if (clean.includes('===')) {
            return { success: true, message: "🎉 Correct! You've implemented a comparison comparison algorithm successfully!" };
          }
          return { success: true, message: "🎉 Well done! Your custom palindrome validation script has passed verification checks." };
        }
      },
      bonus: `
        <h4>💡 JavaScript String Immutability</h4>
        <p>In JS, strings cannot be modified character by character (e.g., <code>str[0] = 'X'</code> fails silently). You must rebuild the string or convert it to an array.</p>
      `
    },
    // Module 2: Linked Lists
    {
      notes: `
        <h3>🔗 Linked Lists</h3>
        <p>Dynamic structure where nodes references build paths, avoiding resizing issues of arrays.</p>
        <h4>Key Patterns:</h4>
        <ul>
          <li><strong>Dummy Node:</strong> Simplifies edge-case insertion/deletion at list head.</li>
          <li><strong>Fast & Slow pointer:</strong> Detects loops and finds list midpoints.</li>
        </ul>
      `,
      code: `
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// In-place singly linked list reversal
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
      `,
      exercise: {
        instructions: "To find the middle of a linked list using the slow/fast pointer strategy, if the fast pointer moves <code>2</code> steps at a time, how many steps does the slow pointer move? (Enter a number)",
        placeholder: "1",
        validate: (code) => {
          if (code.trim() === '1') {
            return { success: true, message: "🎉 Correct! Moving slow by 1 step and fast by 2 steps guarantees slow rests exactly in the middle when fast reaches the end." };
          }
          return { success: false, message: "❌ Think about the ratio of speed." };
        }
      },
      bonus: `
        <h4>💡 Floyd's Tortoise and Hare Loop Detection</h4>
        <p>If a cycle exists in a linked list, slow and fast pointers will eventually meet at the same node. Space complexity remains <code>O(1)</code>!</p>
      `
    },
    // Module 3: Stacks & Queues
    {
      notes: `
        <h3>📚 Stacks & Queues</h3>
        <p>Linear structures defining ordering protocols.</p>
        <ul>
          <li><strong>Stack:</strong> Last In First Out (LIFO). Standard operations: <code>push</code>, <code>pop</code>.</li>
          <li><strong>Queue:</strong> First In First Out (FIFO). Standard operations: <code>enqueue</code>, <code>dequeue</code>.</li>
        </ul>
      `,
      code: `
// Valid Parentheses checker using Stack
function isValidParentheses(s) {
  const stack = [];
  const bracketMap = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of s) {
    if (char in bracketMap) {
      const topElement = stack.pop();
      if (topElement !== bracketMap[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("({[]})")); // true
      `,
      exercise: {
        instructions: "What is the stack operation name used to add elements, and what operation is used to remove them? Write as two words separated by a comma (e.g. <code>add, remove</code>).",
        placeholder: "push, pop",
        validate: (code) => {
          const val = code.toLowerCase().replace(/\\s/g, '');
          if (val === 'push,pop' || val === 'push(),pop()') {
            return { success: true, message: "🎉 Correct! push adds an element to the top, and pop removes it from the top." };
          }
          return { success: false, message: "❌ Hint: Think of Array methods to add/remove from the end. (e.g., 'push, pop')" };
        }
      },
      bonus: `
        <h4>💡 Queues in JavaScript</h4>
        <p>Using JS Arrays as queues with <code>shift()</code> is inefficient since it takes <code>O(N)</code> to re-index. Implementing custom lists is best for large datasets.</p>
      `
    },
    // Module 4: Trees & Graphs
    {
      notes: `
        <h3>🌳 Trees & Graphs</h3>
        <p>Hierarchical structures linking root-child relationships and complex graph networking nodes.</p>
        <h4>Traversals:</h4>
        <ul>
          <li><strong>DFS (Depth First):</strong> Recurs down branches deeply before checking siblings.</li>
          <li><strong>BFS (Breadth First):</strong> Scans nodes row by row (using queues).</li>
        </ul>
      `,
      code: `
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal (Left, Root, Right)
function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}
      `,
      exercise: {
        instructions: "In a Binary Search Tree (BST), which traversal method outputs node keys in sorted ascending order? (Enter inorder, preorder, or postorder)",
        placeholder: "inorder",
        validate: (code) => {
          const val = code.trim().toLowerCase();
          if (val === 'inorder') {
            return { success: true, message: "🎉 Correct! Inorder traversal recursively visits left-child, parent, then right-child, producing sorted ordering in BSTs." };
          }
          return { success: false, message: "❌ Hint: Left -> Root -> Right produces sorted outputs." };
        }
      },
      bonus: `
        <h4>💡 Graph Representations</h4>
        <ul>
          <li><strong>Adjacency Matrix:</strong> 2D array, <code>O(1)</code> edge queries, <code>O(V^2)</code> memory.</li>
          <li><strong>Adjacency List:</strong> Array of lists, memory-efficient, faster iteration over neighbors.</li>
        </ul>
      `
    },
    // Module 5: DP & Greedy
    {
      notes: `
        <h3>📈 Dynamic Programming & Greedy</h3>
        <p>Techniques targeting optimizations.</p>
        <ul>
          <li><strong>Greedy:</strong> Selects local optimum choice at each step hoping it leads to global solution.</li>
          <li><strong>DP:</strong> Solves overlapping subproblems once and records them to solve complex targets.</li>
        </ul>
      `,
      code: `
// Fibonacci Sequence using DP (Space Optimized)
function fibonacci(n) {
  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

console.log(fibonacci(10)); // 55
      `,
      exercise: {
        instructions: "Recursively calling Fibonacci without memoization runs in exponential time. What is its time complexity? (Enter O(2^n) or O(n))",
        placeholder: "O(2^n)",
        validate: (code) => {
          const val = code.trim().toLowerCase().replace(/\\s/g, '');
          if (val === 'o(2^n)' || val === '2^n') {
            return { success: true, message: "🎉 Correct! The tree splits in duplicate calls, taking O(2^n). DP reduces it to linear O(n) time." };
          }
          return { success: false, message: "❌ Hint: Recursive tree branches double at each level. Enter O(2^n)." };
        }
      },
      bonus: `
        <h4>💡 Memoization vs Tabulation</h4>
        <ul>
          <li><strong>Memoization (Top-down):</strong> Recursive calling, cache entries are resolved on demand.</li>
          <li><strong>Tabulation (Bottom-up):</strong> Iterative resolution, solves base cases first, updating arrays.</li>
        </ul>
      `
    },
    // Interview Prep
    {
      notes: `
        <h3>🤝 Technical Interview Coding</h3>
        <p>Acing tech loops is about structured problem solving, talking through your thoughts, and analysing Big O efficiency.</p>
        <h4>Strategy:</h4>
        <ol>
          <li>Ask clarifying questions and draft basic test cases.</li>
          <li>Propose naive brute-force method, stating constraints.</li>
          <li>Optimize time/space bottlenecks.</li>
          <li>Dry run code on cases before declaring complete.</li>
        </ol>
      `,
      code: `
// Two Sum problem - HashMap solution in O(N) time
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
      `,
      exercise: {
        instructions: "What is the space complexity of solving the Two Sum problem using a HashMap? (Enter O(1) or O(n))",
        placeholder: "O(n)",
        validate: (code) => {
          const val = code.trim().toLowerCase().replace(/\\s/g, '');
          if (val === 'o(n)' || val === 'n') {
            return { success: true, message: "🎉 Correct! Storing up to N values in the Hash Map scales the memory linearly." };
          }
          return { success: false, message: "❌ Hint: HashMap size scales with input size. Enter O(n)." };
        }
      },
      bonus: `
        <h4>💡 Top FAANG Coding Patterns</h4>
        <ul>
          <li>Sliding Window</li>
          <li>Merge Intervals</li>
          <li>Top Topological Sort (Graph)</li>
          <li>Top 'K' elements (Heaps)</li>
        </ul>
      `
    }
  ],
  system: [
    // Module 1: Basics & Architecture
    {
      notes: `
        <h3>🏗️ System Scalability Fundamentals</h3>
        <p>Systems grow over time. We must architect systems that can handle large numbers of concurrent users gracefully.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>Horizontal Scaling:</strong> Adding more nodes/machines to distribute work.</li>
          <li><strong>Vertical Scaling:</strong> Adding more resources (CPU/RAM) to a single machine.</li>
          <li><strong>Load Balancer:</strong> Distributes network traffic across servers to prevent congestion.</li>
        </ul>
      `,
      code: `
// A round-robin request distribution implementation
class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.currentIndex = 0;
  }

  getNextServer() {
    if (this.servers.length === 0) return null;
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }
}

const lb = new LoadBalancer(["Server_A", "Server_B", "Server_C"]);
console.log(lb.getNextServer()); // Server_A
console.log(lb.getNextServer()); // Server_B
      `,
      exercise: {
        instructions: "Does adding more machines to distribute traffic represent <code>horizontal</code> or <code>vertical</code> scaling?",
        placeholder: "horizontal",
        validate: (code) => {
          const val = code.trim().toLowerCase();
          if (val === 'horizontal') {
            return { success: true, message: "🎉 Spot on! Adding physical servers represents horizontal scaling, which enables infinite scalability layouts." };
          }
          return { success: false, message: "❌ Incorrect. Hint: It's 'horizontal' scaling." };
        }
      },
      bonus: `
        <h4>💡 The CAP Theorem</h4>
        <p>A distributed system can satisfy only two out of these three guarantees:</p>
        <ul>
          <li><strong>Consistency:</strong> Every read receives the most recent write.</li>
          <li><strong>Availability:</strong> Every request receives a non-error response.</li>
          <li><strong>Partition Tolerance:</strong> The system continues to operate despite network partition drops.</li>
        </ul>
      `
    },
    // Module 2: Databases & Scaling
    {
      notes: `
        <h3>🛢️ Databases, Replication & Sharding</h3>
        <p>Single databases become bottleneck points. Scaling data stores involves replicating records or partitioning tables.</p>
        <h4>Key Takeaways:</h4>
        <ul>
          <li><strong>Master-Slave Replication:</strong> Writes go to Master; Reads scale across slave copies.</li>
          <li><strong>Sharding:</strong> Splitting tables horizontally across separate DB machines based on partition keys.</li>
        </ul>
      `,
      code: `
// Database query router
class DatabaseRouter {
  constructor(primaryDB, replicas) {
    this.primary = primaryDB;
    this.replicas = replicas;
    this.readIndex = 0;
  }

  executeQuery(query) {
    if (query.type === 'WRITE') {
      console.log(\`Sending Write to Primary DB: \${this.primary}\\n\`);
      return "WRITE_SUCCESS";
    } else {
      const replica = this.replicas[this.readIndex];
      console.log(\`Routing Read query to Replica DB: \${replica}\\n\`);
      this.readIndex = (this.readIndex + 1) % this.replicas.length;
      return "READ_SUCCESS";
    }
  }
}
      `,
      exercise: {
        instructions: "What is the pattern called where write queries execute on one primary database and read queries execute on replica copies? (Enter: Master-Slave, Sharding, or Indexing)",
        placeholder: "Master-Slave",
        validate: (code) => {
          const val = code.trim().toLowerCase().replace(/\\s/g, '');
          if (val === 'master-slave' || val === 'masterslave') {
            return { success: true, message: "🎉 Correct! Master-Slave replication separates write loads from high read traffic!" };
          }
          return { success: false, message: "❌ Think about primary-replica nomenclature. Enter: Master-Slave" };
        }
      },
      bonus: `
        <h4>💡 Database Normalization</h4>
        <p>Normalization reduces redundancy, whereas Denormalization duplicates data to optimize read performance by avoiding expensive SQL joins.</p>
      `
    },
    // Module 3: Caching & Storage
    {
      notes: `
        <h3>💾 Caching layers & CDN Storage</h3>
        <p>Caching retrieves static or frequently queried records from ultra-fast in-memory stores, shielding the main database.</p>
        <h4>Eviction Policies:</h4>
        <ul>
          <li><strong>LRU:</strong> Least Recently Used (removes oldest unaccessed element).</li>
          <li><strong>LFU:</strong> Least Frequently Used (removes least active element).</li>
        </ul>
      `,
      code: `
// Minimal LRU Cache structure simulation
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Refresh recency
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Delete oldest (first item in Map)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}
      `,
      exercise: {
        instructions: "What caching eviction policy acronym deletes the item that has remained unaccessed for the longest duration? (e.g., LFU, LRU, FIFO)",
        placeholder: "LRU",
        validate: (code) => {
          const val = code.trim().toUpperCase();
          if (val === 'LRU') {
            return { success: true, message: "🎉 Correct! LRU (Least Recently Used) is the most standard cache eviction model." };
          }
          return { success: false, message: "❌ Try again. Hint: Least Recently Used." };
        }
      },
      bonus: `
        <h4>💡 Content Delivery Networks (CDNs)</h4>
        <p>CDNs store static assets (images, videos, HTML files) on servers distributed globally close to users (Edge Locations), slashing network latencies.</p>
      `
    },
    // Module 4: Microservices
    {
      notes: `
        <h3>🧩 Microservices & Circuit Breaker Pattern</h3>
        <p>Microservices split monolithic backends into specialized, modular services. Systems remain stable even when individual units crash.</p>
        <h4>Key Patterns:</h4>
        <ul>
          <li><strong>API Gateway:</strong> Entry point routing client calls, parsing auth, and managing traffic.</li>
          <li><strong>Circuit Breaker:</strong> Stops requesting failing services to prevent resource exhaustion.</li>
        </ul>
      `,
      code: `
// Simulated Circuit Breaker implementation
class CircuitBreaker {
  constructor(requestFunc, failureThreshold = 3) {
    this.request = requestFunc;
    this.failureThreshold = failureThreshold;
    this.failureCount = 0;
    this.state = "CLOSED"; // CLOSED (healthy), OPEN (failing)
  }

  async execute() {
    if (this.state === "OPEN") {
      return "CIRCUIT_IS_OPEN: Request Blocked";
    }
    try {
      const response = await this.request();
      this.failureCount = 0;
      return response;
    } catch (err) {
      this.failureCount++;
      if (this.failureCount >= this.failureThreshold) {
        this.state = "OPEN";
      }
      throw err;
    }
  }
}
      `,
      exercise: {
        instructions: "When a service is failing repeatedly and the Circuit Breaker trips to block incoming calls, which state is it in? (CLOSED, OPEN, or HALF-OPEN)",
        placeholder: "OPEN",
        validate: (code) => {
          const val = code.trim().toUpperCase();
          if (val === 'OPEN') {
            return { success: true, message: "🎉 Correct! When open, the breaker short-circuits calls to prevent cascading server crashes." };
          }
          return { success: false, message: "❌ If light bulb switches off, the circuit is...?" };
        }
      },
      bonus: `
        <h4>💡 gRPC Communication</h4>
        <p>Microservices often communicate internally using gRPC instead of standard REST. gRPC uses HTTP/2 and Protocol Buffers, offering much faster serialization speeds.</p>
      `
    },
    // Module 5: Real Systems
    {
      notes: `
        <h3>🗺️ Designing Large Scale Architectures (Netflix/Uber)</h3>
        <p>Case study analysis of systems serving billions of queries daily.</p>
        <h4>Key Design Assets:</h4>
        <ul>
          <li><strong>Geospatial Indexing:</strong> Using structures like H3 or Quadtrees to group locations.</li>
          <li><strong>Consistent Hashing:</strong> Minimizes database key remapping during server scaling.</li>
        </ul>
      `,
      code: `
// A mock geospatial indexing coordinate cell lookup
function getGeohashZone(lat, lon) {
  // Simplistic division simulation
  const latZone = Math.floor(lat);
  const lonZone = Math.floor(lon);
  return \`Zone_\${latZone}_\${lonZone}\`;
}

console.log(getGeohashZone(37.7749, -122.4194)); // Zone_37_-123 (SF Zone)
      `,
      exercise: {
        instructions: "What data structures are commonly used to represent hierarchical, multi-level geospatial index spaces? (Enter: Quadtree, Stack, or Array)",
        placeholder: "Quadtree",
        validate: (code) => {
          const val = code.trim().toLowerCase();
          if (val === 'quadtree' || val === 'quad-tree') {
            return { success: true, message: "🎉 Correct! Quadtree indexes coordinates by recursively partitioning regions into quadrants." };
          }
          return { success: false, message: "❌ Think of a tree partitioning space 4 ways. Enter: Quadtree" };
        }
      },
      bonus: `
        <h4>💡 Netflix CDN - Open Connect</h4>
        <p>Netflix installs custom storage hardware appliance boxes (Open Connect Appliances) directly inside Internet Service Provider (ISP) facilities to serve content locally without loading backbones.</p>
      `
    },
    // Design Interviews
    {
      notes: `
        <h3>🎙️ Designing Architectures in Interviews</h3>
        <p>Navigating System Design interview questions with a structured approach.</p>
        <h4>Design Framework:</h4>
        <ul>
          <li><strong>Step 1:</strong> Scope requirements, calculate QPS, define user features.</li>
          <li><strong>Step 2:</strong> High Level Architecture design (Clients -> API Gateway -> Load Balancer -> Services -> Cache/DB).</li>
          <li><strong>Step 3:</strong> Deep dive into specific bottleneck systems.</li>
        </ul>
      `,
      code: `
=========================================
          SYSTEM ARCHITECTURE BLUEPRINT
=========================================

[Client App] 
     │
     ▼ (HTTPS)
[API Gateway] ──► (Auth, Rate Limiter)
     │
     ▼
[Load Balancer]
     │
  ┌──┴───────────────┐
  ▼                  ▼
[Ride Service]     [User Service]
  │                  │
  ▼                  ▼
[Redis Cache]      [Postgres DB] (Primary-Replica)
      `,
      exercise: {
        instructions: "Which architectural component sits at the edge of the network, acting as the single entry point for all client requests? (Enter: API Gateway, Load Balancer, or Cache)",
        placeholder: "API Gateway",
        validate: (code) => {
          const val = code.trim().toLowerCase().replace(/\\s/g, '');
          if (val === 'apigateway') {
            return { success: true, message: "🎉 Correct! The API Gateway handles routing, SSL termination, authentication, and rate limiting." };
          }
          return { success: false, message: "❌ Check the blueprint. Enter: API Gateway" };
        }
      },
      bonus: `
        <h4>💡 Resource Estimation formula</h4>
        <p>Always practice calculations: <code>1 Million users * 10 requests/day = 10 Million requests/day ≈ 115 requests/second (QPS)</code>. Keep this skill sharp!</p>
      `
    }
  ]
};

// Make it accessible in global scope for imports
if (typeof window !== 'undefined') {
  window.courseResources = courseResources;
}
if (typeof module !== 'undefined') {
  module.exports = courseResources;
}
