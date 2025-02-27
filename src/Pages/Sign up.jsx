import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import hpas from "../assets/Images/hpas.svg";
import hpas2 from "../assets/Images/hpas2.svg";
import hpas3 from "../assets/Images/hpas3.svg";
import hpas4 from "../assets/Images/hpas4.svg";
import wc from "../assets/Images/wcircle.svg";
import ba from "../assets/Images/barrow.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Loader from "../Components/Loader2";
import Error from "../Components/Error";
import { toast, ToastContainer } from "react-toastify";
import { Context } from "../App";
import { toast as sonnerToast, Toaster } from "sonner";
import Toast from "./Toast";

import Gauth from "../Components/Gauth";

const schema = z.object({
  Email: z.string() /* .email("Incorrect email") */,
  Password:
    z.string() /* .min(8, "Password doesn’t meet requirement").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[@$!%*?&]/, "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)") */,
  confirmPassword:
    z.string() /* .min(8, "Password doesn’t meet requirement").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[@$!%*?&]/, "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)") */,
});

export default function Signup() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setIsLogin } = useContext(Context);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true)
    try {
      // Wait for the POST request to complete successfully
      const res = await axios.post("   https://bserver-b2ue.onrender.com/auth/signup", data, {
        withCredentials: true,
      });
      console.log(res);

      // Once the POST is successful, execute the GET request
      const loginResponse = await axios.get(
        "   https://bserver-b2ue.onrender.com/auth/isLogin",
        {
          withCredentials: true,
        }
      );
      setIsLogin(loginResponse.data.loggedIn);

      // Navigate after successful GET
      customToast({
        color: "#000000",
        message: res.data.message,
      });

      setTimeout(() => {
        navigate("/Next");
      }, 2000);
    } catch (error) {
      console.error("Error during submission:", error);
      const message = error.response?.data?.message || "An error occurred";
      console.log(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
      setLoading(false)
    } finally {
      setLoading(false)
    }
  };

  const Email = watch("Email"); // watch input value
  const Password = watch("Password"); // watch input value
  const confirmPassword = watch("confirmPassword"); // watch input value

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast color={toastProps.color} message={toastProps.message} />
    ));
  }

  useEffect(() => {
    setIsFocused2(Email && Email.trim().length > 0);
  }, [Email]);

  useEffect(() => {
    setIsFocused(Password && Password.trim().length > 0);
  }, [Password]);

  useEffect(() => {
    setIsFocused5(confirmPassword && confirmPassword.trim().length > 0);
  }, [confirmPassword]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        console.log(error.message);
        displayMsg(error.message);
      });
    }
  }, [errors]);

  return (
    <div className="mt-[96px] py-32 px-4 flex flex-col content-center items-center">
      <Toaster position="top-center" />
      <div className="max-w-[482px]">
        <p className="text-center mb-2 text-[#9A9A9A] font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[36px] lg:leading-[48px] lg:mb-4">
          Create Account
        </p>
        <h3 className="text-center font-nexa-bold text-[36px] mb-2 leading-[48px] lg:text-[56px] lg:leading-[78px] lg:mb-6">
          Brand<span className="text-[#E2063A]">it</span> Brand
          <span className="text-[#E2063A]">You</span>
        </h3>
        <p className="text-center mt-2 font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">
          Create your account for smooth and uninterrupted experience with us
        </p>

        <form className="mt-10 lg:mt-14" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className={`w-full mt-4 h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused2
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Email")}
            placeholder="Email Address"
            type="string"
            id="Email"
            autoComplete="off"
          />
          {/* include validation with required or other standard HTML validation rules */}
          <div
            className={`flex items-center justify-center h-12 border-2 border-[#DDDDDD] rounded-full mt-4  pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused ? "bg-black text-white border-black" : ""
            }`}
          >
            <input
              className={`w-full bac h-11 ml-[0.01px] active:border-none pl-6 rounded-full focus:outline-none lg:h-[68px] ${
                isFocused ? "bg-black  text-white placeholder:text-white" : ""
              }`}
              id="email"
              {...register("Password")}
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

          <div
            className={`flex items-center justify-center h-12 border-2 border-[#DDDDDD] rounded-full mt-4  pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused5 ? "bg-black text-white  border-black" : ""
            }`}
          >
            <input
              className={`w-full bac h-11 active:border-none pl-6 rounded-full focus:outline-none lg:h-[68px] ${
                isFocused5 ? "bg-black  text-white placeholder:text-white" : ""
              }`}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              type={hidden2 ? "password" : "text"}
              autoComplete="off"
            />
            {hidden2 ? (
              <img
                className="w-12"
                onClick={() => setHidden2(!hidden2)}
                src={isFocused5 ? hpas2 : hpas}
                alt=""
              />
            ) : (
              <img
                className="w-12"
                onClick={() => setHidden2(!hidden2)}
                src={isFocused5 ? hpas4 : hpas3}
                alt=""
              />
            )}
          </div>
          <p className="font-poopins text-[14px] leading-[18px] pl-2 pt-0.5 text-[#9A9A9A]">
            8 characters including a letter and a number
          </p>

          {/* errors will return when field validation fails  */}
          {/* {errors.password && toast.error('Event has not been created')} */}
          {/* <input className="mt-4 h-12 bg"   disabled={password?.trim()?.length === 0 && email?.trim()?.length === 0}/> */}

          <button
            type="submit"
            className="bg-[#E2063A] my-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
            disabled={
              Password?.trim()?.length === 0 ||
              Email?.trim()?.length === 0 ||
              confirmPassword?.trim()?.length === 0
            }
          >
            <div
              className={`${
                loading ? "hidden" : "block"
              } justify-center items-center`}
            >
              <div
                className={`${
                  Password?.trim()?.length === 0 ||
                  Email?.trim()?.length === 0 ||
                  confirmPassword?.trim()?.length === 0
                    ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                    : ""
                } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
              >
                <span className="relative z-10 ">
                  <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                    Create Account
                  </p>
                </span>
                <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                  <img
                    src={wc}
                    className={`${
                      Password?.trim()?.length === 0 ||
                      Email?.trim()?.length === 0 ||
                      confirmPassword?.trim()?.length === 0
                        ? "hi"
                        : "hidden"
                    } lg:h-10`}
                  />
                  <img
                    src={ba}
                    className={`${
                      Password?.trim()?.length === 0 ||
                      Email?.trim()?.length === 0 ||
                      confirmPassword?.trim()?.length === 0
                        ? "hidden"
                        : "block"
                    } lg:h-10`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`pt-2 ${
                loading ? "flex bg-[#ffffffd0] h-full" : "hidden"
              } justify-center items-center`}
            >
              <Loader />
            </div>
          </button>
          <Gauth message="Create account using Google" />
        </form>
      </div>
    </div>
  );
}
