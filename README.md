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

### Use Multiple Components in a single page 

- yes we can use like the a function in a main function like if our main function is App and we create new functions inside it and return a data so whenever the main function called this component will also run with it 

### JSX with React

- JSX stand for JavaScript XML
- earlier we can't use javascript along with html for script we used script tag but now in JSX we can use both in one file.
- write JavaScript and HTML together in react is called JSX and JSX install with React application


### Click Event and Function

- when we use onclick function if we define a function and add alert or something else there so by default in JavaScript we use like 
  
```javascript
onclick="apple()"
```

- but in the JSX we have to use like
  
  ```javascript
  onclick="{apple}"
  ```

  - this will called properly in JSX 
  - if someone wants directly write function code there in the onclick="" so they have to use arrow function so it will work properly 

### State in React

- state is like object like variable where we can store data 
- for using state we must have to import the useState in the start of the file 
- useState is a Hook that allow us to use state and maintained state and update the state


### Props in React

- **Props** in react like functions where we passed data as an arguments this is like this if we want to create a component and want to pass data so we can use **props**
- **Props** are basically used to pass data from one component to another component in React
- **Props** stands for Properties. you can imagine , props are like arguments but actually its not arguments but you can imagine.
- **Note** always keep in mind that the data you are want to pass should be passed from parent to the child component in all the cases parent component is **App.js**
- we can pass multiple props using single component and we can pass. 

### How to get input value in React :

- to get value in react we have to create a function that get value from specific input field and whatever you want if you want onChange so use onchange or onclick and the function must have parameter of a variable like val and than print the value in the function body using 

  ```javascript
   console.log (val.target.value)

    // here val is the parameter of the function 

   // target: Refers to the HTML element that triggered the event. For example, an <input> element.

   // value: The current value of that element (e.g., what the user typed in an input box).
  ``` 

### how to update Props 

- to update the Props you need to use the **useState** of react.



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
