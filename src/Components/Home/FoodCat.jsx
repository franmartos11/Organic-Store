function FoodCat(){

    const redirButton = ()=>{

    }

    return(
        <div className="foodCat">
            <div className="foodCard">
                <h3>Farm Fresh Fruits</h3>
                <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                <button id="buttonMain" onClick={redirButton()}>SHOP NOW</button>
            </div>
            <div className="foodCard">
                <h3>Fresh Vegetables</h3>
                <p>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
                <button id="buttonMain" onClick={redirButton()}>SHOP NOW</button>
            </div>
            <div className="foodCard">
                <h3>Organic Legume</h3>
                <p>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
                <button id="buttonMain" onClick={redirButton()}>SHOP NOW</button>
            </div>
        </div>
    )

}export default FoodCat;