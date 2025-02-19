import "../styles/productcard.css";

const ProductCard = ({ productDetails, addToCart }) => {
  if (!productDetails) {
    return <p>Loading product...</p>;
  }

  const { title, price, description, images } = productDetails;

  return (
    <div className="product-card">
      <img src={images[0]} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">Price: ${price}</p>
      <button className="add-to-cart" onClick={() => addToCart(productDetails)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
