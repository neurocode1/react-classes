import {useState} from "react";

export default function Ludoboard(){

        let [move , setmove]= useState({blue: 0, red: 0, yellow: 0, green: 0});
        

      function Updatevalue(){
        // move.blue = move.blue + 1;
        setmove({...move,blue: move.blue+1})

      }

      function Updatered(){
        // move.blue = move.blue + 1;
        setmove({...move,red: move.red+1})

      }
      function Updateyellow(){
        // move.blue = move.blue + 1;
        setmove({...move,yellow: move.yellow+1})

      }

      function Updategreen(){
        // move.blue = move.blue + 1;
        setmove({...move,green: move.green+1})

      }
    return(
        <div>
        <p>ludo board</p>
        
        <p>blue: {move.blue}</p>
        <button onClick={Updatevalue}>1+</button>
        <p>red: {move.red}</p>
        <button onClick={Updatered}>1+</button>
        <p>yellow: {move.yellow}</p>
        <button onClick={Updateyellow}>1+</button>
        <p>green: {move.green}</p>
        <button onClick={Updategreen}>1+</button>

       
        </div>
    )
}

