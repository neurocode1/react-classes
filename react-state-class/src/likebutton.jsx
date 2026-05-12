import { useState } from 'react'


export default function LikeButton() {
    let [islike,setislike] = useState(false)
    function click(){
        setislike(!islike)
    }
    
    return (
        <div>
            <p onClick={click}>
                {islike ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
          

            </p>

           
        </div>
    );
}