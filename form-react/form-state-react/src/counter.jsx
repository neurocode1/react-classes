import { useEffect, useState } from "react"



export default function Count(){


    let [countx ,setcountx]=useState(0)
    let [county ,setcounty]=useState(0)

    
    
    let increasex =()=>{

        setcountx((currcount)=> currcount + 1)
        
    }


    let increasey =()=>{

        setcounty((currcount)=> currcount+ 1)
        
    }
    
    useEffect(function click(){

        console.log("this is effect")},[])




    return(
    <div>
        <h1>
        count = {countx}
        </h1>
        <button onClick={increasex}>+1</button>


        <h1>
        count = {county}
        </h1>
        <button onClick={increasey}>+1</button>
    </div>)
}