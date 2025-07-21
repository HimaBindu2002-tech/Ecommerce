<<<<<<< HEAD
import React from "react";
import './cart.css';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
 
const Cart = ({ cart, setCart }) => {
    const increaseQuantity = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id;
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exist, quantity: exist.quantity + 1} : curElm;
        }))
    }
    const decreaseQuantity = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id;
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exist, quantity: exist.quantity - 1} : curElm;
        }))
    }
 
    const removeProduct =(product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id;
        })
        if (exist.quantity>0){
            setCart(cart.filter((curElm)=>{
                return curElm.id !==product.id;
            }))
        }
    }
 
    const total= cart.reduce((price,item)=>price+item.quantity*item.price,0)
    return (
        <>
            <div className="cart">
                <h3>#cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div className="empty_cart">
                            <h2>Your cart is empty, Start shopping now!</h2>
                            <Link to='/shop' className=""><button>Shop Now</button></Link>
 
                        </div>
                    </>
                }
                <div className="container">
                    {
                        cart.map((curElm) => {
                            return (
                                <>
                                    <div className="box">
                                        <div className="img_box">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="detail">
                                            <div className="info">
                                                <h4>{curElm.category}</h4>
                                                <h3>{curElm.Name}</h3>
                                                <p>Price:  ${curElm.price}</p>
                                                <p>Total: ${curElm.price * curElm.quantity}</p>
                                            </div>
                                            <div className="quantity">
                                                <button onClick={() => increaseQuantity(curElm)}>+</button>
                                                <input type="number" value={curElm.quantity} />
                                                <button onClick={() => decreaseQuantity(curElm)}>-</button>
                                            </div>
                                            <div className="icon">
                                                <li onClick={()=>removeProduct(curElm)}><IoMdClose /></li>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        cart.length > 0 &&
                        <>
                        <div className="total">
                            <h4>Sub Total: ${total}</h4>
                        </div>
                        <button>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
 
=======
import React, { useEffect } from "react";
import './cart.css';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from "../cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); 

  const total = cart.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h3>#cart</h3>

      {cart.length === 0 ? (
        <div className="empty_cart">
          <h2>Your cart is empty. Start shopping now!</h2>
          <Link to='/shop'>
            <button>Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="container">
            {cart.map((curElm) => (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.image} alt={curElm.Name} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.category}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.quantity}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => dispatch(increaseQuantity(curElm))}>+</button>
                    <input type="number" value={curElm.quantity} readOnly />
                    <button
                      onClick={() =>
                        curElm.quantity > 1
                          ? dispatch(decreaseQuantity(curElm))
                          : dispatch(removeProduct(curElm.id))
                      }
                    >
                      -
                    </button>
                  </div>
                  <div className="icon">
                    <li onClick={() => dispatch(removeProduct(curElm.id))}>
                      <IoMdClose />
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom">
            <div className="total">
              <h4>Sub Total: ${total.toFixed(2)}</h4>
            </div>
            <button>Checkout</button>
            <button className="clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

>>>>>>> origin/main
export default Cart;