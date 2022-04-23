import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({id, name, imageUrl, description, price, countInStock}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt="shirt"/>
            {/* <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80" alt="tshirt" /> */}
        

        <div className="product__info">
            <p className="info_name">{name}</p>
            <p className="info__description">
                {description}
            </p>
            <p className="info__price">${price}</p>
            <Link to={`/product/${id}`} className="info__button">
                View
            </Link>
        </div>
        </div>
    );

};

export default Product;