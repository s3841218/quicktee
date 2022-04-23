import "./CartScreen.css";
import CartItem from "../components/CartItem";

const CartScreen = () => {
    return (
        <div className="cartscreen">
             <div className="cartscreen__left">
                <h2>Shopping Cart</h2>

                <CartItem />
             </div>
             <div className="carttscreen__right">
                 <div className="cartscreen__info">
                     <p>Subtotal (0) items</p>
                     <p>$4.99</p>
                 </div>
                 <button>
                     Proceed to checkout
                 </button>
                 </div>
        </div>
    );
};

export default CartScreen
