import { BsShop } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import '../styles/home.css'
import { Link } from "react-router-dom";
const Header=({cartCount})=>(
    <div className="navbar">
        <Link to="/" className="logo">
        <BsShop size={40}/>
        </Link>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/cart"><li><CgShoppingCart size={30}/>{cartCount}</li></Link>
        </ul>
    </div>
)

export default Header