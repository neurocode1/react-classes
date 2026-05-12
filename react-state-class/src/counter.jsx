
                            //state in react
//state is a way to store and manage data in a component. It allows us to create dynamic and interactive user interfaces by keeping track of changes in the component's data and re-rendering the component when necessary. In React, we can use the useState hook to add state to our functional components. The useState hook returns an array with two elements: the current state value and a function to update that state value. We can use array destructuring to assign these values to variables. When we call the function to update the state, React will re-render the component with the new state value, allowing us to see the changes in the UI.





import { useState } from 'react'

export default function Counter() {

 let[count,setcount] = useState(0)
   function inccount(){
    setcount(count+1)
   }
return(
    <div>
    <h1>count = {count} </h1>
    <button onClick={inccount}> increase count </button>
    </div>
)
    
}







//  const [state, setState] = useState(initialState)



// state is a  varible like count     = count 
// setState is a function like setCount = setCount. = uodate the count value
// initialState is the initial value of the state like 0 for count. = 0 for count
//useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that state value. We can use array destructuring to assign these values to variables.