import {Link} from 'react-router-dom'

function Nav() {

    return (
        <div>
            <section className="top-nav">
            <div className="logo">
            <Link to="/"><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="logo"></img></Link>
            </div>

            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
            </label>

            <ul className="menu">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contactus">Contactanos</Link></li>
            </ul>
          </section>
        </div>
        
        )
}
  
  export default Nav
  