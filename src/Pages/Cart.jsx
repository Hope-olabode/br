import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import Cap from "../assets/Images/Cap.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import ar from "../assets/Images/arrow-left-w.svg";
import { useNavigate } from "react-router-dom";
import { CartFunctions } from "../Components/Cart_Functions";
import { Toaster } from "sonner";

export default function Cart() {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    handleQuantityChange,
    likeProduct,
    unlikeProduct,
  } = CartFunctions();
  const { setCart, isLogin } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
    } else {
      navigate("/Log in");
    }
  }, []);

  // const handleAddToCart = (productId) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item._id === productId);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item._id === productId
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       const product = products.find((p) => p.id === productId);
  //       return [...prevCart, { ...product, quantity: 20 }];
  //     }
  //   });
  // };

  // const handleQuantityChange = (productId, newQuantity) => {
  //   if (newQuantity < 20) return;
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item._id === productId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  // const handleRemoveFromCart = (productId) => {
  //   setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  // };

  // const handleDecreaseQuantity = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart
  //       .map((item) =>
  //         item._id === productId
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //       .filter((item) => item.quantity >= 20)
  //   );
  // };
  console.log(cart);
  return (
    <div className="mt-[96px] py-6">
      <Toaster position="top-center" />
      <div className="pt-8 px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h2 className="font-nexa-bold text-[24px] leading-[35px] mb-8">Cart</h2>
        <div className="div lg:flex w-full">
          {cart.length > 0 ? (
            <ul className="lg:w-[60%] mb-10 lg:mb-0">
              {cart.map((item) => (
                <li
                  key={item._id}
                  className="flex justify-between flex-col py-4 mb-2 border-b-[1px] rounded"
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
                        <p className="font-medium font-poopins text-[16px] leading-[26px] mb-1">
                          {item.name}
                        </p>
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
                      <p className="font-medium font-poopins text-[20px] leading-[32px]">
                        ₦ {item.price}
                      </p>
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
                </li>
              ))}
            </ul>
          ) : (
            <div className="div lg:w-[60%]">
              <p className="mb-10 lg:mb-0 ">Your cart is empty.</p>
              <div className="h-[1px] w-full bg-[#DDDDDD] mb-6"></div>
            </div>
          )}
          <div className="w-[1px] hidden lg:block bg-[#DDDDDD] xl:mx-16 lg:mx-8"></div>
          <div className=" lg:w-[40%]">
            <div className="h-[1px] w-full hidden lg:block bg-[#DDDDDD] mb-6"></div>
            <p className="font-medium font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[38px]">
              Order Summary
            </p>
            <div className="div">
              {cart.map((item) => (
                <div className="div" key={item._id}>
                  <div className="h-[1px] w-full bg-[#DDDDDD] my-6"></div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-[14px] leading-[22px] lg:text-[20px] lg:leading-[38px]">
                      {item.name} X {item.quantity}
                    </p>
                    <p className="font-nexa-bold text-[20px] leading-[38px]">
                      ₦ {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-[#DDDDDD] my-6"></div>
            <div className="flex justify-between mb-2 items-center">
              <p className="font-nexa-bold text-[14px] leading-[22px] lg:text-[20px] lg:leading-[38px]">
                Subtotal
              </p>
              <p className="font-nexa-bold lg:text-[24px] lg:leading-[38px] text-[20px] leading-[32px]">
                ₦{" "}
                {cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Delivery fees not included yet
            </p>
            <button className="bg-[#E2063A] mt-6 text-white w-[100%] px-4 py-[13px] rounded-full relative overflow-hidden group  lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center">
              <span className="relative z-10 w-[100%]">
                <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">
                  Checkout
                </p>
              </span>
              <img
                src={ar}
                alt=""
                className="absolute lg:right-[25px] right-[14px] top-[50%] z-50 translate-y-[-50%]"
              />
              <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
