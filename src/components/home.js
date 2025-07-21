import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import Homeproduct from "./home_products";
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

const Home = () => {
    const dispatch = useDispatch();
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);

    const filtercategory = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => curElm.type === x);
        setTrendingProduct(filterproduct);
    };

    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct);
    };

    useEffect(() => {
        productcategory();
    }, []);

    const productcategory = () => {
        setNewProduct(Homeproduct.filter((x) => x.type === 'new'));
        setFeaturedProduct(Homeproduct.filter((x) => x.type === 'featured'));
        setTopProduct(Homeproduct.filter((x) => x.type === 'top'));
    };

    return (
        <div className="home">
            <div className="top_banner">
                <div className="content">
                    <h3>Silver Aluminium</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first order</p>
                    <Link to='/shop' className="link">Shop Now!!</Link>
                </div>
            </div>

            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                            <div className="heading">
                                <h2 onClick={allTrendingProduct}>Trending Products</h2>
                            </div>
                            <div className="category">
                                <h3 onClick={() => filtercategory('new')}>New</h3>
                                <h3 onClick={() => filtercategory('featured')}>Featured</h3>
                                <h3 onClick={() => filtercategory('top')}>Top Selling</h3>
                            </div>
                        </div>
                        <div className="products">
                            <div className="container">
                                {trendingProduct.map((curElm) => (
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <Link to={`/product/${curElm.id}`}>
                                                <img src={curElm.image} alt={curElm.Name} />
                                            </Link>
                                            <div className="icon">
                                                <div className="icon_box"><IoMdEye /></div>
                                                <div className="icon_box"><FaHeart /></div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <Link to={`/product/${curElm.id}`}>
                                                <h3>{curElm.Name}</h3>
                                            </Link>
                                            <p>${curElm.price}</p>
                                            <button className="btn" onClick={() => dispatch(addToCart(curElm))}>Add to Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>

                    <div className="right_box">
                        <div className="right_container">
                            <div className="testimonial">
                                <div className="head">
                                    <h3>Our Testimonial</h3>
                                </div>
                                <div className="detail">
                                    <div className="img_box">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMnrWbioI1iGGHUw0h5AnSfDx4gnIn-Wh1g&s" alt="testimonial" />
                                    </div>
                                    <div className="info">
                                        <h3>Stephan Robot</h3>
                                        <h4>Web Designer</h4>
                                        <p>Creates the visual layout, aesthetics, and user experience of a website. They focus on making the site visually appealing and easy to navigate, ensuring a positive user experience.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="newsletter">
                                <div className="head">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="form">
                                    <p>Join our customer list</p>
                                    <input type="email" placeholder="E-mail" autoComplete="off" />
                                    <button>Subscribe</button>
                                    <div className="icon_box">
                                        <div className="icon"><FaFacebookF /></div>
                                        <div className="icon"><IoLogoTwitter /></div>
                                        <div className="icon"><FaInstagram /></div>
                                        <div className="icon"><IoLogoYoutube /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banners">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src='https://hocotech.com/wp-content/uploads/2019/01/hoco-bs27-pulsar-wireless-speaker-banner-en.jpg' alt='banner' />
                        </div>
                        <div className="box">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ_nqYK7xKWzIrqcQqc-UtY-5WhA5U3GlNA&s' alt='banner' />
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="top">
                            <img src='https://omnigates.com/cdn/shop/files/main-banner_bluetooth-speaker_1200x.jpg?v=1613536127' alt='banner' />
                            <img src='https://i.pinimg.com/736x/f0/f5/a6/f0f5a6cc6bff547d2c7d5cbcb00bea85.jpg' alt='banner' />
                        </div>
                        <div className="bottom">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEr35nqobfL8j5izg-FkWXXbn-biLgDFJ1Q&s' alt='banner' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                        </div>
                        {newProduct.map((curElm) => (
                            <div className="productbox" key={curElm.id}>
                                <div className="img_box">
                                    <Link to={`/product/${curElm.id}`}>
                                        <img src={curElm.image} alt="" />
                                    </Link>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>${curElm.price}</p>
                                    <div className="icon">
                                        <button><IoMdEye /></button>
                                        <button><FaHeart /></button>
                                        <button onClick={() => dispatch(addToCart(curElm))}><FiShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>Featured Product</h2>
                        </div>
                        {featuredProduct.map((curElm) => (
                            <div className="productbox" key={curElm.id}>
                                <div className="img_box">
                                    <Link to={`/product/${curElm.id}`}>
                                        <img src={curElm.image} alt="" />
                                    </Link>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>${curElm.price}</p>
                                    <div className="icon">
                                        <button><IoMdEye /></button>
                                        <button><FaHeart /></button>
                                        <button onClick={() => dispatch(addToCart(curElm))}><FiShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>Top Product</h2>
                        </div>
                        {topProduct.map((curElm) => (
                            <div className="productbox" key={curElm.id}>
                                <div className="img_box">
                                    <Link to={`/product/${curElm.id}`}>
                                        <img src={curElm.image} alt="" />
                                    </Link>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>${curElm.price}</p>
                                    <div className="icon">
                                        <button><IoMdEye /></button>
                                        <button><FaHeart /></button>
                                        <button onClick={() => dispatch(addToCart(curElm))}><FiShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
