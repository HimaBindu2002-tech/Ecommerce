import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import AppRoutes from './components/rout';
import Footer from './components/footer';
import Homeproduct from './components/home_products';
 
const App = () => {
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.category === x;
    })
    setShop(catefilter);
  }
  const allcatefilter = () => {
    setShop(Homeproduct);
  }
 
  const searchLength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchLength) {
      alert("Please search something..!!")
      setShop(Homeproduct);
    }
    else {
 
      const searchfilter = Homeproduct.filter((x) => {
        return x.category === search
      })
      setShop(searchfilter);
    }
  }
 
 
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    })
    if (exist) {
      alert("This product is already in the cart");
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert("Added to cart successfully");
    }
  }
  
  return (
    
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <AppRoutes setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addToCart={addToCart} />
        <Footer />
      </BrowserRouter>
    
  )
}
export default App;