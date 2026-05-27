// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"

// export default function Joker(){

//     let [joke,setjoke]= useState({})

//     const url = "https://official-joke-api.appspot.com/random_joke"

    
//     const getjock = async()=>{
//         let response  = await fetch (url);
//         let josnreposne =  await response.json()
//         console.log(josnreposne)
//         setjoke( {setup: josnreposne.setup , punchline : josnreposne.punchline})
//     }

//     useEffect(()=>{
//            async function getnewjoke(){
//             let response  = await fetch (url);
//         let josnreposne =  await response.json()
//         console.log(josnreposne)
//         setjoke( {setup: josnreposne.setup , punchline : josnreposne.punchline})
//         } 

// getnewjoke()

//         }, []);


//     return(
//         <div>

//          <h1>jocks</h1>  
//          <h2>{joke.setup}</h2> 
//          <h3>{joke.punchline}</h3>
//          <button onClick={getjock}> get joke</button>

    
        
        
        
// </div>
        
        
        
//     )
// }





export default  function joke(){

    let [ joke,setjoke ]= useState({})


   const url = "https://official-joke-api.appspot.com/random_joke"



   const getjoke = async () => {
    let Response = await fetch (url)
   let  jsonreposne = await Response.json()
   console.log (jsonreposne);
   setjoke({setup : jsonreposne.setup , punchline : jsonreposne.punchline})
   }



   useEffect(()=>{
    async function getnewjoke(){
        let Response = await fetch (url)
   let  jsonreposne = await Response.json()
   console.log (jsonreposne);
   setjoke({setup : jsonreposne.setup , punchline : jsonreposne.punchline})

    }

    getjoke();

},[])






    return(
        <div>

            <h1>{joke.setup}</h1>
            <h2>{joke.punchline}</h2>

            <button onClick={getjoke}>joke</button>



        </div>
    )
}