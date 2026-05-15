
import { useState } from "react"
import "./lottery.css"
import {genticket ,sum} from "./ticket"



export default  function Lottery(){

    let [ticket,setticket] = useState(genticket(3))
    let iswining = sum(ticket)=== 15;



   function buynewticket(){
    setticket(genticket(3))

   }



    return(
    <div>


       <h1>Lottery ticket</h1>

       <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <h3>{iswining && "You win!"}</h3>
       </div>
       <h3>{iswining && "Congratulations! you got it right!"}</h3>
       <button onClick={buynewticket}>buy new ticket</button>
    </div>
    )
}

