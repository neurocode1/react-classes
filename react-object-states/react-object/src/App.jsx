import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludoboard from './ludoboard'
import Todolist from './todolist'
import Lottery from './lotttery'
import { sum } from './ticket'
// import Ticketnum from './ticketnum'
// import Ticket from './tickets'



function wincondtion(ticket){
  return sum (ticket)=== 15

  }

function App() {
  return (


    <>
      {/* <Ludoboard /> */}
      {/* <Todolist /> */}
      <Lottery  n={3} wincondtion={wincondtion}/>
      

    </>
  )
    
  
}
export default App
