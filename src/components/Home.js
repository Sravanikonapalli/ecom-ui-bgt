import '../styles/home.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => (
    <>
        <Header />
        <div className="home-container">
            <h1>DISCOVER YOUR NEW FAVORITE PRODUCTS</h1>
            <p>
                Looking for something special? We've got you covered! Discover new products,
                trends, and more...
            </p>
            <Link to="/products">
                <button className="shopnow-btn">Shop Now</button>
            </Link>
        </div>
    </>
);

export default Home;
