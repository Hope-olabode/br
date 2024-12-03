import  { useState,useEffect, useContext, } from 'react';
import { NavLink, Link, Outlet } from "react-router-dom";


import logo from '../assets/Images/Logo Mark.svg';
import menue from '../assets/Images/menue.svg';
import menue2 from '../assets/Images/menue2.svg';
import cart from '../assets/Images/cart.svg';
import profile from '../assets/Images/profile.svg';
import navLogo from '../assets/Images/navLogo.svg';
import apparel from '../assets/Images/apparel.svg';
import hub from '../assets/Images/hub.svg';
import assist from '../assets/Images/assist.svg';
import reseller from '../assets/Images/reseller.svg';
import Footer from './Footer';
import ar from '../assets/Images/arrow-left-w.svg'

import { Context } from "../App"; 



  

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin] = useContext(Context)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const handleModalClick = (event) => {
    // Prevent closing the modal when clicking inside the modal content
    event.stopPropagation();
  };

  return (
    <>
      <div className="App ">
        <header className=" px-4 py-[24px] fixed w-[100%] top-[0px] z-20 bg-white rounded-b-[40px]  justify-between items-center md:px-8 hidden lg:flex">
          <Link to='/'><img  src={logo} className="w-36" alt="logo" /></Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <div className="hidden lg:flex md:gap-[2rem]  space-x-8 items-center text-[#9A9A9A]">
              <p>
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold md:text-xs xl:text-sm 2xl:text-base" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black "} to='/About'>About Us</NavLink>
              </p>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A]"} to='/Apparel'>
                Store
              </NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A]"} to= '/Brandit Hub' >
                Brandit Hub
              </NavLink>
              <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A]"} to='/Assist Centre'>
                Assist Centre
              </NavLink>
            </div>
            {isLogin ? "": <div className="div flex gap flex-row ml-4">
              <NavLink className={({isActive})=> isActive ? "border-[2px] border-black rounded-[72px] font-nexa-light font-bold xl:text-sm 2xl:text-base justify-center flex items-center lg:h-[72px] lg:w-[129px]" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:border-[2px] lg:w-[129px] justify-center flex items-center lg:h-[72px]"} to='Log in'>
                Log In
              </NavLink>
              <NavLink className={({isActive})=> isActive ? "bg-[#E2063A] border-[4px] border-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center" : "bg-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"} to='Sign up'>
                  <span class="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Sign Up</p></span>
                  <img src={ar} alt="" className="absolute right-[25px] top-[50%] z-50 translate-y-[-50%]" />
                  <span class="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
              </NavLink>
            </div>}
            {/* <div className="div flex gap flex-row ml-4">
              <NavLink className={({isActive})=> isActive ? "border-[2px] border-black rounded-[72px] font-nexa-light font-bold xl:text-sm 2xl:text-base justify-center flex items-center lg:h-[72px] lg:w-[129px]" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:border-[2px] lg:w-[129px] justify-center flex items-center lg:h-[72px]"} to='Log in'>
                Log In
              </NavLink>
              <NavLink className={({isActive})=> isActive ? "bg-[#E2063A] border-[4px] border-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center" : "bg-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"} to='Sign up'>
                  <span class="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Sign Up</p></span>
                  <img src={ar} alt="" className="absolute right-[25px] top-[50%] z-50 translate-y-[-50%]" />
                  <span class="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
              </NavLink>
            </div> */}
          </nav>
          {isLogin ? <div className="hidden lg:flex" >
            <Link to='/Cart'><img className="h-[72px]" src={cart} alt="" /></Link>
            <img src={profile} alt="Menu" onClick={toggleMenu}/>
          </div>: ""}
        </header>

        <header className="fixed w-[100%] top-[0px] z-20 bg-white px-8 py-6 flex justify-between rounded-b-[40px] lg:hidden">
          <Link to='/'><img  src={logo} className="w-36" alt="logo" /></Link>
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex" >
            {isLogin ? <img src={cart} alt="" /> : ""}
            <img src={menue} alt="Menu" onClick={toggleMenu}/>
          </div>
          
          {/* Mobile Menu */}
          <div className={`flex backdrop-blur flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-y-scroll  bg-black bg-opacity-30 ${isOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`} onClick={toggleMenu}>
            <div className={`flex items-center flex-col bg-white w-[90%] left-1/2 transform -translate-x-1/2  absolute top-11  text-center  pt-10 rounded-[32px]`} onClick={handleModalClick}>
              <img src={menue2} alt="" className="w-[48px]" onClick={toggleMenu} />
              <ul className="flex flex-col gap-3 my-[60px] text-[#9A9A9A] items-center">
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row items-center pl-4 pr-2" : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row items-center pl-4 pr-2"} to='/About' onClick={toggleMenu}>About Us</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2" : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"} to='/Apparel' onClick={toggleMenu}>
                  {({ isActive }) => (<>Store
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="32" height="32" rx="16" fill={isActive ? "#E2063A" : "#DDDDDD" }/>
                  <path d="M12.8984 12.5361V11.7601C12.8984 9.96008 14.3464 8.19208 16.1464 8.02408C18.2904 7.81608 20.0984 9.50408 20.0984 11.6081V12.7121" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.0967 24H18.8967C22.1127 24 22.6887 22.712 22.8567 21.144L23.4567 16.344C23.6727 14.392 23.1127 12.8 19.6967 12.8H13.2967C9.88074 12.8 9.32074 14.392 9.53674 16.344L10.1367 21.144C10.3047 22.712 10.8807 24 14.0967 24Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.294 16H19.3012" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.6925 16H13.6997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></>)}
                </NavLink>
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2" : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"} to='/Brandit Hub' onClick={toggleMenu}>
                  {({ isActive }) => (<>Brandit Hub
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="32" height="32" rx="16" fill={isActive ? "#E2063A" : "#DDDDDD" }/>
                    <path d="M9.86457 12.1096L9.86458 12.1096L14.1764 8.74972C14.1765 8.74968 14.1765 8.74964 14.1766 8.7496C14.715 8.32981 15.42 8.12792 16.1021 8.11312C16.7843 8.09831 17.4985 8.26945 18.0588 8.66251L9.86457 12.1096ZM9.86457 12.1096L9.86226 12.1114C9.5016 12.3959 9.19227 12.8306 8.97435 13.2731C8.75674 13.7149 8.5999 14.2262 8.5999 14.688V20.616C8.5999 22.4183 10.0619 23.892 11.8679 23.892H21.1319C22.936 23.892 24.3999 22.4281 24.3999 20.624V14.8C24.3999 14.3106 24.229 13.7723 23.9882 13.3108C23.7482 12.8507 23.4052 12.4024 23.0006 12.125L18.0591 8.66272L9.86457 12.1096ZM9.74287 11.9547L9.74323 11.9544L14.0549 8.59468C14.055 8.5946 14.0551 8.59452 14.0552 8.59444C14.0552 8.59443 14.0552 8.59442 14.0552 8.5944C15.1773 7.72195 17.0079 7.67915 18.1725 8.49716L18.173 8.49749L23.117 11.9615L23.1179 11.9621C23.513 12.2377 23.8885 12.6907 24.1657 13.2215C24.4429 13.7522 24.5999 14.3189 24.5999 14.8V20.624C24.5999 22.5325 23.0471 24.092 21.1319 24.092H11.8679C9.95335 24.092 8.3999 22.5332 8.3999 20.616V14.688C8.3999 14.2385 8.54137 13.7002 8.7927 13.1884C9.04396 12.6768 9.38459 12.2333 9.74287 11.9547Z" stroke="white"/>
                    <path d="M17.6998 20.9H15.2998C13.9199 20.9 12.7998 19.7799 12.7998 18.4V16C12.7998 14.6201 13.9199 13.5 15.2998 13.5H17.6998C19.0797 13.5 20.1998 14.6201 20.1998 16V18.4C20.1998 19.7799 19.0797 20.9 17.6998 20.9ZM15.2998 13.7C14.0317 13.7 12.9998 14.7319 12.9998 16V18.4C12.9998 19.6681 14.0317 20.7 15.2998 20.7H17.6998C18.9679 20.7 19.9998 19.6681 19.9998 18.4V16C19.9998 14.7319 18.9679 13.7 17.6998 13.7H15.2998Z" fill="white" stroke="white"/>
                    <path d="M16.4999 21.4C16.1719 21.4 15.8999 21.128 15.8999 20.8V13.6C15.8999 13.272 16.1719 13 16.4999 13C16.8279 13 17.0999 13.272 17.0999 13.6V20.8C17.0999 21.128 16.8279 21.4 16.4999 21.4Z" fill="white"/>
                    <path d="M20.0998 17.8H12.8998C12.5718 17.8 12.2998 17.528 12.2998 17.2C12.2998 16.872 12.5718 16.6 12.8998 16.6H20.0998C20.4278 16.6 20.6998 16.872 20.6998 17.2C20.6998 17.528 20.4278 17.8 20.0998 17.8Z" fill="white"/>
                    </svg></>)}
                </NavLink>
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2" : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"} to='/Assist Centre' onClick={toggleMenu}>
                  {({ isActive }) => (<>Assist Centre
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="32" height="32" rx="16" fill={isActive ? "#E2063A" : "#DDDDDD" }/>
                    <path d="M24.476 21.064C24.476 21.352 24.412 21.648 24.276 21.936C24.14 22.224 23.964 22.496 23.732 22.752C23.34 23.184 22.908 23.496 22.42 23.696C21.94 23.896 21.42 24 20.86 24C20.044 24 19.172 23.808 18.252 23.416C17.332 23.024 16.412 22.496 15.5 21.832C14.58 21.16 13.708 20.416 12.876 19.592C12.052 18.76 11.308 17.888 10.644 16.976C9.988 16.064 9.46 15.152 9.076 14.248C8.692 13.336 8.5 12.464 8.5 11.632C8.5 11.088 8.596 10.568 8.788 10.088C8.98 9.6 9.284 9.152 9.708 8.752C10.22 8.248 10.78 8 11.372 8C11.596 8 11.82 8.048 12.02 8.144C12.228 8.24 12.412 8.384 12.556 8.592L14.412 11.208C14.556 11.408 14.66 11.592 14.732 11.768C14.804 11.936 14.844 12.104 14.844 12.256C14.844 12.448 14.788 12.64 14.676 12.824C14.572 13.008 14.42 13.2 14.228 13.392L13.62 14.024C13.532 14.112 13.492 14.216 13.492 14.344C13.492 14.408 13.5 14.464 13.516 14.528C13.54 14.592 13.564 14.64 13.58 14.688C13.724 14.952 13.972 15.296 14.324 15.712C14.684 16.128 15.068 16.552 15.484 16.976C15.916 17.4 16.332 17.792 16.756 18.152C17.172 18.504 17.516 18.744 17.788 18.888C17.828 18.904 17.876 18.928 17.932 18.952C17.996 18.976 18.06 18.984 18.132 18.984C18.268 18.984 18.372 18.936 18.46 18.848L19.068 18.248C19.268 18.048 19.46 17.896 19.644 17.8C19.828 17.688 20.012 17.632 20.212 17.632C20.364 17.632 20.524 17.664 20.7 17.736C20.876 17.808 21.06 17.912 21.26 18.048L23.908 19.928C24.116 20.072 24.26 20.24 24.348 20.44C24.428 20.64 24.476 20.84 24.476 21.064Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg></>)}
                </NavLink>
                <NavLink className={({isActive})=> isActive ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2" : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"} to='/Become a reseller' onClick={toggleMenu}>
                {({ isActive }) => (<>Become a Reseller
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill={isActive ? "#E2063A" : "#DDDDDD" }/>
                  <path d="M23.9999 13.2C23.9999 16.072 21.6719 18.4 18.7999 18.4C18.6639 18.4 18.5199 18.392 18.3839 18.384C18.1839 15.848 16.1518 13.816 13.6158 13.616C13.6078 13.48 13.5999 13.336 13.5999 13.2C13.5999 10.328 15.9279 8 18.7999 8C21.6719 8 23.9999 10.328 23.9999 13.2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.4 18.8C18.4 21.672 16.072 24 13.2 24C10.328 24 8 21.672 8 18.8C8 15.928 10.328 13.6 13.2 13.6C13.336 13.6 13.48 13.608 13.616 13.616C16.152 13.816 18.184 15.848 18.384 18.384C18.392 18.52 18.4 18.664 18.4 18.8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.4959 18.096L13.2 16.8L13.904 18.096L15.2 18.8L13.904 19.504L13.2 20.8L12.4959 19.504L11.2 18.8L12.4959 18.096Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></>)}
                </NavLink>
              </ul>
              <img src={navLogo} alt="" />
            </div>
          </div>
        </header>  
        
      </div>
      <Outlet />
      <Footer />
    </>
  );
}





/*  */

 


