import './ProductScreen.css';
import axios from 'axios';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ProductScreen = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/items")
        .then(items => items.data)
        .then(items => setProduct(items[id]))
    }, [id])

    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                {/* <img src="https://a1ccimages.s3.ap-southeast-2.amazonaws.com/istockphoto-1328049157-170667a.jpg" alt="tshirt" /> */}
                <img src={product?.imageUrl} alt="product" />
        
            </div>
            <div className="left__info">
                <p className="left__name">{product?.name}</p>
                <p>Price: ${product?.price}</p>
                <p>Description: {product?.description}</p>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>${product?.price}</span></p>
                    <p>Quantity: 
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select></p>
                    
                    <p>
                        <button type="button" onClick={ () => {

                        }}>Add to cart</button>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductScreen