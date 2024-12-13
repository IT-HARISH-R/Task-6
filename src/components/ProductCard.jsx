import { useEffect, useState } from "react";

function Products({ cart, addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container mx-auto p-4 pt-[150px] pb-[50px]">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="border p-4 rounded shadow-md relative pb-20">
                            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <div className="flex justify-between p-2">
                                <p className="text-gray-700">${product.price}</p>
                                <p>Count: {product.rating.count}</p>
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="absolute bottom-[5%] left-[50%] translate-x-[-50%] mt-2 p-2
                                 lg:text-[12.6px] xl:text-[16px] 2xl:text-[20px] text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {cart.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="fixed bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">Processing...</p>

                )}
            </div>
        </div>
    );
}

export default Products;