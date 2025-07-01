import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authContext";
import Cap from "../assets/Images/Cap.svg";
import sbike from "../assets/Images/sbike.svg";
import bbike from "../assets/Images/bbike.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import ar from "../assets/Images/arrow-left-w.svg";
import PM from "../assets/Images/PaystackMobile.svg";
import PD from "../assets/Images/PaystackDesktop.svg";
import FM from "../assets/Images/FlutterMobile.svg";
import FD from "../assets/Images/FlutterDesktop.svg";

import { CartFunctions } from "../Components/Cart_Functions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "./Toast";
import { toast as sonnerToast, Toaster } from "sonner";

import { usePaystackPayment } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import { getPaystackConfig } from "../Components/paystack_config";
import { getFlutterwaveConfig } from "../Components/flutterwave_config";
const schema = z
  .object({
    Email: z
      .string()
      .min(1, "Email is required") // Ensures the field is not empty
      .email("Incorrect email"), // Validates email format
    Phone_No: z
      .string()
      .min(1, "Phone number is required") // Ensures it's not empty
      .regex(/^\+?\d{10,15}$/, "Invalid phone number format"), // Validates phone number
    Full_Name: z.string().min(1, "Name is Required"),
    Shipping_Address: z.string().optional(),
  })
  .refine(
    (data) =>
      data.Option !== "option1" ||
      (data.Shipping_Address && data.Shipping_Address.trim() !== ""),
    {
      path: ["Shipping_Address"],
      message: "Shipping Address is required ",
    }
  );

export default function Cart() {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    handleQuantityChange,
  } = CartFunctions();
  const { user, products } = useContext(AuthContext);
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(false);
  const [payment, setPayment] = useState(false);
  const [data, setData] = useState(false);
  const handleSelect = (value) => {
    setSelected(value);
  };
  const [option, setOption] = useState("option1"); // Default to 'option1'

  /* useEffect(() => {
    if (isLogin) {
    } else {
      navigate("/Log in");
    }
  }, []); */
  console.log(cart);
  const getCartProducts = () => {
    return products
      .filter((product) =>
        cart.some((cartItem) => cartItem._id === product._id)
      )
      .map((product) => {
        const cartItem = cart.find((item) => item._id === product._id);
        return { ...product, quantity: cartItem.quantity, size: cartItem.size };
      });
  };
  // Usage example
  const cartProducts = getCartProducts();
  console.log(cartProducts);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    defaultValues: {
      Full_Name: user?.Full_Name || "",
      Phone_No: user?.Phone_No || "",
      Email: user?.Email || "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (user) {
      reset({
        Full_Name: user?.Full_Name || "",
        Phone_No: user?.Phone_No || "",
        Email: user?.Email || "",
      });
    }
  }, [user, reset]);

  const next = (data) => {
    console.log(data);
    let Data = { ...data };
    if (option === "option1") {
      if (selected) {
        Data = { ...data, Shipping: selected };
        setData(Data);
        console.log(Data);
        window.scrollTo(0, 0);
        setPayment(true);
        setStep(false);
      } else {
        customToast({
          color: "#E2063A",
          message: "select a shipping information",
        });
      }
    } else {
      Data = {
        ...data,
        Shipping: "Pick up",
        Pickup_Location: "32, western avenue ojuelegba, Lagos, Nigeria.",
      };
      setData(Data);
      console.log(Data);
      window.scrollTo(0, 0);
      setPayment(true);
      setStep(false);
    }
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      customToast({
        color: "#E2063A",
        message: error.message,
      });
    });
  };

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast color={toastProps.color} message={toastProps.message} />
    ));
  }

  const step2 = () => {
    setStep(true);
  };

  console.log(cart);
  console.log(cartProducts)

  const shipping = [
    {
      img: sbike,
      type: "Standard Shipping",
      price: "₦3000",
      duration: " 3-5 business days",
      desktop: "₦3000 / 3-5 business days",
      number: "one",
    },
    {
      img: bbike,
      type: "Expedited Shipping",
      price: "₦6000",
      duration: " 2 business days",
      desktop: "₦6000 / 2 business days",
      number: "two",
    },
  ];

  const paystackConfig = getPaystackConfig(cartProducts);
  const flutterwaveConfig = getFlutterwaveConfig(cartProducts);
  const initializePayment = usePaystackPayment(paystackConfig);
  const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    customToast({
      color: "#E2063A",
      message: "Transaction was not completed",
    });
  };

  // const fwConfig = {

  //   text: 'Flutterwave',
  //   className: "font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]",
  //   callback: (response) => {
  //     console.log(response);
  //     closePaymentModal() // this will close the modal programmatically
  //   },
  //   onClose: () => { },
  // };

  

  return (
    <div className="mt-[96px] py-6">
      <Toaster position="top-center" expand={true} />
      {payment ? (
        ""
      ) : (
        <form onSubmit={handleSubmit(next, onError)}>
          <div className="pt-8 px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
            <h2 className="font-nexa-bold text-[24px] leading-[35px] mb-8">
              Cart
            </h2>
            <div className="div lg:flex w-full">
              {step ? (
                <div className="lg:w-[60%] mb-10 lg:mb-0">
                  <div className="div mb-[56px]">
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px] mb-6">
                      Customer Information
                    </p>

                    <div className="lg:flex gap-4">
                      <input
                        type="text"
                        {...register("Full_Name")}
                        defaultValue={user.Full_Name}
                        placeholder="Full name"
                        className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] mb-2"
                      />
                      <input
                        type="tel"
                        {...register("Phone_No")}
                        defaultValue={user.Phone_No}
                        placeholder="Phone number"
                        className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
                      />
                    </div>
                    <input
                      type="text"
                      {...register("Email")}
                      defaultValue={user.Email}
                      placeholder="Location"
                      className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] mb-2 lg:mb-0"
                    />
                  </div>
                  <div className="div">
                    <div className="div">
                      <div className="lg:flex gap-4 justify-between">
                        <div className="div">
                          <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px] mb-3">
                            Shipping Information
                          </p>
                          <p className="font-poopins text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px] mb-6 text-[#9A9A9A]">
                            Delivery is country wide in Nigeria
                          </p>
                        </div>

                        <div className="flex gap-4 h-12 mb-4 lg:mb-0">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="choice"
                              value="option1"
                              className="accent-[#E2063A] w-4 h-4"
                              checked={option === "option1"}
                              onChange={(e) => setOption(e.target.value)}
                            />
                            <span>Delivery</span>
                          </label>

                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="choice"
                              value="option2"
                              className="accent-[#E2063A] w-4 h-4"
                              checked={option === "option2"}
                              onChange={(e) => setOption(e.target.value)}
                            />
                            <span>Pick up</span>
                          </label>
                        </div>
                      </div>
                      <div className="div">
                        {/* Conditional Display */}
                        {option === "option1" && (
                          <input
                            type="text"
                            {...register("Shipping_Address")}
                            placeholder="Shipping Address"
                            value={option === "option1" ? "" : "FLY"}
                            className="border-2 border-[#DDDDDD] mb-4 outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
                          />
                        )}

                        {option === "option2" && (
                          <div className="di">
                            <p className="font-poopins text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                              Pick up location
                            </p>
                            <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] font-medium">
                              32, western avenue ojuelegba, Lagos, Nigeria.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {option === "option1" && (
                      <div className="flex gap-2 lg:gap-6">
                        {shipping.map((item, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-[32px] border-[2px] border-[#DDDDDD] w-full md:text-center"
                            onClick={() => handleSelect(item.type)}
                          >
                            <div className="flex justify-between items-center md:justify-cente w-full  ">
                              <img
                                src={item.img}
                                className="md:relative top-0 left-[50%] lg:w-[72px] md:translate-x-[-50%]"
                                alt=""
                              />
                              <div className="lg:relative top-0 right-0">
                                <span
                                  className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full lg:w-5 lg:h-5 ${
                                    selected === item.type
                                      ? "bg-[#E2063A]"
                                      : "border-2 border-[#9A9A9A]"
                                  }`}
                                >
                                  {selected === item.type && (
                                    <svg
                                      className="w-4 h-4 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l3.086 3.086 6.793-6.793a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="font-poopins font-medium text-[12px] leading-[18px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">
                                {item.type}
                              </p>
                              <p className="font-poopins font-medium text-[12px] leading-[18px] lg:hidden my-[4px]">
                                {item.price}
                              </p>
                              <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A] lg:hidden">
                                {item.duration}
                              </p>
                              <p className="hidden lg:block font-poopins font-medium lg:text-[14px] lg:leading-[22px]">
                                {item.desktop}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : cart.length > 0 ? (
                <ul className="lg:w-[60%] mb-10 lg:mb-0">
                  {cartProducts.map((item) => (
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
                              {item.size === "M"
                                ? " Medium"
                                : item.size === "L"
                                ? " Large"
                                : item.size === "XL"
                                ? " Extra Large"
                                : item.size === "XXL"
                                ? " Extra Extra Large"
                                : " Large"}
                            </p>
                          </div>
                          <p className="font-medium font-poopins text-[20px] leading-[32px]">
                            ₦ {item.price.toLocaleString()}
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
                            handleQuantityChange(
                              item._id,
                              Number(e.target.value)
                            )
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
                <p className="font-medium font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[38px]">
                  Order Summary
                </p>
                <div className="div">
                  {cartProducts.map((item) => (
                    <div className="div" key={item._id}>
                      <div className="h-[1px] w-full bg-[#DDDDDD] my-6"></div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px] leading-[22px] lg:text-[20px] lg:leading-[38px]">
                          {item.name} X {item.quantity}
                        </p>
                        <p className="font-nexa-bold text-[20px] leading-[38px]">
                          ₦ {(item.price * item.quantity).toLocaleString()}
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
                    {cartProducts
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toLocaleString()}
                  </p>
                </div>
                <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
                  Delivery fees not included yet
                </p>
                {step ? (
                  <button
                    type="submit"
                    className="bg-[#E2063A] mt-6 text-white w-[100%] px-4 py-[13px] rounded-full relative overflow-hidden group  lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"
                  >
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
                ) : (
                  <div
                    onClick={step2}
                    type="button"
                    disabled={cart?.length === 0}
                    className={`${
                      cart?.length === 0
                        ? "bg-[hsl(346,95%,87%)]"
                        : "bg-[#e00639]"
                    } mt-6 text-white w-[100%] px-4 py-[13px] rounded-full relative overflow-hidden group  lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center`}
                  >
                    <span className="relative z-10 w-[100%]">
                      <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">
                        Next
                      </p>
                    </span>
                    <img
                      src={ar}
                      alt=""
                      className="absolute lg:right-[25px] right-[14px] top-[50%] z-50 translate-y-[-50%]"
                    />
                    <span
                      className={`${
                        cart?.length === 0
                          ? "bg-[#666666]"
                          : "bg-[#000000] group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]"
                      } absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8  transition-all duration-[1s] ease-in-out   rounded-full lg:right-4 lg:h-10 lg:w-10`}
                    ></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
      {payment ? (
        <div className="lg:flex gap-6 flex-row pt-8 px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
          <div className="lg:w-[60%]">
            <div className="div">
              <h1 className="font-nexa-bold text-[24px] leading-[35px] mb-6 lg:text-[36px] lg:leading-[48px]">
                Checkout
              </h1>
              <div className="div">
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-4">
                  Customer Information
                </p>
                <div className="div">
                  <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                    Full Name
                  </p>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                    {data.Full_Name}
                  </p>
                </div>
                <div className="mt-4 lg:flex gap-40">
                  <div className="div">
                    <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                      Email
                    </p>
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                      {data.Email}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                      Phone Number
                    </p>
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                      {data.Phone_No}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#DDDDDD] h-[2px] w-full mt-4"></div>

            <div className="mt-6">
              <div className="div">
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-4">
                  Shipping Information
                </p>
                <div className="div">
                  <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                    Shipping Method
                  </p>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                    {data.Shipping}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-2">
                    {data.Shipping === "Pick up"
                      ? "Pickup Address"
                      : "Shipping Address"}
                  </p>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                    {data.Pickup_Location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%]">
            <div className="p-4 bg-[#222222] lg:mt-0 mt-8 rounded-[24px] lg:rounded-[32x] ">
              <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-4">
                Order Summary
              </p>
              <div className="flex flex-col gap-2">
                {cartProducts.map((item) => (
                  <div className="div" key={item._id}>
                    <div className="flex justify-between items-center">
                      <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                        {item.name} X {item.quantity}
                      </p>
                      <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                        ₦ {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                Short sleeve white hoodie ×20
              </p>
              <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                202,000
              </p> */}

              <div className="my-2 h-[2px] bg-black w-full"></div>

              <div className="flex flex-row justify-between items-center">
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                  Shipping Cost
                </p>
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                  ₦ 202,000
                </p>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                  VAT
                </p>
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] text-[#DDDDDD]">
                  ₦ 202,000
                </p>
              </div>

              <div className="my-2 h-[4px] bg-black w-full"></div>

              <div className="flex flex-row justify-between items-center">
                <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[35px] text-[#9A9A9A]">
                  Order Total
                </p>
                <p className="nexa-bold text-[24px] leading-[35px] text-[#9A9A9A]  lg:text-[32px] lg:leading-[42px]">
                  ₦{" "}
                  {(
                    cartProducts.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    ) +
                    202000 +
                    202000
                  ).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] text-[#9A9A9A] mb-3">
                Payment Method
              </p>
              <div className="flex justify-between">
                <div
                  className="div border-[#DDDDDD] mb-4 lg:mb-2 border-2 rounded-[16px] p-4"
                  onClick={() => {
                    initializePayment(onSuccess, onClose);
                  }}
                >
                  <img className="lg:hidden" src={PM} alt="" />
                  <img className="hidden lg:block" src={PD} alt="" />
                  <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
                    Paystack
                  </p>
                </div>
                <div
                  className="div border-[#DDDDDD] mb-4 lg:mb-2 border-2 rounded-[16px] p-4"
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                >
                  <img className="lg:hidden" src={FM} alt="" />
                  <img className="hidden lg:block" src={FD} alt="" />
                  <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
                    Flutterwave
                  </p>
                </div>
              </div>
              <p className="font-poopins font-medium text-[12px] leading-[20px]  text-[#9A9A9A] mt43">Using this option you will be redirected back to the website once payment has been made and confirmed</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
