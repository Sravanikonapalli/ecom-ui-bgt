import { Component } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products';
import Cart from './components/Cart';
class App extends Component {
  state={
    cart:[]
  }

  
  addToCart = (product) => {
    this.setState((prevState) => {
       const existingItem = prevState.cart.find(item => item.id === product.id);
       if (existingItem) {
          return {
             cart: prevState.cart.map(item =>
                item.id === product.id ? { ...item, count: item.count + 1 } : item
             )
          };
       } else {
          return { cart: [...prevState.cart, { ...product, count: 1 }] };
       }
    });
 }

 decreaseItem = (product) => {
    this.setState((prevState) => {
       const updatedCart = prevState.cart.map(item =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
       ).filter(item => item.count > 0);

       return { cart: updatedCart };
    });
 }

  removeItem=product=>{
    this.setState((prev)=>({cart:prev.cart.filter(i=>i.id!==product.id)}))
  }

  render() {
    const {cart}=this.state
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products cart={cart} addToCart={this.addToCart}/>}/>
      <Route exact path="/cart" element={<Cart 
      cart={cart}
      addToCart={this.addToCart}
      decreaseItem={this.decreaseItem}
      removeItem={this.removeItem}
      />}/>
     </Routes>
    </BrowserRouter>
  )
}
}

export default App;
