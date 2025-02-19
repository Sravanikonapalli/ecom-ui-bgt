import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TbMoodEmptyFilled } from "react-icons/tb";
import Header from './Header'
import '../styles//cart.css'
const Cart = ({ cart, addToCart, removeItem, decreaseItem }) => {
    const totalCount = cart.reduce((total, item) => total + item.count, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
 
    return (
      <>
      <Header/>
       <div className="cart-container">
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <>
             <p>Your cart is empty <span><TbMoodEmptyFilled color="red" size={26}/></span></p>
             <Link to="/products">
             <button className="btn-in-cart-page">shop now</button>
             </Link>
             </>
          ) : (
             <>
                <ul className="cart-items">
                   {cart.map((item) => (
                    <div>
                      <li key={item.id} className="each-cart">
                         <img src={item.images} alt={item.title} width="100" />
                         <p>{item.title}</p>
                         <button className="btn" onClick={() => decreaseItem(item)}>-</button>
                         <p>{item.count}</p>
                         <button className="btn" onClick={() => addToCart(item)}>+</button>
                         <p>${item.price * item.count}</p>
                         <button className="btn" onClick={() => removeItem(item)}><MdDelete size={20}/></button>
                      </li>
                      <hr/>
                    </div>
                   ))}
                </ul>
                <h2>Total Items: {totalCount}</h2>
                <h2>Total Price: ${totalPrice}</h2>
             </>
          )}
       </div>
       </>
    );
 };
 
 export default Cart;
 