import React, { useState } from "react";
import './shop.css';
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
 
const Shop = ({ shop, Filter, allcatefilter, addToCart }) => {
 
    const [showDetail, setShowdetail] = useState(false)
    const [detail,setDetail]=useState([])
    const detailPage=(product)=>{
        const detaildata=([{product}])
        const productdetail= detaildata[0]['product'];
        setDetail(productdetail)
        setShowdetail(true)
    }
 
    const closeDetail=()=>{
        setShowdetail(false)
    }
 
    return (
        <>
            {
                showDetail ?
                    <>
                        <div className="product_detail">
                            <button className="close_btn" onClick={closeDetail}><IoMdClose/></button>
                            <div className="container">
                                <div className="img_box">
                                    <img src={detail.image} alt=""/>
                                </div>
                                <div className="info">
                                    <h4># {detail.category}</h4>
                                    <h2>{detail.Name}</h2>
                                    <p>A screen everyone will love: whether your family is streaming or video chatting with friends tablets A8...</p>
                                   <h3>${detail.price}</h3>
                                    <button onClick={()=>addToCart(detail)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
 
        }
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
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllliKa2-uiUvCFaSMR1vaDA6iXQd-B8pZLQ&s' alt="banner" height="198px" width="100px" />
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
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={curElm.image} alt="" />
                                                        <div className="icon">
                                                            <li><FaHeart /></li>
                                                            <li onClick={()=>detailPage(curElm)}><FaEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className="details">
                                                        <h3>{curElm.Name}</h3>
                                                        <p>${curElm.price}</p>
                                                        <button onClick={() => addToCart(curElm)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop;