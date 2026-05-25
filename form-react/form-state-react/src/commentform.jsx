// import { useState } from "react"

import { useState } from "react"

// export default function Comment(){

//     let[formdata, setformdata]=useState({
//         username :"",
//         remark :"",
//         rating :5,

//     })


//     let handlcomment =((event)=>{
//         setformdata((currdata)=>{
//            return {...currdata ,[event.target.name]: event.target.value}

//         })
//     })


//     let handlesubmit=((event)=>{
//         console.log(formdata);
//         event.preventDefault();
//         setformdata({
//             username :"",
//         remark :"",
//         rating :5,
//         })
//     })




//     return(
//         <div>
//             <h1>
//                 this is comment form
//             </h1>
//             <form onSubmit={handlesubmit}>
//                 <label htmlFor="username">username</label>
//                 <input placeholder="username" type="text" value={formdata.username} onChange={handlcomment}id="username" name="username"/>
//                 <br></br><br></br>
//                 <label htmlFor="remark">remark</label>
//                 <textarea value={formdata.remark}placeholder=" add remarks" onChange={handlcomment}id="remark" name="remark"></textarea>
//                 <br></br><br></br>
//                 <label htmlFor="rating">rating</label>
//                 <input placeholder="rating" type="number" min={1} max={5} value={formdata.rating} onChange={handlcomment} id="rating" name="rating"/>
//                 <br></br><br></br>
//                 <button>submit</button>


//             </form>

//         </div>
        
//     )

// }






export default function comment(){

    let [fromdata,setformdata]=useState({
        username:"",
        remark:"",
        rating:5,

    })
    



 let handelinput=(event)=>{
    setformdata((currdata)=>{
        return{
            ...currdata,[event.target.name]:event.target.value
    }
    })}
    
    
 function handelchange(event){
    console.log(fromdata)
    event.preventDefault();

 }




    return(
        <div>
            <form onSubmit={handelchange}>
                <h1>this is a comment page </h1>
                 
                <label htmlFor="username">username</label>
                <input placeholder=" enter username" value={fromdata.username}id="username" name="username"  onChange={handelinput}/>
                <br></br> <br></br>
                <label htmlFor="remark">remark</label>
                <input placeholder="remark" value={fromdata.remark} onChange={handelinput} id="remark" name="remark"/>
                <br></br><br></br>
                <label htmlFor="rating">rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={fromdata.rating} onChange={handelinput} id="rating" name="rating"/>
                <br></br><br></br>
                <button>sumbit</button>

            

            



            </form>
        </div>
    )
}