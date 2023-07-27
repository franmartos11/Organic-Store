import MoovingLogos from "../MoovingLogos"

function CustomerReviews(){
    return(
        <div className="gradBackground">
            <div className="titlesReviews">
                <h2>Customers Reviews</h2>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="leaf"/>
            </div>
            <div className="customerReviews">
                <div className="reviewCard">
                    <img src=''></img>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img className="roundImg" src="src\assets\client02.png"/>
                        <p>Mila Kunis</p>
                    </div>
                </div>
                <div className="dealCard">
                    <h3>Deal Of The Day 15% Off On All Vegetables!</h3>
                    <p>I am text block. Click edit button to change this tex em ips.</p>
                    <button id="buttonMain">SHOP NOW</button>
                </div>
                <div className="reviewCard">
                    <img src=''></img>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img className="roundImg" src="src\assets\client02.png"/>
                        <p>Mila Kunis</p>
                    </div>
                </div>
            </div>
            <MoovingLogos></MoovingLogos>
        </div>
    )
}export default CustomerReviews