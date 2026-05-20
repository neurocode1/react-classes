import Ticketnum from './ticketnum'

export default function Ticket({ ticket }){

    return(
        <div>
            

           {ticket.map((num, idx)=>
            (<Ticketnum key={idx} num={num}/>))}

        </div>
    )
}


