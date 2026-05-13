import { useState } from "react"
import { v4 as uuidv4 } from "uuid";


export default function Todolist(){
    let [ todo,settodo] = useState([{task : "eat", id : uuidv4()}]);
    let[newtodo,setnewtodo] = useState("");

    function addtask(event){
        setnewtodo(event.target.value);

    }

     function  addtodo(){
         settodo ((prevtodo)=>[...prevtodo,{task : newtodo, id : uuidv4()}])
        // settodo([...todo,{task : newtodo, id : uuidv4()}])
    
        setnewtodo("");    
    
    
}


function updatetodo(){
    let newarry =todo.map((todos)=>{
        return {...todo, task: todos.task.toUpperCase()}
        
    })
    settodo(newarry);

}


  

    return(
        <div>
         <input placeholder="enter todo" value={newtodo} onChange={addtask}></input>
         <br></br>
         <button onClick={addtodo}>add</button>
         <br></br>
         <br></br>
         <br></br>
         <br></br><br></br>
         <hr></hr>

        <p>todo list</p>


        <ul>
           {todo.map((todos)=>(
            <li key={todos.id}>
                <span>{todos.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => deletetodo(todos.id)}>delete</button>
            </li>
           ))
           
           }

        </ul>
     <button onClick={updatetodo}>uppercase</button>

        </div>
    )
}