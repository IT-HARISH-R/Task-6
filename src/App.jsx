import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from "./components/CartItem";
import Products from "./components/ProductCard";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(item => item.id === product.id);
            if (itemInCart) {
                return prevCart.filter(item => item.id !== product.id);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, delta) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <Router 
        future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true
        }}>
            <nav className="fixed w-full z-50 p-4 bg-gray-800 text-white">
              <div className="container mx-auto">
                <ul className="flex justify-between p-4 text-2xl">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/cart">Cart {cart.length}</Link></li>
                </ul>
              </div>
            </nav>
            <Routes>
                <Route path="/" element={<Products cart={cart} addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
                />
            </Routes>
        </Router>
    );
};

export default App;