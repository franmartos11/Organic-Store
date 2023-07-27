
function Footer(){
    return(
        <div className="footer">
        <div className="topFooter">
            <div className="footImg">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" alt="" />
                <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
            </div>
            <div className="footerLinks">
                <div>
                    <h4>Quick Links</h4>
                    <a href="">About</a>
                    <a href="">Cart</a>
                    <a href="">Checkout</a>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                </div>
                <div>
                    <h4>Site Links</h4>
                    <a href="">Privacy Policy</a>
                    <a href="">Shipping Details</a>
                    <a href="">Offers Coupons</a>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
            <div>
                <div>
                    <h4>Download Our Mobile App</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                </div>
                <div className="footerApp">
                    <h4>Quick Links</h4>
                    <a href="">Know More About Us</a>
                    <a href="">Visit Store</a>
                    <a href="">Let’s Connect</a>
                    <a href="">Locate Stores</a>
                    <div>
                        <img src="src\assets\play-store.png" alt="playstore" />
                        <img src="src\assets\app-store.png" alt="appstore" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomFooter">
            <p>Copyright © 2023 | Organic Store</p>
            <div className="iconsFooter">
                <i>a</i>
                <i>s</i>
                <i>r</i>
                <i>y</i>
            </div>
        </div>
        </div>
    )
}export default Footer;