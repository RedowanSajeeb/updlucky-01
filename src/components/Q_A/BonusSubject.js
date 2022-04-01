import React from "react";

const BonusSubject = () => {
  return (
    <div>
      <div>
        <h2> How React Work</h2>
        <p>
        <li>The most popular JavaScript library run and executes codes using declarative code.
Meaning that If you see the App component of a react project every top level component is declared in one place
We create components to encapsulate different codes and make the code easier to view at first sight
React uses states to store data so that we can rerender the dom efficiently.
React creates a virtual dom to quickly identify the changes in DOM.
When a state changes react compares the old virtual dom with new one then applies the changes and keeps the rest code untouched
React also uses keys so that the changes can quickly be identified.
In a React Project components are well organized</li>
        </p>
      </div>
      <div>
        <h2>How useState works</h2>
        <p>
         
          <li>Before React v16 we could not use states in a functional components, but now useState hooks allows us to use state in a functional component
useState hooks function is called with a initial state, ant it returns an array of 2 variables. One is to access the state and another is to set the state</li>
        </p>
        
        <p><li>in a class component state is declared using this.state, but in a functional component useState hook can handle the functionality of the state of a component.
There are many hooks used in React to make the logic of application simple. useState hook make to store the state data in a simpler way
By using useState hook react virtual DOM can quick identify the changes in the dom and apply only the changes efficiently</li></p>
      </div>
    </div>
  );
};

export default BonusSubject;