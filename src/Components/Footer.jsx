import { useState } from "react";
import  {Link, NavLink} from "react-router-dom";
import logo from '../assets/Images/Logo Mark.svg';
import phone from '../assets/Images/phone.svg';
import email from '../assets/Images/email.svg';
import location from '../assets/Images/location.svg';
import visa from '../assets/Images/visa stripe.svg';
import x from '../assets/Images/x.svg';
import ln from '../assets/Images/ln.svg';
import tic from '../assets/Images/tic.svg';
import face from '../assets/Images/face.svg';
import insta from '../assets/Images/insta.svg';
import you from '../assets/Images/you.svg';

import hold1 from '../assets/Images/hold1.svg';
import hold2 from '../assets/Images/hold2.svg';
import farrow1 from '../assets/Images/farrow1.svg';
import farrow2 from '../assets/Images/farrow2.svg';




export default function Footer() {
  const [isFocused, setIsFocused] = useState(false);
  return(
    <footer className="px-4 py-[72px] relative flex flex-col items-center lg:items-start md:px-[40px] lg:px-[60px] xl:px-[120px]">
      <img className="block lg:hidden absolute left-20% top-0" src={hold1} alt="" />
      <img className="hidden lg:block absolute right-[50%] translate-x-[50%] top-0" src={hold2} alt="" />
      <img src={logo} alt="logo" className="w-36 pb-[72px]"/>
      <div className="grid lg:flex gap-[72px]">
        <div className="order-2 lg:pt-4  md:order-1 md:mt-0">
          <div className=" flex flex-col gap-[24px]  md:font-medium">
            <div className="flex content-center items-center gap-2">
              <img src={phone} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">+23480-2345-6789</p>
            </div>
            <div className="flex content-center items-center gap-2">
              <img src={email} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">brandit.marketplace@gmail.com</p>
            </div>
            <div className="flex content-center items-center gap-2">
              <img src={location} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="mt-[72px] lg:mt-[110px]">
            <div className="lg:mb-[46px] mb-6">
              <p className="font-medium font-poopins text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">Connect with Us</p>
              <div className="flex xl:gap-3">
                <img className="" src={x} alt="" />
                <img className="" src={ln} alt="" />
                <img className="" src={tic} alt="" />
                <img className="" src={face} alt="" />
                <img className="" src={insta} alt="" />
                <img className="" src={you} alt="" />
              </div>
            </div>
            <div className="payments">
              <p className="font-medium font-poopins text-[14px] leading-[22px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">Accepted Payments</p>
              <div className="options">
                <img className="h-[45px]" src={visa} alt="" />
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="lg:order-1">
          <div className="mb-[56px] p-2 lg:mb-[32px]">
            <p className="font-poopins text-[16px] leading-[26px] md:font-nexa-bold md:text-[24px] md:leading-[35px] mb-2">Subscribe to Brandit Hub</p>
            <p className="font-poopins text-[#9A9A9A] text-[14px] leading-[22px] md:text-[16px] md:leading-[26px] mb-3">subscribe to Brandit’s newsletter, offering updates, exclusive offers, and insights into the clothing industry.</p>
            <div className={`flex items-center rounded-full transition duration-200 ease-in-out ${
                  isFocused ? 'bg-black text-white border-2  ' : 'border-2 border-[#DDDDDD] '
                } font-poopins text-[14px] leading-[22px] h-[48px]  lg:h-[72px] w-[100%] lg:w-[467px]`}>
              <input
                type="text"
                placeholder="Enter Your Email"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full pl-[24px] pr-[16px]  transition duration-200 ease-in-out border-none  rounded-full focus:outline-none ${
                  isFocused ? 'bg-black text-white border-2 ':''}`}
              />
              <button className={`p-2 ml-2  rounded-full `}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39999 6.32015L15.89 3.49015C19.7 2.22015 21.77 4.30015 20.51 8.11015L17.68 16.6002C15.78 22.3102 12.66 22.3102 10.76 16.6002L9.91999 14.0802L7.39999 13.2402C1.68999 11.3402 1.68999 8.23015 7.39999 6.32015Z" stroke={`${isFocused ? '#FFFFFF':'#1F1F1F'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.11 13.6501L13.69 10.0601" stroke={`${isFocused ? '#FFFFFF':'#1F1F1F'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:mt-16 lg:flex  ">
            <div className="flex lg:w-[200px] xl:w-[231px] flex-col gap-4">
              <p className="text-[#E2063A] font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">Navigation</p>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/About'>About Us</NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/Become a reseller'>Become a Reseller</NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/Apparel'>Store</NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/Launchpad'>Launchpad</NavLink> 
            </div>
            <div className="flex lg:w-[220px] xl:w-[231px] flex-col gap-4">
              <p className="text-[#E2063A] font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">Legal</p>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/Privacy Policy'>Privacy Policy</NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-bold font-bold text-[16px] leading-[22px]" : "font-nexa-bold font-bold text-[16px] leading-[22px]  active:text-[#E2063A] focus:text-[#E2063A]"} to='/Terms and Conditions'>Terms and Conditions</NavLink>
            </div>
            <div className="flex  xl:w-[231px] flex-col gap-4 mt-[48px] lg:mt-0">
              <p className="text-[#E2063A] font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px]">Assist Centre</p>
              <a className="font-nexa-bold font-bold text-[16px] leading-[22px]" href="#">FAQ</a>
              <a className="font-nexa-bold font-bold text-[16px] leading-[22px]" href="#">Brandit Hub</a>
              
            </div>
          </div>
        </div>
      </div> 
      <img className="block lg:hidden absolute bottom-[55px] right-[27%]" src={farrow1} alt="" />
      <img className="hidden lg:block absolute bottom-0 right-[15%]" src={farrow2} alt="" />
    </footer>
  )
}