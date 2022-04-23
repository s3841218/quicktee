import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                <img src="https://a1ccimages.s3.ap-southeast-2.amazonaws.com/istockphoto-1328049157-170667a.jpg" alt="tshirt" />
        
            </div>
            <div className="left__info">
                <p className="left__name">Product 1</p>
                <p>Price: $4.99</p>
                <p>Description: Lorem Ipsum</p>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>$4.99</span></p>
                    <p>Quantity: 
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select></p>
                    
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductScreen