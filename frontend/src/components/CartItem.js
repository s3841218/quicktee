import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
            <img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='black shirt'/>
            </div>
            <Link to={`/product/${111}`} className="cartitem__name">
                <p>Black T-Shirt</p>
            </Link>
            <p className="cartitem__price">$25</p>

            <select className="cartitem__select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
            </select>

            <button className="cartitem__deletebtn">Delete</button>
        </div>
    );
};

export default CartItem;