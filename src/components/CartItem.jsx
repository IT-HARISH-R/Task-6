const Cart = ({ cart, updateQuantity, removeFromCart }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const finalPrice = totalPrice * 0.9;

    return (
        <div className="p-4 pt-[150px] container mx-auto  ">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <h2 className="text-xl font-semibold pb-4">Total Price: ${finalPrice.toFixed(2)}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
                {/* {console.log(cart)} */}
                {cart.map(item => (
                    <div key={item.id} className="border p-4 rounded shadow-md mb-4">
                        <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <div className="flex justify-between p-4">
                        <p className="text-gray-700">${item.price} x {item.quantity}</p>
                        <h1>Count: {item.rating.count}</h1>
                        </div>
                        <div className="flex gap-2 mt-2 justify-center">
                            <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-10 text-3xl  bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                +
                            </button>
                            <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-10 text-3xl  bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                -
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cart;