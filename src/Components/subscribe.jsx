import { useState } from "react";
import back from '../assets/Images/Frame278.jpg';
import back2 from '../assets/Images/Frame278(1).jpg';
import send from '../assets/Images/send.svg';

export default function Subscribe() {
  const [isFocused, setIsFocused] = useState(false);




  return (
    <div className="relative text-center h-[99%] overflow-hidden">
      <img className="w-full   md:hidden" src={back} alt="" />
      <img className="w-full hidden md:block" src={back2} alt="" />
      <div className="absolute w-[95%] md:w-[80%] lg:w-[50%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-black py-8 px-4 rounded-[32px]">
        <h3 className="text-white font-poopins font-medium text-[16px] leading-[26px]  lg:text-[32px] lg:leading-[42px]">Subscribe to Brandit Hub</h3>
        <p className="text-white font-poopins text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px] mt-2">Subscribe to Brandit's newsletter, offering updates, exclusive offers, and insights into the clothing industry.</p>
        <div className={`flex items-center mt-4 hover:border-2 hover:border-[#DDDDDD] transition duration-200 ease-in-out rounded-full ${
              isFocused ? 'bg-black text-white focus: border-2 ' : 'border-2 border-white bg-white'
            } font-poopins text-[16px] leading-[26px] h-[48px]`}>
          <input
            type="text"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full pl-[24px] pr-[16px] py-2 transition duration-200 ease-in-out  rounded-full focus:outline-none ${
              isFocused ? 'bg-black text-white ' : ''}`}
          />
          <button className={`p-2 ml-2  rounded-full `}>
            <img className="w-[32px] md:w-[40px]" src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}