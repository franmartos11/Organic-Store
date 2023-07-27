import { useState } from "react";

function ProductSellingDisplay() {
    const producto = {
        name: 'Natural Edible Oil',
        url:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg"',
        price: '£25.00',
        description: 'Introducing Nature s Bounty Natural Edible Oil, a truly exceptional product that brings the purity and goodness of nature to your kitchen. Sourced from carefully selected, high-quality ingredients, this remarkable edible oil is the perfect embodiment of health, flavor, and versatility.',
        categorias: ['Groceries','Juice']
    }

    const [cantProd,setCantProd] = useState(0);

    const handleAmountChange = (event)=>{
        const inputValue = event.target.value;
    if (inputValue === '' || (inputValue > 0 && !isNaN(inputValue))) {
      setCantProd(inputValue);
    }}

    const handleAddToCart = ()=>{
        console.log('hacerdespues');
    }

    return (
      <div className="ProductoSellingMainWrapper">
        <div className="ProductoSellingMain">
          <img src={producto.url} alt="Imagen del producto" />
          <div className="ProductoSellingDescription">
            <h3>{producto.name}</h3>
            <p className="price"><strong>{producto.price}</strong> + Free Shipping</p>
            <p className="description">{producto.description}</p>
            <div className="addCartLine">
                <input id="amount" type="number" value={cantProd} onChange={handleAmountChange} />
                <button id="buttonMain" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
            <div className="ProductoSellingCategory">
                <p>Categories: </p>
                {producto.categorias.map((categoria,index)=>{
                    return (<p className="category" key={index}>{categoria}</p>)
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }export default ProductSellingDisplay;