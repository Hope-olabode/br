import React, { useState } from "react";

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState(""); // No category selected by default
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

  const products = [
    { id: 1, title: "Essence Mascara Lash Princess", price: 9.99, category: "beauty", description: "A high-quality mascara for voluminous lashes." },
    { id: 2, title: "Eyeshadow Palette with Mirror", price: 19.99, category: "beauty", description: "A vibrant eyeshadow palette with a built-in mirror." },
    { id: 3, title: "Powder Canister", price: 14.99, category: "beauty", description: "A sleek powder canister for everyday use." },
    { id: 4, title: "Wireless Headphones", price: 59.99, category: "electronics", description: "High-quality wireless headphones with noise cancellation." },
    { id: 5, title: "Gaming Mouse", price: 29.99, category: "electronics", description: "A gaming mouse with ergonomic design and RGB lighting." },
    { id: 6, title: "LED Desk Lamp", price: 24.99, category: "home", description: "A modern LED desk lamp with adjustable brightness." },
  ];

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

  const filteredProducts =
    filterCategory === ""
      ? []
      : products.filter((product) => product.category === filterCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-4">
      {selectedProduct ? (
        // Product Details Page
        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>
          <div className="border rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-4">{selectedProduct.title}</h1>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-green-600 font-bold mb-4">
              Price: ${selectedProduct.price.toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(selectedProduct.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        // Product List Page
        <>
          <h1 className="text-2xl font-bold mb-4">Product List</h1>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setFilterCategory("beauty")}
              className={`px-4 py-2 rounded ${
                filterCategory === "beauty" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Beauty
            </button>
            <button
              onClick={() => setFilterCategory("electronics")}
              className={`px-4 py-2 rounded ${
                filterCategory === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Electronics
            </button>
            <button
              onClick={() => setFilterCategory("home")}
              className={`px-4 py-2 rounded ${
                filterCategory === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Home
            </button>
          </div>

          {/* Product Display */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">Click on a category to view products.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow flex flex-col items-center cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                  <p className="text-green-600 font-bold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    Category: {product.category}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Cart Summary */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.title}</span>
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
        </>
      )}
    </div>
  );
};

export default ProductList;
