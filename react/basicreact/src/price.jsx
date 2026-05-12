export default 

function price({oldprice,newprice}){
    let oldstyle ={
        textDecorationLine : "line-through"
    }

    let newstyle ={
        fontWeight:"bold",
    }

    let style ={
        backgroundColor : "rgb(140, 144, 20)",
        height:"30px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",

    }
    return(
        <div style={style}>

            <spen style={oldstyle}> {oldprice}</spen>
            &nbsp; &nbsp;   &nbsp; &nbsp; 
            <spen style={newstyle}>   {newprice}</spen>
        </div>
    )
}

