### ⚛️ What is React 

- React is JavaScript Library its not a framework.
- The main focus is building UI as fast as possible.
- So this is used to single page application its means that if you want to access other page the whole app will not reload. means complete website in single page.
  
### ⚡ Why React is Fast 

- React Use Virtual DOM
- its fast because Virtual DOM Update only Required things if you want to update
- while Real DOM update complete things even if you want to update a single thing

### 🎯 Why Learn React

- Maintained by Facebook so it will Long Term Player in the market.
- Highest Demand Due to fast speed.
- Large Community for your support.
- Mobile App Development with React-Native.

### 🌐 ReactJS without Installation

- we can use ReactJs CDN Links to use React without installation
- here are the links 

```javascript 
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script> 
```

### 🖥️ ReactJs Environment up with Windows

- Install Node ( Install the Recommended for most users )
- NPM is Necessary for React but it will automatically install with Node 

### 🚀 Create First React Application 

- go to the directory and open it on vs code and run below command 

```react 
npx create-react-app my-app
```

### 🗂️ ReactJs File Structure

- **Package.json** this is the main file , this file consist of your all project details like package name version dependencies etc.
- **package-lock.json** this file consist of all the package details 
- **.gitignore** its file that works for GitHub if we don't want to push something so include it in the .gitignore file so it will not be pushed to the github
- **src** all the main react files are placed inside the src folder 
   - **App.css** this file is used for styling
   - **App.test.js** this file is used for use test developers write tests for their code to check either their code work properly or not
   - **index.css** this is also used for css
   - **index.js** this is the entry point of the react application
- **public** this folder is used to store like html based files like favicon etc
- **manifest.json** this is called meta files this store icons and color themes etc
- **node module** in this folder there are all the packages are stored .

### 📦 How to install new package or library in your project

- just google your package or library and there you will see a command to install it in your project so just copy and run it in your terminal

### ❌ How to remove or uninstall package from your project 

- just go to package.json and remove the package version with name from the file and run `npm i` so it will not find the version and name so it will not install it 

### 🧩 What is Component

- a piece of code that can reuse
- such as function
- but more powerful than function
- Header, Footer are best examples of component

**Note** if you create a component and want to add something so you must have to wrap all the content in a wrapper inside return ( )

### 🏛️ Class Component

- class component are not that used while the function component is more usable than class component
- the facebook team said may be later on the class component will remove from react like that 

## 🎯 Use Multiple Components in a Single Page 🚀

- ✅ Yes, we can use multiple components like functions inside a main function.
- ✅ For example, if our main function is `App`, we can create new functions inside it and return data.
- ✅ So whenever the main function is called, the component inside it will also run automatically.

## 📚 JSX with React

- JSX stands for **JavaScript XML** 📄.
- Earlier, we couldn't use JavaScript along with HTML; we used a `<script>` tag separately.
- Now, in JSX, we can write JavaScript and HTML together in one file 🎨.
- JSX is installed automatically when creating a React app.

## 🖱️ Click Event and Function

- In plain JavaScript, `onclick` is used like:

  ```html
  onclick="apple()"
  ```

- In **JSX**, it is used like:

  ```javascript
  onClick={apple}
  ```

- ✅ If you want to write the function directly inside `onClick`, use an **arrow function**:

  ```javascript
  onClick={() => alert('Clicked!')}
  ```

## 🔥 State in React

- **State** is like a variable where we store data 💾.
- To use **state**, import `useState` at the beginning of the file:

  ```javascript
  import { useState } from 'react';
  ```

- `useState` is a **Hook** that helps to maintain and update state in a functional component.

## 📦 Props in React

- **Props** are used to pass data from **parent** ➡️ **child** components.
- Props stands for **Properties** 📬.
- Always remember, props are passed **top to bottom** (parent to child).
- In most cases, the parent component is `App.js`.
- ✅ You can pass multiple props easily.

## ✍️ How to Get Input Value in React

- To get an input value, create a function and use `onChange`:

  ```javascript
  function getValue(val) {
    console.log(val.target.value);
  }
  ```

- 📖 Explanation:
  - `target`: Refers to the HTML element that triggered the event.
  - `value`: The current value of that element.

## 🔄 How to Update Props

- ❗ You **cannot directly update props**.
- Instead, use `useState` at the parent component to manage the data and then pass it down via props.

## 🧬 What is Lifecycle in React

- Lifecycle is similar to human life: **Birth**, **Update (Young Age)**, **Death** ⚡.
- Three main stages:
  - **Mounting** (Component is created)
  - **Updating** (Component updates)
  - **Unmounting** (Component is removed)
- 🔥 Lifecycle methods work mainly in **Class Components**.

## 🛠️ Constructor in Lifecycle in React

- **Constructor** is a special method used inside class components to initialize the state and bind methods.

## 🔃 Render Lifecycle in React

- The `render()` method is called:
  - When the component is ready 🛠️.
  - When the state updates 🔥.
  - When props update 🎯.

## 🚀 ComponentDidMount

- **ComponentDidMount** is used to call **APIs** after the component is rendered.

  ```javascript
  componentDidMount() {
    // API calls or side-effects
  }
  ```

- ✅ It runs **only once** after the component mounts.

## 🔁 ComponentDidUpdate

- **ComponentDidUpdate** runs when the component's **state** or **props** update.

  ```javascript
  componentDidUpdate(prevProps, prevState) {
    // Respond to state or prop changes
  }
  ```

## 🧩 Hooks in React

- Hooks are functions that let you "hook into" React features.
- ➡️ Anything that starts with `use` is a Hook, e.g., `useState`, `useEffect`, etc.
- ✅ To use Lifecycle behavior in **Functional Components**, we use the `useEffect` Hook.

## 🔥 useEffect Hook in React

- `useEffect` always takes a function as its first argument:

  ```javascript
  import { useEffect } from 'react';

  useEffect(() => {
    // Code to run after every render
  }, [dependencies]);
  ```

- 📌 Key Points:
  - Runs after every render by default.
  - You can control it to run only when **specific state** or **props** change.
  - If you pass an empty dependency array `[]`, it will run **only once** after mount.
  - You can specify dependencies inside the array to control its behavior 🎯.

### 🎨 Style in React

- The one that is normal CSS like `style.css` in React folder structure.
- In React, we can also use inline style like this:  
  **`style={{ color: "red", backgroundColor: "yellow" }}`** etc.

---

### 📦 Install Bootstrap in React

- Go to **[React Bootstrap link](https://react-bootstrap.netlify.app/docs/getting-started/introduction#:~:text=npm%20install%20react%2Dbootstrap%20bootstrap)**  
- Copy the installation command and run it in your terminal.  
- After that go to **[CSS Link](https://react-bootstrap.netlify.app/docs/getting-started/introduction#:~:text=%7B%0A%20%20/*%20The%20following%20line%20can%20be%20included%20in%20your%20src/index.js%20or%20App.js%20file%20*/%0A%7D%0Aimport%20%27bootstrap/dist/css/bootstrap.min.css%27%3B)** and paste this code in `index.js` file.  
- After this, check how you can use Bootstrap components in React on the **React Bootstrap Website**.

---

### 🧾 Handle Array with List

- `map` function is used for showing arrays in React.  
- `map` is a function that takes another function as a parameter.  
- It is supported by React inside `return` (unlike `for` loops).  
- If we use a table inside `map`, we will get a console error for a **missing unique key**.  
  - This is because the Virtual DOM needs a unique key to know what to update.  
  - So, we must pass a unique key when rendering list elements.

---

### 🧩 React Fragment

- **React Fragment** is a pattern to handle multiple components or elements.
- It is used to wrap multiple JSX elements without adding extra DOM nodes.

```jsx
import React, { Fragment } from 'react';

<Fragment>
  {/* Wrap your elements here */}
</Fragment>
```

```jsx
<React.Fragment>
  {/* Code here */}
</React.Fragment>

<></>  {/* Shorthand version */}
```

- if you using proper ReactFragment it will better if you create a table in one component and other part of table like tbody of that table in other component where you wrapped the content in the div so it will through error in console.log


### ⚡ UseMemo

- This is an important Hook that enhances your application’s performance.

- It is like the PureComponent functionality in class-based React.

---



### ❓ Questions

#### 📥 Why we use NPM 

- NPM - Node Package manager , it keeps all the packages in node-modules folder if we want to install any other package it will handle it by itself and the other plus point is that this make the code minified 

#### 🔄 Is there any alternate of NPM 

- yes we have an alternate of the NPM which is Yarn Package manager that works like NPM

#### 🚫 Why we not push the node modules to GitHub

- because these are very heavy to push on GitHub it may take more time than usual
- if other developer want to clone your project so he will not receive the node modules for this he will only run the below command and all the packages related to your project will install automatically.

```javascript
npm i or npm install
```

- this command watch the package.json file where your project all information are stored and it will install from the using of package.json file reference

#### 🗃️ Which file is most important in ReactJs application

- **Package.json** it's because it have all the information about your project like which packages are used in the projects what is the React version you used in your project etc

#### 🛠️ How to change the run command

- by default the run command is `npm run start` if you want to change it to something else so you have to go to package.json and look for `start` in the `scripts` and replace it with your own like `zahid` so now you have to run command like 

```javascript
npm run zahid
```
it will start the project

#### 🧱 How many types of Components in React

- Functional Component
- Class Component
- HOC (High order component)
- Pure Component
- Controlled Component
- Uncontrolled Component


#### 📖 Can we use JSX without React 

- yes we can use JSX without React there is a file extension .jsx through which we can use the JSX without Installing React   


**Note** we should create all the function in React main file like App.js and pass it through the props to other component if you want to call it in other component its because it will slow down your app