import { useState,useEffect } from "react";
export default function Cart() {
  const [cart, setCart] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = products.find((p) => p.id === productId);
        return [...prevCart, { ...product, quantity: 20 }];
      }
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 20) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity >= 20)
    );
  };
  return(
    <div className="mt-[96px]">
      <div className="pt-[205px]">
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2 border p-4 rounded"
            >
              {/* Item Info */}
              <span className="font-semibold">{item.title}</span>
              
              {/* Quantity Management */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                  item.quantity > 20
                    ? handleDecreaseQuantity(item.id)
                    : handleRemoveFromCart(item.id)
                  }
                  className={`px-3 py-1 rounded ${
                    item.quantity > 20
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {item.quantity > 20 ? "-" : "Delete"}
                </button>

                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="border p-1 rounded w-16 text-center"
                />

                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <span>
                {item.quantity} x ${item.price.toFixed(2)} = $
                {(item.quantity * item.price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      </div>
      

    </div>
  )
}