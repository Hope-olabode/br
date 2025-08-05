import { useState, useEffect, useContext } from "react";
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
import { useNavigate, NavLink } from "react-router-dom";
import { toast as sonnerToast, Toaster } from "sonner";
import Toast from "../Components/Toast";

import { AuthContext } from "../context/authContext";

import { toast, ToastContainer } from "react-toastify";
import Gauth from "../Components/Gauth";
import Loader from "../Components/Loader2";
import VerifyEmail from "../Components/VerifyEmail";

const schema = z.object({
  Email: z.string() /* .email("Incorrect email") */,
  Password:
    z.string() /* .min(8, "Password doesn’t meet requirement").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[@$!%*?&]/, "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)"), */,
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [hidden, setHidden] = useState(true);
  const { isLogin, setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        data,
        {
          withCredentials: true, // Include cookies in the request
        }
      );

      customToast({
        color: "#000000",
        message: response.data.message,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message || "An error occurred";
      console.log(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    } finally {
      setLoading(false);
    }
  };

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast color={toastProps.color} message={toastProps.message} />
    ));
  }

  const Email = watch("Email"); // watch input value
  const Password = watch("Password"); // watch input value

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        console.log(error);
        /* toast(
          <div className="h-[84px] w-[357px] mx-auto text-[#E2063A] text-center bg-[#DDDDDD] border-2 border-dashed border-[#E2063A]  flex flex-col rounded-[32px] justify-center items-center]">
            {error.message}
          </div>,
          {
            position: "top-center",
            classNames: {
              cancelButton: "bg-orange-400",
            },
            duration: 5000,
          }
        ); */
      });
    }
  }, [errors]);

  return (
    <div className="mt-[96px] py-32 px-4 flex flex-col content-center items-center">
      <Toaster position="top-center" />

      <div className="max-w-[482px]">
        <p className="text-center mb-2 text-[#9A9A9A] font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[36px] lg:leading-[48px] lg:mb-4">
          Login
        </p>
        <h3 className="text-center font-nexa-bold text-[36px] mb-2 leading-[48px] whitespace-nowrap lg:text-[56px] lg:leading-[78px] lg:mb-6">
          Get right back to <span className="text-[#E2063A]">it</span>
        </h3>
        <p className="text-center mt-2 font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">
          Glad to have you working with us
        </p>
        <form className="mt-10 lg:mt-14" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            name="Fake-Email"
            autoComplete="off"
            className={`w-full h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused2
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Email")}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            placeholder="Email Address"
            type="string"
            id="Email"
          />
          {/* include validation with required or other standard HTML validation rules */}
          <div className="relative  rounded-full mt-4">
            <input
              className={`w-full h-12 border-2 border-[#DDDDDD] rounded-full  focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
                isFocused
                  ? "bg-black text-white placeholder:text-white border-black border-2"
                  : ""
              }`}
              id="Password"
              {...register("Password")}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Password"
              type={hidden ? "password" : "text"}
              autoComplete="off"
            />
            {hidden ? (
              <img
                className="w-12 absolute right-4 top-0 h-full cursor-pointer"
                onClick={() => setHidden(!hidden)}
                src={isFocused ? hpas2 : hpas}
                alt=""
              />
            ) : (
              <img
                className="w-12 absolute right-4 top-0 h-full cursor-pointer"
                onClick={() => setHidden(!hidden)}
                src={isFocused ? hpas4 : hpas3}
                alt=""
              />
            )}
          </div>
          <p className="font-poopins text-[14px] leading-[18px] pl-2 pt-0.5 text-[#9A9A9A]">
            8 characters including a letter and a number
          </p>

          <NavLink
            className="text-right flex flex-col justify-center mt-4 pl-10 font-nexa-bold h-[48px] text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px]"
            to="/Reset"
          >
            Reset Password?
          </NavLink>

          {/* errors will return when field validation fails  */}
          {/* {errors.password && toast.error('Event has not been created')} */}
          {/* <input className="mt-4 h-12 bg"   disabled={password?.trim()?.length === 0 && email?.trim()?.length === 0}/> */}

          <button
            type="submit"
            className="bg-[#E2063A] my-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
            disabled={
              Password?.trim()?.length === 0 && Email?.trim()?.length === 0
            }
          >
            <div
              className={`${
                loading ? "hidden" : "block"
              } justify-center items-center`}
            >
              <div
                className={`${
                  Password?.trim()?.length === 0 && Email?.trim()?.length === 0
                    ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                    : ""
                } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
              >
                <span className="relative z-10 ">
                  <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                    Login
                  </p>
                </span>
                <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                  <img
                    src={wc}
                    className={`${
                      Password?.trim()?.length === 0 &&
                      Email?.trim()?.length === 0
                        ? "hi"
                        : "hidden"
                    } lg:h-10`}
                  />
                  <img
                    src={ba}
                    className={`${
                      Password?.trim()?.length === 0 &&
                      Email?.trim()?.length === 0
                        ? "hidden"
                        : "block"
                    } lg:h-10 h-8`}
                  />

                  <div
                    className={`${
                      Password?.trim()?.length === 0 &&
                      Email?.trim()?.length === 0
                        ? ""
                        : " "
                    }`}
                  ></div>
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
          <Gauth message="Login using Google" />
        </form>
      </div>
    </div>
  );
}
