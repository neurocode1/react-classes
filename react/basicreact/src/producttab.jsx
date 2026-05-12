import Product from './products.jsx';

function Producttab() {
    let styles ={
        display: "flex",
        flexwrap:"wrap",
        justifyContent:"center",
        alignItems:"center",


    }
    return (<div style={styles}>
    <Product title="logitech mx master" idx={0}/>
    <Product title= "appple pancil 2end gen" idx ={1}/>
    <Product title ="zebronics transfomer" idx ={2}/>
    <Product title="petronics" idx ={3}/>
</div>
)
}

export default Producttab;