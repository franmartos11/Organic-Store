
import { useEffect,useState } from "react";
import ProductCardShowcase from "../Shop/ProductCardShowcase";

function TrendingProducts(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const productos = [
        {
            name: 'Natural Edible Oil',
            url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
            valuation: 'Groceries',
            price: "£25.00",
        },{
            name: 'Fresh Orange Juice',
            url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg',
            valuation: 'Juice',
            price: "£18.00",
        },
        {
            name: "Assorted Coffee",
            url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
            valuation: 'Groceries',
            price: "£35.00",
        },
        {
            name: "Handpicked Red Chillies",
            url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
            valuation: 'Groceries',
            price: "£19.00",
        }
    ];
    const divicionCadaDosObjetos=(array,windowWidth,maxWidth)=>{
        let width = windowWidth
        const newArray = []
        if(width<=maxWidth){
           for (let i = 0; i < array.length; i += 2) {
                const dosObjetos = array.slice(i, i + 2);
                newArray.push(dosObjetos);
                
            }return(
            <div className="dividedCards">
                {newArray.map((obj) => (
                    <div className="wrapperShowcase4Cards" key={obj.index}>
                        { obj.map((producto, index) => (
                            <ProductCardShowcase key={index} producto={producto} />
                            ))}
                    </div>
                        
                    ))}
            </div>
            )
           
        }else{
            return (productos.map((producto,index)=>(
                <ProductCardShowcase  key={index} producto={producto}/> 
            )))
        }
    }
    return(
        <div className="trendingProductsShowcase">
                <h2>Trending Products</h2>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="leaf"/>
                <div className="showcase4Cards">
                    {divicionCadaDosObjetos(productos,windowWidth,783)}
                </div>
        </div>
    )
}export default TrendingProducts;