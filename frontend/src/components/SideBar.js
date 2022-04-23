// import "./SideBar.css";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SideBar = ({ show, click }) => {
//   const sideBarSideBarClass = ["sideBarSideBar"];

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   const getCartCount = () => {
//     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
//   };

//   if (show) {
//     sideBarSideBarClass.push("show");
//   }

//   return (
//     <div className={sideBarSideBarClass.join(" ")}>
//       <ul className="sideBarSideBar__links" onClick={click}>
//         <li>
//           <Link to="/cart">
//             <i className="fas fa-shopping-cart"></i>
//             <span>
//               Cart{" "}
//               <span className="sideBarSideBar__cartbadge">{getCartCount()}</span>
//             </span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/">Shop</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;