function ProductCardShowcase({ producto }) {
    return (
      <div>
        <div className="cardShowcase">
          <img src={producto.url} alt="Imagen del producto" />
          <p>{producto.valuation}</p>
          <p>{producto.name}</p>
          <p>{producto.price}</p>
        </div>
      </div>
    );
  }
  export default ProductCardShowcase;