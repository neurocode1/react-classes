import { useEffect, useState } from "react";

export default function Joker(){

    let [joke,setjoke]= useState({})

    const url = "https://official-joke-api.appspot.com/random_joke"

    
    const getjock = async()=>{
        let response  = await fetch (url);
        let josnreposne =  await response.json()
        console.log(josnreposne)
        setjoke( {setup: josnreposne.setup , punchline : josnreposne.punchline})
    }

    useEffect(()=>{
           async function getnewjoke(){
            let response  = await fetch (url);
        let josnreposne =  await response.json()
        console.log(josnreposne)
        setjoke( {setup: josnreposne.setup , punchline : josnreposne.punchline})
        } 

getnewjoke()

        }, []);


    return(
        <div>

         <h1>jocks</h1>  
         <h2>{joke.setup}</h2> 
         <h3>{joke.punchline}</h3>
         <button onClick={getjock}> get joke</button>

    
        
        
        
</div>
        
        
        
    )
}