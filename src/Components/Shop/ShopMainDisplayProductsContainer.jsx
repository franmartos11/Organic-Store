import { useState } from "react";

function ShopMainDisplayProductsContainer(productListToRender){
    const products = [
        {
            "id":1,
            "nombre": "Handpicked Red Chillies",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg",
            "Categoria":["Grocerys"],
            "precio": "19.00"
        },
        {
            "id":2,
            "nombre": "Assorted Coffee",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
            "Categoria":["Grocerys"],
            "precio": "35.00"
        },
        {
            "id":3,
            "nombre": "Cashew Butter",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg",
            "Categoria":["Grocerys"],
            "precio": "25.00"
        },
        {
            "id":4,
            "nombre": "Diabetic Cookies",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies.jpg",
            "Categoria":["Grocerys"],
            "precio": "25.00"
        },
        {
            "id":5,
            "nombre": "Fresh Orange Juice",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg",
            "Categoria":["Juice"],
            "precio": "18.00"
        },
        {
            "id":6,
            "nombre": "Fresh Organic Honey",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey.jpg",
            "Categoria":["Grocerys"],
            "precio": "34.00"
        },
        {
            "id":7,
            "nombre": "Hand Sanitizer",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg",
            "Categoria":["Skin Care"],
            "precio": "15.00"
        },
        {
            "id":8,
            "nombre": "Natural Edible Oil",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg",
            "Categoria":["Grocerys"],
            "precio": "25.00"
        },
        {
            "id":9,
            "nombre": "Organic Face Scrub",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash.jpg",
            "Categoria":["Skin Care"],
            "precio": "35.00"
        },
        {
            "id":10,
            "nombre": "Pulses From Organic Farm",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses.jpg",
            "Categoria":["Grocerys"],
            "precio": "15.00"
        },
        {
            "id":11,
            "nombre": "Wheat From Organic Farms",
            "img_url": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat.jpg",
            "Categoria":["Grocerys"],
            "precio": "34.00"
        } 
    ]
    console.log(productListToRender)
    
    console.log(products)

    

    function Card({product}){
        return(
            <div className="card">
                <img src={product.img_url}></img>
                <p className="Nombre">{product.nombre}</p>
                <p className="Categoria">{product.Categoria}</p>
                <p className="Precio">$ {product.precio}</p>
            </div>
        )
    }

    /*
    deberia instalar proptypes 

    Card.propTypes = {
        product: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired,
        img_url: PropTypes.string.isRequired,
        }).isRequired,
    };
    */

    const productsPerPage = 9; // 3 divs x 3 productos por div
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    // utilizamos products aca es donde debe cambiar luego segun la peticion del cliente
    const visibleProductList = products.slice(startIndex, endIndex);
    const divsPerPage = Math.ceil(visibleProductList.length / 3);

    const divs = [];

    for (let i = 0; i < divsPerPage; i++) {
        const divStartIndex = i * 3;
        const divProducts = visibleProductList.slice(divStartIndex, divStartIndex + 3);
        const div = (
        <div className="Container3Products" key={divStartIndex}>
            {divProducts.map((product, index) => (
            <Card product={product} key={index}></Card>
            ))}
        </div>
        );
        divs.push(div);
    }

    const renderPageNumbers = () => {
        const numbers = [];
        for (let i = 1; i <= totalPages; i++) {
        numbers.push(
            <span
            key={i}
            className={i === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i)}
            >
            {i}
            </span>
        );
        }
        return numbers;
    };

    return(
        <div>
            {divs}
            <div className="ShopHandlePages">
                {renderPageNumbers()}
            </div>
        </div>
    )
}export default ShopMainDisplayProductsContainer;