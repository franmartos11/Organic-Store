import './index.css'
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Routes/Home';
import Footer from './Components/Footer';
import About from './Routes/About';
import ContactUs from './Routes/ContactUs';
import Shop from './Routes/Shop';
import Product from './Routes/Product';
import DataProvider from './Context/DataContext';

function App() {
  
  return (
  <div className="app">
    <DataProvider>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
    </Routes>
    <Footer></Footer>
    </DataProvider>
  </div>
  )
}

export default App
