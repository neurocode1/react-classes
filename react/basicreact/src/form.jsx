
function  onhandsubmit(event){
    event.preventDefault();
    console.log("form submitted")
}



export default  function Form(){
    return(
        <form onSubmit={onhandsubmit}>
            <input type="text" placeholder="enter your name"/>
            <button type="submit">submit</button>


        </form>
    )
}
