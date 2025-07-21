import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home.js';
import Shop from './shop.js';
import Cart from './cart.js';
import Contact from './contact.js';
import ProductDetail from './ProductDetail';


const AppRoutes = ({ shop, Filter, allcatefilter, addToCart ,cart, setCart}) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home addToCart={addToCart}/>} />
                <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>} />
                <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addToCart={addToCart}/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
        </>
    )
}

export default AppRoutes

