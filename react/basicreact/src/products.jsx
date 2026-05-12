import './product.css'
import Price from "./price"

function Product({title, idx}) {
    // let list =features.map((feature)=>(<li>{feature}</li>))
    let oldprice =["12,344","4523","532","673"]
    let newprice =["14,532","2342","322","367"]
    let discription =[["newone","new one "], ["good product" , "nicer"],["good use for leptop", "best "],["wireless","awaahh"]]
    return(
        <div className="product">
       <h4> {title}</h4>
       <p>{discription[idx][0]}</p>
       <p>{discription[idx][1]}</p>
       <Price oldprice={oldprice[idx]}  newprice={newprice[idx]}/>
    </div>
    )
}

export default Product