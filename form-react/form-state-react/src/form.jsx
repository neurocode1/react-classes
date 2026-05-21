import { useState } from "react"

export default function form(){

    // let [fullname ,setfullname]=useState("")
    // let [username ,setusername]=useState("")



    let [formdata ,setformdata]= useState({fullname :"", username :""})

    // function changefullname(event){
    //     setfullname(event.target.value)
  

    // }

    // function changeusername(event){
    //     setfullname(event.target.value)

        

    // }




    function handleinput(event){
        let fieldname = event.target.name
        let newvalue = event.target.value
        
        
setformdata((currdata) =>{
    currdata[fieldname] =newvalue
    return{...currdata}
}

)
    }


    let handsubmit=(event)=>{
        event.preventDefault()
        setformdata(
            {fullname :"",
             username :""}
        )
    }


    return(
        <form onSubmit={handsubmit}>
            <label htmlFor="fullname"> full name</label>
            <input placeholder="enter here" type="text" value={formdata.fullname} onChange={handleinput}
            id="fullname"
            name="fullname"/>
            <br></br>
            <label htmlFor="username"> username</label>
            <input placeholder="enter here" type="text" value={formdata.username} onChange={handleinput}
            id="username"
            name="username"/>
            <button>submit</button>


        </form>
    )
}