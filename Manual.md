# Manual Of React Aap

# 1. npx Node package Executer
### diff between npm and npx
npm is (Node package manager) which install the package in our folder than use it. 
Here we have npx (Node package Executer) whcih directly use the package for development without instaling them

## how to make a project in React
### create project command  (slower)
use utility --> software --> ```npx create-react-app app-name```   (time consuming process)


![command to create react app older](image.png)

### create project command using vite  (faster) 
utility --> sofware --> ```npm create vite@latest```


![command to create react app faster](image-1.png)

# 2. structure of React Project

### A package.json (Entry point)
It give all details of our React project (Contain all information )


![store all Information of our project](image-2.png)

Script :- Inside package.json i have script  which is responsible to run the project in phases
To run the project than run start script
#### command
dir (Windows)


![start command](image-3.png)
#### main command 
```npm run start``` mainly used in old version not used in vite


To run on latest versions 
1. Go to your folder using command ``` cd foldername(react folder) ```
2. install dependencies using ``` npm install``` or ```npm i```
3. Run command ``` npm run dev ``` to run react project mainly used in new version (vite)

After performing above steps you see a link of your project


![Runable project Link](image-5.png)

Important!
 we can also run all script command using ```npm run command-name``` 

ls (Mac)


### B src

src contains many file in it but most important file are app.jsx and main.jsx

Here jsx have a power that through javasrcipt we can render our HTML Element or we can say that jsx is nothing but javaScript + HTML 

Here main.jsx is the root element that is passed in out html file 

and inside main.jsx we have App tag which is nothing but a combination of tag which we used in our main.jsx

#### Alert

while returning we can only return 1 html element  if we return multiple html element  react give us an error

#### Example 

```code
 function App()  {

  return (
    
      <h1>Hello React + Vite  I am Aryan </h1>
      <h2>hi</h2>
  )
}
```


As an output we get an error 

![Error](image-6.png)

#### Solution 

To return Multiple Elements use this element ```<> </>```

This element is consider as a main element or Parent element inside this element we can write multiple tags or elements.

```code  
        <>
            <h1>Hello React + Vite  I am Aryan </h1>
            <h2>hi</h2>
        </>
```

#### How to make components 

Components is nothing but functions which are returning element

1. Make sure that component name is Capitalize
2. while importing and exporting the component make sure that name is also capatalize 
3. example

 ```Code
  function MyButton() {
    return (
        <>
        <button> Click Me </button>
        </>
    )
}
``` 

also while importing in main.jsx or in another component file 

```Code

 import MyButton from './button.jsx'

function App() {

  return (
    
      <>
        <h1>Hello React + Vite  I am Aryan </h1>
        <MyButton></MyButton>
      </>
  )
}

export default App

export default MyButton;
```
4. Make sure that component file is .jsx (in Vite)


### C jsx

Here js means javaScript and x mean HTML

we see thatn in function we return javascript but how to return javascript we can return only evauated expression which is like :  ``` { your evaluated expression } ``` 

Here inside { } dont write whole logic of javascript write your logic inside a fuction   here only give evaluted expresion  

Example 

``` code

function Myage() {
  let age = 19;
  return (
    <>
      <h3> your age is : {age} </h3>
     </> 
  )
}
```



# How to push a code a Modified code on github 



1. ``` git status ```  
This will show the modified and new files that need to be committed.

To add all modified and new files:

2. ``` git add . ```

If you only want to add specific files, use:

3. ``` git add filename.ext ```

Commit the added files with a meaningful message:

4. ``` git commit -m "Updated feature XYZ" ```

Push the changes to your remote repository:

5. ``` git push origin main ```

If your branch is master, use:

6. ``` git push origin master ``` 
done

