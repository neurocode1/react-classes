
import { useState } from "react"
import "./lottery.css"
import {genticket ,sum} from "./ticket"
import Ticket from "./tickets"  



export default  function Lottery({ n , wincondtion }){

    let [ticket,setticket] = useState(genticket(n))
    let iswining = wincondtion(ticket) ;



   function buynewticket(){
    setticket(genticket(n))

   }



    return(
    <div>


       <h1>Lottery ticket</h1>

       <div className="ticket">
        <Ticket ticket={ticket}/>
        <h3>{iswining && "You win!"}</h3>
       </div>
       <h3>{iswining && "Congratulations! you got it right!"}</h3>
       <button onClick={buynewticket}>buy new ticket</button>
    </div>
    )
}

