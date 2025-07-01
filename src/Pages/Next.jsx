import { useState, useEffect } from "react";
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
import Loader from "../Components/Loader";
import { toast as sonnerToast, Toaster } from "sonner";
import Toast from "../Components/Toast";




const schema = z.object({
  Full_Name: z.string(),
  Phone_No: z.string().refine((value) => /^[0-9+\-\(\)\s]*$/.test(value), {
    message: "Invalid phone number format",
  })
  .refine((value) => value.length >= 10 && value.length <= 15, {
    message: "Phone number must be between 10 and 15 characters",
  }),
  Brand_Name: z.string(),
  Location:
    z.string() /* .min(8, "Password doesn’t meet requirement").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[@$!%*?&]/, "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)") */,
});

export default function Next() {
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    
    setLoading(true); // Start loader while processing

    try {
      // Send data to the backend API
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/next`, data, {
        withCredentials: true, // Ensure cookies (token) are sent with the request
      });

      /* toast.success("Details updated successfully!"); */
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error(
        "Submission Error:",
        error.response?.data?.message || error.message
      );
      /* toast.error(
        error.response?.data?.message ||
          "Failed to update details. Please try again."
      ); */
    } finally {
      setLoading(false); // Stop loader after request completes
    }
  };
  const Phone_No = watch("Phone_No"); // watch input value
  const Full_Name = watch("Full_Name"); // watch input value
  const Brand_Name = watch("Brand_Name"); // watch input value
  const Location = watch("Location"); // watch input value

  useEffect(() => {
    setIsFocused3(Full_Name && Full_Name.trim().length > 0);
  }, [Full_Name]);
  useEffect(() => {
    setIsFocused4(Brand_Name && Brand_Name.trim().length > 0);
  }, [Brand_Name]);

  useEffect(() => {
    setIsFocused2(Phone_No && Phone_No.trim().length > 0);
  }, [Phone_No]);

  useEffect(() => {
    setIsFocused(Location && Location.trim().length > 0);
  }, [Location]);

  useEffect(() => {
    // Check if details are already filled
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth/isDetailsFilled`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.isDetailsFilled) {
          navigate("/"); // Redirect to home if details are already filled
        }
      })
      .catch(() => navigate("/Log in")); // Redirect if not authenticated
  }, [navigate]);

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast
        color={toastProps.color}
        message={toastProps.message}
      />
    ));
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        console.log(error)
        customToast({
          color: "#E2063A",
          message: error.message,
        });
      });
    }
  }, [errors]);

  

  const handlePhoneInput = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9+\-\(\)\s]/g, '');
    setValue('Phone_No', sanitizedValue); // Update only phoneNumber
  };

  return (
    <div className="mt-[96px] py-32 px-4 flex flex-col content-center items-center">
      {loading ? <Loader /> : ""}
      <Toaster position="top-center" />
      <div className="max-w-[512px]">
        <h3 className="text-center font-nexa-bold text-[36px] mb-2 leading-[48px] lg:text-[56px] lg:leading-[78px] lg:mb-6">
          Just one more step
        </h3>
        <p className="text-center mt-2 font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">
          Kindly fill the form below to finish up creating your account
        </p>
        <form className="mt-10 lg:mt-14" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            spellCheck="false"
            className={`w-full h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused3
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Full_Name")}
            placeholder="Full Name"
            type="string"
            id="Full_Name"
          />
          <input
            spellCheck="false"
            className={`w-full mt-4 h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused4
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Brand_Name")}
            placeholder="Brand Name"
            type="string"
            id="Bramd_Name"
          />
          <input
            className={`w-full mt-4 h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused2
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Phone_No")}
            placeholder="Phone Number"
            type="tel"
            inputMode="numeric"
            pattern="[0-9+\-\(\)\s]*"
            id="Phone_No"
            onInput={handlePhoneInput} // Real-time sanitization
          />

          <input
            className={`w-full mt-4 h-12 border-2 border-[#DDDDDD] rounded-full active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Location")}
            placeholder="Location"
            type="text"
            id="Location"
          />

          {/* errors will return when field validation fails  */}
          {/* {errors.password && toast.error('Event has not been created')} */}
          {/* <input className="mt-4 h-12 bg"   disabled={password?.trim()?.length === 0 && email?.trim()?.length === 0}/> */}

          <button
            type="submit"
            className="bg-[#E2063A] mt-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
            disabled={
              Location?.trim()?.length === 0 ||
              Phone_No?.trim()?.length === 0 ||
              Full_Name?.trim()?.length === 0 ||
              Brand_Name?.trim()?.length === 0
            }
          >
            <div
              className={`${
                Location?.trim()?.length === 0 ||
                Phone_No?.trim()?.length === 0 ||
                Full_Name?.trim()?.length === 0 ||
                Brand_Name?.trim()?.length === 0
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
                    Location?.trim()?.length === 0 ||
                    Phone_No?.trim()?.length === 0 ||
                    Full_Name?.trim()?.length === 0 ||
                    Brand_Name?.trim()?.length === 0
                      ? "hi"
                      : "hidden"
                  } lg:h-10`}
                />
                <img
                  src={ba}
                  className={`${
                    Location?.trim()?.length === 0 ||
                    Phone_No?.trim()?.length === 0 ||
                    Full_Name?.trim()?.length === 0 ||
                    Brand_Name?.trim()?.length === 0
                      ? "hidden"
                      : "block"
                  } lg:h-10`}
                />
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
