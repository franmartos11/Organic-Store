import { useState } from "react"

function TopMain(){
    const [count,setCount] = useState(0)
    function sum(){
        return setCount(count + 1)
    }
    return(
        <div className="topMain">
            <div className="productMain">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt='productMain'></img>
            </div>
            <div className="textMain">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="leaf"></img>
                <h3>Best Quality Products</h3>
                <h1>Join The Organic Movement!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <button id="buttonMain" onClick={sum}><i className="fa-solid fa-cart-shopping"></i> Comprar Ahora</button>
            </div>
        </div>
    )
}
export default TopMain