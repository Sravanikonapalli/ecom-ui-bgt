import Header from './Header'
import ProductCard from './ProductCard'
import '../styles/products.css'
import {Component} from 'react'
class Products extends Component {
   state={
    products:[],
    searchQuery:'',
    loading:false,
}

componentDidMount() {
    this.fetchProducts()
}

fetchProducts=async ()=>{
    this.setState({loading:true})
    try {
        const response=await fetch("https://api.escuelajs.co/api/v1/products")
        if(!response.ok){
            throw new Error("Error to fetch details")
        }
        const data=await response.json()
        this.setState({products:data,loading:false})
    } catch (error) {
        this.setState({error:error.message,loading:false})
    }
}

handleSearch=event=>{
    this.setState({searchQuery:event.target.value})
}

render() {
    const {products,searchQuery,loading}=this.state
    const {cart,addToCart}=this.props
    const filteredProducts=products.filter((product)=>(
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    return (
        <>
            <Header cartCount={cart.length}/>
            <div className="products-container">
                <h1>Products</h1>
                <input 
                    type='text'
                    className="search-input"
                    placeholder='Search for products...'
                    value={searchQuery}
                    onChange={this.handleSearch}
                />
    
                {loading && <p className="loading-message">Loading...</p>}
    
                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} productDetails={product} addToCart={addToCart}/>
                        ))
                    ) : (
                        <p className="no-products-message">No products found</p>
                    )}
                </div>
            </div>
        </>
    );
    
}
}

export default Products