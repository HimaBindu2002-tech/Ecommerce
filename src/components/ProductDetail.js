import React from "react";
import { useParams, Link } from "react-router-dom";
import Homeproduct from "./home_products";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Homeproduct.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <div className="container">
        <img src={product.image} alt={product.Name} className="product-image" />
        <div className="info">
          <h4>Category: {product.category}</h4>
          <h2>{product.Name}</h2>
          <p>
            This is a detailed description about the product. You can expand
            this with real data later.
          </p>
          <h3>Price: ${product.price}</h3>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <br />
          <Link to="/shop">← Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
