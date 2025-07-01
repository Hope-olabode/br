import { useParams } from "react-router-dom";
import Cap from "../assets/Images/Cap.svg";
import { useState, useEffect, useContext } from "react";
import cart2 from "../assets/Images/cart2.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import Touch from "../Components/Touch";
import { AuthContext } from "../context/authContext";
import Loader from "../Components/Loader";
import axios from "axios";
import { CartFunctions } from "../Components/Cart_Functions";

function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [size, setSize] = useState(() => {
    const stored = localStorage.getItem(`selectedSize_${id}`);
    return stored || "L";
  });

  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    handleQuantityChange,
  } = CartFunctions(size);
  const { setCart, products } = useContext(AuthContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const products = [
  //   { id: 1, name: 'Product A', description: 'Description for Product A' },
  //   { id: 2, name: 'Product B', description: 'Description for Product B' },
  // ];

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const product = products.find((p) => p._id === String(id));
  console.log(product);
  console.log(products);
  console.log(id);

  if (!product) return <p className="mt-[96px]">Product not found</p>;

  // const handleAddToCart = async (productId) => {
  //   try {
  //     console.log(cart);
  //     const existingProduct =
  //       cart.length > 0 && cart.some((item) => item._id === productId);
  //     console.log(existingProduct);
  //     if (existingProduct) {
  //       const product = products.find((p) => p._id === productId);
  //       const newCart = { ...product, quantity: 1 };
  //       const updatedCart = cart.map((item) =>
  //         item._id === productId
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //       /* console.log(updatedCart) */
  //       await axios.post(`    ${import.meta.env.VITE_BACKEND_URL}/cart/`, newCart, {
  //         withCredentials: true,
  //       }); // Added credentials
  //       setCart(updatedCart);

  //       localStorage.setItem("cart", JSON.stringify(updatedCart));
  //       } else {
  //         const product = products.find((p) => p._id === productId);
  //         const newCart1 = { ...product, quantity: 20 };
  //         const newCart = [...cart, { ...product, quantity: 20 }];
  //         console.log(newCart)
  //         await axios.post("    ${import.meta.env.VITE_BACKEND_URL}/cart", newCart1, { withCredentials: true }); // Added credentials
  //         setCart(newCart);

  //         localStorage.setItem("cart", JSON.stringify(newCart));
  //     }
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //     const message = error.response?.data?.message || "An error occurred";
  //     displayMsg(message);
  //   }
  // };

  // const handleQuantityChange = async (productId, newQuantity) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item._id === productId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );

  //   if (newQuantity < 20) return;
  //   try {
  //     const updatedCart = cart.map((item) =>
  //       item._id === productId ? { ...item, quantity: newQuantity } : item
  //     );
  //     console.log(updatedCart)
  //     await axios.put(`    ${import.meta.env.VITE_BACKEND_URL}/cart/${productId}`, { quantity: newQuantity }, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error updating quantity:", error);
  //   }
  // };

  // const handleRemoveFromCart = async (productId) => {
  //   try {
  //     const updatedCart = cart.filter((item) => item._id !== productId);
  //     await axios.delete(`    ${import.meta.env.VITE_BACKEND_URL}/cart/${productId}`, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error removing from cart:", error);
  //   }
  // };

  // const handleDecreaseQuantity = async (productId) => {
  //   try {
  //     const product = products.find((p) => p._id === productId);
  //     const newCart = { ...product, quantity: -1 };
  //     const updatedCart = cart.map((item) =>
  //       item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
  //     );
  //     /* console.log(updatedCart) */
  //     await axios.post(`    ${import.meta.env.VITE_BACKEND_URL}/cart/`, newCart, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     setCart(updatedCart);
  //     setCart2(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error decreasing quantity:", error);
  //   }
  // };

  const setsize = (s, productId) => {
    console.log(s);
    console.log(productId);
    setSize(s);
    localStorage.setItem(`selectedSize_${productId}`, s);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, size: s } : item
      )
    );
  };

  return (
    <div className="div">
      {loading ? <Loader /> : ""}
      <div className="mt-[96px] py-14  px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]  lg:mt-[176px]">
        <div className="flex flex-col md:items-start md:flex-row md:gap-10">
          <div className="md:w-[50%] md:flex h-full gap-4">
            {/* Main Image */}
            <div
              className="flex w-full items-center justify-center md:order-2 cursor-pointer"
              onClick={() => handleImageClick(product.img1)}
            >
              <div className="max-w-[450px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
                <img
                  className="rounded-full   lg:w-[450px] lg:h-[450px]"
                  src={product.img1}
                  alt="Main"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-row gap items-center justify-center pl-3 md:flex-col md:w-[112px] mt-4 md:mt-0">
              {[product.img2, product.img3, product.img4].map((img, index) => (
                <div
                  key={index}
                  className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] rounded-[30px] overflow-hidden p-1 md:m-4 flex items-center justify-center bg-white"
                >
                  <img
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleImageClick(img)}
                  />
                </div>
              ))}
            </div>

            {/* Modal */}
            {showModal && (
              <div
                onClick={closeModal}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-[90vw] max-h-[90vh] rounded-xl"
                />
              </div>
            )}
          </div>

          <div className="p-4 mb-5 md:w-[50%] md:mb-0 md pt-0 flex flex-col">
            <h1 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-5 md:order-1">
              {product.name}
            </h1>
            <div className="flex flex-row items-center justify-between font-nexa-bold text-[20px] leading-[32px] lg:text-[36px] lg:leading-[48px] mb-5 md:order-4 md:mt-[58px]">
              <p>₦ {product.price}</p>
              <div className="flex items-center  justify-center space-x-2 ">
                {cart.find((item) => item._id === product._id) ? (
                  <button
                    onClick={() =>
                      cart.find((item) => item._id === product._id).quantity >
                      20
                        ? handleDecreaseQuantity(product._id)
                        : handleRemoveFromCart(product._id)
                    }
                  >
                    {cart.find((item) => item._id === product._id).quantity >
                    20 ? (
                      <img src={minus} className="" />
                    ) : (
                      <img src={dust} className="" />
                    )}
                  </button>
                ) : (
                  <div
                    className="div h-12 font-nexa-light text-[14px] leading-[22px] text-white bg-[#E2063A] rounded-full flex items-center pl-4 pr-2 gap-12 md:h-[72px] md:font-nexa-bold lg:text-[16px] lg:leading-[26px] md:gap-5 md:pl-10 md:pr-4"
                    onClick={() => handleAddToCart(product._id, size)}
                  >
                    Add to cart
                    <img src={cart2} alt="" />
                  </div>
                )}

                {cart.find((item) => item._id === product._id) ? (
                  <input
                    type="number"
                    value={
                      cart.find((item) => item._id === product._id).quantity
                    }
                    onChange={(e) =>
                      handleQuantityChange(product._id, Number(e.target.value))
                    }
                    className=" p-1 rounded w-16 text-center font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]"
                  />
                ) : (
                  ""
                )}

                {cart.find((item) => item._id === product._id) ? (
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className=" text-white  rounded"
                  >
                    <img src={plus2} className="" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="md:order-3 md:mt-5">
              <p>size</p>
              <div className="flex flex-row gap-3 mt-2">
                <p
                  className={`font-nexa-bold hover:scale-105 transition-transform text-[14px] cursor-pointer leading-[24px] lg:text-[16px] lg:leading-[26px] rounded-full border-2 px-[20px] py-[13px] text-center lg:w-[80px] lg:px-[28px] lg:py-[25px] ${
                    size === "M" ? "border-black" : ""
                  }`}
                  onClick={() => setsize("M", product._id)}
                >
                  M
                </p>
                <p
                  className={`font-nexa-bold hover:scale-105 transition-transform text-[14px] cursor-pointer leading-[24px] lg:text-[16px] lg:leading-[26px] rounded-full border-2 px-[20px] py-[13px] text-center lg:w-[80px] lg:px-[28px] lg:py-[25px] ${
                    size === "L" ? "border-black" : ""
                  }`}
                  onClick={() => setsize("L", product._id)}
                >
                  L
                </p>
                <p
                  className={`font-nexa-bold hover:scale-105 transition-transform text-[14px] cursor-pointer leading-[24px] lg:text-[16px] lg:leading-[26px] rounded-full border-2 px-[15px] py-[13px] lg:px-[28px] lg:py-[25px] ${
                    size === "XL" ? "border-black" : ""
                  }`}
                  onClick={() => setsize("XL", product._id)}
                >
                  XL
                </p>
                <p
                  className={`font-nexa-bold hover:scale-105 transition-transform text-[14px] cursor-pointer leading-[24px] lg:text-[16px] lg:leading-[26px] rounded-full border-2 px-[15px] py-[13px] lg:px-[28px] lg:py-[25px] ${
                    size === "XXL" ? "border-black" : ""
                  }`}
                  onClick={() => setsize("XXL", product._id)}
                >
                  XXL
                </p>
              </div>
            </div>
            <div className="h-[1px] my-5 w-[100%] bg-[#DDDDDD] md:hidden"></div>
            <div className="md:order-2">
              <p className="font-poopins font-medium text-[14px] leading-[22px] text-[#9A9A9A] mb-5 md:hidden">
                Description
              </p>
              <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
                {product.discription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Touch />
    </div>
  );
}

export default ProductDetail;
