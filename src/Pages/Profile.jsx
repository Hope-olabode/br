import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../assets/Images/profilePic.svg";
import AD from "../assets/Images/AccountD.svg";
import CI from "../assets/Images/CartI.svg";
import OH from "../assets/Images/OrderH.svg";
import F from "../assets/Images/Favourite.svg";
import AD2 from "../assets/Images/AccountD2.svg";
import CI2 from "../assets/Images/CartI2.svg";
import OH2 from "../assets/Images/OrderH2.svg";
import F2 from "../assets/Images/Favourite2.svg";
import { Context } from "../App";

export default function Profile() {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  return (
    <div className="mt-[192px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <div className="w-full mb-[128px]">
        <div className="flex flex-col justify-center items-center text-center mb-12 lg:mb-[88px]">
          <img className="mb-10 w-[148px] h-[148px] rounded-full" src={user.Profile_Image ? user.Profile_Image : Pic} alt="" />
          <p className="font-poopins font-medium text-[14px] leading-[22px] text-[#9A9A9A] mb-2 lg:mb-4">
            {user.Email}
          </p>
          <p className="font-nexa-bold text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px] mb-2 lg:mb-4">
            {user.Full_Name}
          </p>
          <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] mb-2 lg:mb-4">
            {user.Brand_Name}
          </p>
          <p className="font-poopins font-medium text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] text-[#9A9A9A]">
            {user.Location}
          </p>
        </div>
        <button className="div bg-black grid grid-cols-2 p-2 gap-2 rounded-[32px] lg:hidden">
          <button className="relative">
            <img className="w-full" src={AD} alt="" />
            <button className="absolute inset-0 flex items-center justify-center">
              <button onClick={()=>navigate("/Edit")} className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Account Details
              </button>
            </button>
          </button>
          <div className="relative">
            <img className="w-full" src={OH} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p onClick={()=>navigate("/Order")} className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Order History
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full" src={CI} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p onClick={()=>navigate("/Cart")} className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Cart
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full" src={F} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Favourites
              </p>
            </div>
          </div>
        </button>


        <div className="div bg-black  grid-cols-4 p-2 gap-2 rounded-[128px] hidden lg:grid">
          <div className="relative">
            <img className="w-full" src={AD2} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p onClick={()=>navigate("/Edit") } className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Account Details
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full" src={OH2} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p onClick={()=>navigate("/Order")} className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Order History
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full" src={CI2} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p onClick={()=>navigate("/Cart")} className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Cart
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full" src={F2} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-poopins font-medium text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">
                Favourites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
