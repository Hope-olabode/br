import wc from "../assets/Images/wcircle.svg";
import ba from "../assets/Images/barrow.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast as sonnerToast, Toaster } from "sonner";
import Toast from "./Toast";
import { useNavigate } from "react-router-dom";
import hpas from "../assets/Images/hpas.svg";
import hpas2 from "../assets/Images/hpas2.svg";
import hpas3 from "../assets/Images/hpas3.svg";
import hpas4 from "../assets/Images/hpas4.svg";

const schema = z.object({
  Email: z.string(), // You can add .email("Incorrect email") if needed
});

export default function ResetPassword() {
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmOtp, setConfirmOtp] = useState(false);
  const [isFocused, setIsFocused] = useState("");
  const [hidden, setHidden] = useState(true);

  const inputRefs = useRef([]); // used for OTP focus management

  // Email form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // NEW: Setup react-hook-form for the reset password form
  const {
    register: resetRegister,
    handleSubmit: handleResetSubmit,
    formState: { errors: resetErrors },
  } = useForm({
    defaultValues: { Password: "" },
  });

  const navigate = useNavigate();
  const Email = watch("Email");
  const Password = watch("Password"); // watch input value

  useEffect(() => {
    setIsFocused(Password && Password.trim().length > 0);
  }, [Password]);

  useEffect(() => {
    // Optionally you can add focus effects based on Email value here
  }, [Email]);

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast color={toastProps.color} message={toastProps.message} />
    ));
  }

  const onSubmit = async (data) => {
    console.log("Email data:", data.Email);
    const Email = data.Email;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/email`,
        { Email },
        { withCredentials: true }
      );
      setConfirmEmail(true);
      setEmail(data.Email);
      customToast({
        color: "#000000",
        message: response.data.message,
      });
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || "An error occurred";
      console.log(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  // OTP form using react-hook-form
  const {
    register: otpRegister,
    handleSubmit: handleOtpSubmit,
    watch: watchOtp,
    setValue: setOtpValue,
  } = useForm({
    defaultValues: {
      otp: ["", "", "", ""],
    },
  });

  const otpValues = watchOtp("otp");
  const isOtpComplete =
    otpValues && otpValues.every((val) => val && val.trim() !== "");

  const onOtpSubmit = async (data) => {
    const otpString = data.otp.join("");
    console.log("OTP Submitted:", otpString);
    const Data = { Email: localStorage.getItem("Email"), otp: otpString };
    // Process your OTP submission logic here
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/otp`,
        Data,
        { withCredentials: true }
      );
      setConfirmOtp(true);
      customToast({
        color: "#000000",
        message: response.data.message,
      });
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || "An error occurred";
      console.log(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  // Focus management for OTP inputs
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle pasting into the OTP inputs
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
        setOtpValue(`otp.${index}`, char);
      }
    });
  };

  const onResetPassword = async (data) => {
    console.log("Reset Password Data:", data);
    console.log(email);
    try {
      // Call your API endpoint to reset the password
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/reset`,
        { Email: email, newPassword: data.Password },
        { withCredentials: true }
      );
      // Handle success (for example, show a toast or navigate)
      customToast({
        color: "#000000",
        message: response.data.message,
      });
      setTimeout(() => {
        navigate("/Log in");
      }, 2000);
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      console.log(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  return (
    <div className="mt-[96px] flex flex-col items-center justify-center">
      <Toaster position="top-center" />
      <div className="mt-[120px] text-center max-w-[482px]">
        <h1 className="font-nexa-bold text-[36px] leading-[48px] lg:text-[56px] lg:leading-[78px] mb-2 lg:mb-6">
          Reset Password
        </h1>
        {/* Email Form */}
        <form
          className={`${confirmEmail ? "hidden" : "block"}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] mb-14">
            Enter your email
          </p>
          <input
            className="w-full mt-4 h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px]"
            {...register("Email")}
            placeholder="Email Address"
            type="string"
            id="Email"
          />
          {/* <button
            type="submit"
            className="bg-[#E2063A] my-4 text-white rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full w-[100%]"
            disabled={!Email || Email.trim().length === 0}
          >
            <div className="relative px-4 py-[13px] lg:py-[23px] lg:px-0">
              <span className="relative z-10">
                <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                  Submit
                </p>
              </span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                <img
                  src={wc}
                  alt="Icon"
                  className={`${
                    !Email || Email.trim().length === 0 ? "block" : "hidden"
                  } lg:h-10`}
                />
                <img
                  src={ba}
                  alt="Icon"
                  className={`${
                    !Email || Email.trim().length === 0 ? "hidden" : "block"
                  } lg:h-10`}
                />
              </div>
            </div>
          </button> */}
          <button
            type="submit"
            className="bg-[#E2063A] my-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
            disabled={Email?.trim()?.length === 0}
          >
            <div
              className={`${
                Email?.trim()?.length === 0
                  ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                  : ""
              } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
            >
              <span className="relative z-10 ">
                <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                  Submit
                </p>
              </span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                <img
                  src={wc}
                  className={`${
                    Email?.trim()?.length === 0 ? "hi" : "hidden"
                  } lg:h-10`}
                />
                <img
                  src={ba}
                  className={`${
                    Email?.trim()?.length === 0 ? "hidden" : "block"
                  } lg:h-10`}
                />
              </div>
            </div>
          </button>
        </form>
        {/* OTP Form */}
        {confirmEmail && (
          <div className={`${confirmOtp ? "hidden" : "block"}`}>
            <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] mb-14">
              Enter the OTP sent to johndoe@gmail.com
            </p>
            <form onSubmit={handleOtpSubmit(onOtpSubmit)}>
              <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                {Array(4)
                  .fill(0)
                  .map((_, index) => {
                    // Destructure the ref and other methods from register
                    const { ref, ...rest } = otpRegister(`otp.${index}`, {
                      required: true,
                    });
                    return (
                      <input
                        type="text"
                        maxLength="1"
                        placeholder="0"
                        key={index}
                        required
                        className="w-[72px] h-[72px] border-2 border-[#DDDDDD] focus:border-[#E2063A] focus:outline-none active:border-[#E2063A] text-[#9A9A9A] text-center rounded-full font-poopins text-[16px] leading-[26px]"
                        {...rest}
                        ref={(e) => {
                          inputRefs.current[index] = e;
                          ref(e);
                        }}
                        onInput={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    );
                  })}
              </div>
              <button
                type="submit"
                className="bg-[#E2063A] mb-4 mt-14 text-white  rounded-full relative overflow-hidden group lg:h-[72px] w-[200px]"
                disabled={!isOtpComplete}
              >
                <div
                  className={`${
                    !isOtpComplete
                      ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                      : ""
                  } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
                >
                  <span className="relative z-10 ">
                    <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                      Submit
                    </p>
                  </span>
                  <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                    <img
                      src={wc}
                      className={`${!isOtpComplete ? "hi" : "hidden"} lg:h-10`}
                    />
                    <img
                      src={ba}
                      className={`${
                        !isOtpComplete ? "hidden" : "block"
                      } lg:h-10`}
                    />
                  </div>
                </div>
              </button>
            </form>
          </div>
        )}

        <div className={`${confirmOtp ? "block" : "hidden"}`}>
          <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] mb-14">
            Enter Your new Password
          </p>
          <form
            form
            autoComplete="off"
            onSubmit={handleResetSubmit(onResetPassword)}
          >
            <div
              className={`flex items-center content-center h-12 border-2 border-[#DDDDDD] rounded-full mt-4  pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
                isFocused ? "bg-black text-white border-black border-2" : ""
              }`}
            >
              <input
                name="Password"
                className={`w-full pl-6 email rounded-l-full h-full active:border-none focus:outline-none ${
                  isFocused ? "bg-black text-white placeholder:text-white" : ""
                }`}
                {...resetRegister("Password")}
                placeholder="Password"
                type={hidden ? "password" : "text"}
                autoComplete="off"
              />
              {hidden ? (
                <img
                  className="w-12"
                  onClick={() => setHidden(!hidden)}
                  src={isFocused ? hpas2 : hpas}
                  alt=""
                />
              ) : (
                <img
                  className="w-12"
                  onClick={() => setHidden(!hidden)}
                  src={isFocused ? hpas4 : hpas3}
                  alt=""
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-[#E2063A] my-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
              disabled={Password?.trim()?.length === 0}
            >
              <div
                className={`${
                  Password?.trim()?.length === 0
                    ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                    : ""
                } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
              >
                <span className="relative z-10 ">
                  <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                    Submit
                  </p>
                </span>
                <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                  <img
                    src={wc}
                    className={`${
                      Password?.trim()?.length === 0 ? "hi" : "hidden"
                    } lg:h-10`}
                  />
                  <img
                    src={ba}
                    className={`${
                      Password?.trim()?.length === 0 ? "hidden" : "block"
                    } lg:h-10`}
                  />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Custom.js
// import React from "react";
// import { toast as sonnerToast, Toaster } from "sonner";
// import Toast from "./Toast";

// export default function Custom() {
//   // Create a helper function for your custom toast
//   function customToast(toastProps) {
//     return sonnerToast.custom(() => (
//       <Toast
//         title={toastProps.title}
//         message={toastProps.message}
//       />
//     ));
//   }

//   return (
//     <div className="mt-[200px]">
//       <button
//         className="relative flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white"
//         onClick={() => {
//           customToast({
//             title: "This is a headless toast",
//             message:
//               "You have full control of styles and jsx, while still having the animations.",
//           });
//         }}
//       >
//         Render toast
//       </button>
//       <Toaster />
//     </div>
//   );
// }
