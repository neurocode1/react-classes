
function clicked(){
    alert("successfully clicked")
}

function hovered(){
    console.log("hovered")
}
export default
function Button (){
    return(
        <div>
            <button onClick={clicked}>click me</button>
            <p onMouseEnter={hovered}>hover over me</p>
        </div>
    )
}