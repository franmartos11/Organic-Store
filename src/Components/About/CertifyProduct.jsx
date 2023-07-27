import { useState ,useEffect} from "react";

function CertifyProduct(){
    const [imagenActual,setImagenActual]= useState(0)

    const imgs = [
        'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg',
        'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg',
        'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg',
        'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg'
    ]
    
    
    const siguienteImg = () => {
        setImagenActual((prevImagenActual) => {
          const siguienteImagen = prevImagenActual + 1;
          return siguienteImagen < imgs.length ? siguienteImagen : 0;
        });
      };
    const anteriorImg = () => {
        setImagenActual((prevImagenActual) => {
          const anteriorImagen = prevImagenActual - 1;
          return anteriorImagen >= 0 ? anteriorImagen : imgs.length - 1;
        });
      };

    useEffect(() => {
        const interval = setInterval(siguienteImg, 6000); // Cambia el valor "3000" para ajustar la velocidad de desplazamiento
        return () => clearInterval(interval);
      }, []);

    return(
        <div className="certifyProductContainer">
            <div className="reviewShowcase">
                <div className="carruselImg">
                    
                    {imgs.map((img,index)=>{
                        return(
                            <>{ imagenActual === index &&(<img key={index} src={img} alt="imgCarrusel"></img>)
                                }
                            </>
                        );}
                    )}
                    
                </div>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="personCarruseImg">
                    <img src="src\assets\client02.png" alt="" />
                    <p>Mila Kunit</p>
                </div>

            </div>
            
            <div className="listCertifiedProducts">
                <div className="certify">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" />
                    <div>
                        <h4>Certified Products</h4>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className="certifyOrganic">
                    <h2>We Deal With Various Quality Organic Products!</h2>
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="leaf"></img>
                    <div>
                        <ol>
                            <li> <img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Fresh fruits</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Dry fruits</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Fresh vegetables</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Dried vegetables</li>
                        </ol>
                        <ol>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Beauty products</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Milk products</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Organic honey</li>
                            <li><img src="src\assets\Green_Checkmark_Circle.svg.png" alt="check" />Organic tea</li>
                        </ol>
                    </div>
                    <button id="buttonMain">START SHOPPING</button>
                </div>

            </div>
        </div>
    )
}export default CertifyProduct;