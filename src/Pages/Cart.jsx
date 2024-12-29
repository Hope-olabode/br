import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import Cap from "../assets/Images/Cap.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
export default function Cart() {
  const { cart, setCart } = useContext(Context);

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === productId
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
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity >= 20)
    );
  };
  return (
    <div className="mt-[96px]">
      <div className="mt-8">
        <h2 className="font-nexa-bold text-[24px] leading-[35px] mb-8">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between flex-col mb-2 border p-4 rounded"
              >
                {/* Item Info */}
                <div className="flex items-start gap-4  ">
                  <img
                    src={Cap}
                    className="w-[64px] md:w-[70px] lg:w-[134px] rounded-full"
                    alt=""
                  />
                  <div className="mb-6">
                    <div className="div mb-2">
                    <p className="font-medium font-poopins text-[16px] leading-[26px] mb-1">{item.name}</p>
                    <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A]">
                      Size:
                      {item.size === "XS"
                        ? " Extra Small"
                        : item.size === "S"
                        ? " Small"
                        : item.size === "M"
                        ? " Medium"
                        : item.size === "L"
                        ? " Large"
                        : item.size === "XL"
                        ? " Extra Large"
                        : ""}
                    </p>
                    </div>
                    <p className="font-medium font-poopins text-[20px] leading-[32px]">₦{item.price}</p>
                  </div>
                  
                </div>

                {/* Quantity Management */}
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() =>
                      item.quantity > 20
                        ? handleDecreaseQuantity(item._id)
                        : handleRemoveFromCart(item._id)
                    }
                    /* className={`px-3 py-1 rounded ${
                    item.quantity > 20
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                  }`} */
                  >
                    {item.quantity > 20 ? (
                      <img src={minus} className="" />
                    ) : (
                      <img src={dust} className="" />
                    )}
                  </button>

                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, Number(e.target.value))
                    }
                    className=" p-1 rounded w-16 text-center"
                  />

                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className=" text-white  rounded"
                  >
                    <img src={plus2} className="" />
                  </button>
                </div>

                {/* Total Price */}
                {
                  <span>
                    {item.quantity} x ${item.price.toFixed(2)} = $
                    {(item.quantity * item.price).toFixed(2)}
                  </span>
                }
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
