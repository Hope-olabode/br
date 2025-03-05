import wc from "../assets/Images/wcircle.svg";
import ba from "../assets/Images/barrow.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast as sonnerToast, Toaster } from "sonner";
import Toast from "../Pages/Toast";
import { useNavigate } from "react-router-dom";
import hpas from "../assets/Images/hpas.svg";
import hpas2 from "../assets/Images/hpas2.svg";
import hpas3 from "../assets/Images/hpas3.svg";
import hpas4 from "../assets/Images/hpas4.svg";

const schema = z.object({
  Email: z.string(), // You can add .email("Incorrect email") if needed
});

export default function VerifyEmail() {
  const [confirmEmail, setConfirmEmail] = useState(
    localStorage.getItem("Email confirmed") === "true"
  );
  const [confirmOtp, setConfirmOtp] = useState(
    localStorage.getItem("Otp confirmed") === "true"
  );
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
      localStorage.setItem("Email confirmed", JSON.stringify(true));
      localStorage.setItem("Email", JSON.stringify(Email));
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
      localStorage.setItem("Otp confirmed", JSON.stringify(true));
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
    try {
      // Call your API endpoint to reset the password
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/reset`,
        { Email: localStorage.getItem("Email"), newPassword: data.Password },
        { withCredentials: true }
      );
      // Handle success (for example, show a toast or navigate)
      localStorage.removeItem("Otp confirmed", "Email", "Email confirmed");
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
    <div className="div">
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
                    className={`${!isOtpComplete ? "hidden" : "block"} lg:h-10`}
                  />
                </div>
              </div>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
