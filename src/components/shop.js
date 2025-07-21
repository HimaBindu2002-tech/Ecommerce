import React from "react";
import './shop.css';
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = ({ shop, Filter, allcatefilter, addToCart }) => {
    return (
        <>
            <div className="shop">
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h3>All Categories</h3>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={() => allcatefilter()}># All Products</li>
                                    <li onClick={() => Filter("Television")}># Television</li>
                                    <li onClick={() => Filter("Laptop")}># Laptop</li>
                                    <li onClick={() => Filter("Watch")}># Watch</li>
                                    <li onClick={() => Filter("Electronics")}># Electronics</li>
                                    <li onClick={() => Filter("Refridgerator")}># Refridgerator</li>
                                    <li onClick={() => Filter("Mobile")}># Mobile</li>
                                    <li onClick={() => Filter("charging stand")}># charging stand</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner">
                            <div className="img_box">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllliKa2-uiUvCFaSMR1vaDA6iXQd-B8pZLQ&s' alt="banner" />
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gv5V1MFJa0OO6bOF0Uy4j9_1rz-zunCRCg&s' alt="" />
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop Product</h2>
                            <div className="product_container">
                                {shop.map((curElm) => (
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <Link to={`/product/${curElm.id}`}>
                                                <img src={curElm.image} alt={curElm.Name} />
                                            </Link>
                                            <div className="icon">
                                                <li><FaHeart /></li>
                                                <li><Link to={`/product/${curElm.id}`}><FaEye /></Link></li>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <h3>{curElm.Name}</h3>
                                            <p>${curElm.price}</p>
                                            <button onClick={() => addToCart(curElm)}>Add to Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;
