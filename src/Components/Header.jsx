import { useState, useEffect, useContext } from "react";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";

import logo from "../assets/Images/Logo Mark.svg";
import menue from "../assets/Images/menue.svg";
import menue2 from "../assets/Images/menue2.svg";
import cartt from "../assets/Images/cart.svg";
import profile from "../assets/Images/profile.svg";
import navLogo from "../assets/Images/navLogo.svg";
import apparel from "../assets/Images/apparel.svg";
import hub from "../assets/Images/hub.svg";
import assist from "../assets/Images/assist.svg";
import reseller from "../assets/Images/reseller.svg";
import rapparel from "../assets/Images/rapparel.svg";
import rhub from "../assets/Images/rhub.svg";
import rassist from "../assets/Images/rassist.svg";
import rreseller from "../assets/Images/rreseller.svg";
import Footer from "./Footer";
import ar from "../assets/Images/arrow-left-w.svg";
import { toast, ToastContainer } from "react-toastify";
import { Context } from "../App";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 60) {
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 60);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const { isLogin, user, cart } = useContext(Context);

  /*  console.log(isLogin); */

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   
  
  const num = typeof cart === 'object' && cart !== null ? cart.length : '';
  console.log(typeof(cart))

  useEffect(() => {
    if (isOpen) {
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleModalClick = (event) => {
    // Prevent closing the modal when clicking inside the modal content
    event.stopPropagation();
  };

  const check = () => {
    if (isLogin) {
      navigate("/Cart");
    } else {
      toast(
        <h1 className="text-center font-nexa-bold text-[16px] leading-[26px] text-[#E2063A]">
          Login to view cart
        </h1>,
        {
          autoClose: 3000, // Close after 3 seconds
          closeButton: false,
          className:
            "bg-[#DDDDDD] h-[84px] rounded-[32px] flex justify-center border-dashed border-[#E2063A] border-[2px]",
          hideProgressBar: true,
        }
      );
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000} // Automatically closes after 3 seconds
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <div className="App ">
        <header
          className={` px-4 py-[24px] fixed w-[100%] top-[0px] z-20 bg-white rounded-b-[40px]  justify-between items-center md:px-8 lg:px-[120px] hidden lg:flex transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-row">
            <Link to="/">
              <img src={logo} className="w-36" alt="logo" />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <div className="hidden lg:flex md:gap-[2rem]  items-center text-[#9A9A9A]">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E2063A] font-nexa-light font-bold md:text-xs xl:text-sm 2xl:text-base pr-4 pl-8"
                      : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black pr-4 pl-8"
                  }
                  to="/About"
                >
                  About Us
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base px-4"
                      : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A] px-4"
                  }
                  to="/Store"
                >
                  Store
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base px-4"
                      : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A] px-4"
                  }
                  to="/Brandit Hub"
                >
                  Brandit Hub
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E2063A] font-nexa-light font-bold xl:text-sm 2xl:text-base px-4"
                      : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:text-black active:text-[#E2063A] focus:text-[#E2063A] px-4"
                  }
                  to="/Assist Centre"
                >
                  Assist Centre
                </NavLink>
              </div>

              {/* <div className="div flex gap flex-row ml-4">
              <NavLink className={({isActive})=> isActive ? "border-[2px] border-black rounded-[72px] font-nexa-light font-bold xl:text-sm 2xl:text-base justify-center flex items-center lg:h-[72px] lg:w-[129px]" : "font-nexa-light font-bold xl:text-sm 2xl:text-base hover:border-[2px] lg:w-[129px] justify-center flex items-center lg:h-[72px]"} to='Log in'>
                Log In
              </NavLink>
              <NavLink className={({isActive})=> isActive ? "bg-[#E2063A] border-[4px] border-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center" : "bg-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"} to='Sign up'>
                  <span className="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Sign Up</p></span>
                  <img src={ar} alt="" className="absolute right-[25px] top-[50%] z-50 translate-y-[-50%]" />
                  <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
              </NavLink>
            </div> */}
            </nav>
          </div>
          {isLogin ? (
            ""
          ) : (
            <div className="div flex gap flex-row">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-[2px] border-black rounded-[72px] font-nexa-light font-bold xl:text-sm 2xl:text-base justify-center flex items-center lg:h-[72px] lg:w-[129px]"
                    : "rounded-full font-nexa-light font-bold xl:text-sm 2xl:text-base  hover:border-[2px] lg:w-[129px] justify-center flex items-center lg:h-[72px]"
                }
                to="Log in"
              >
                Log In
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#E2063A] border-[4px] border-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"
                    : "bg-[#E2063A] text-white w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[178px] lg:h-[72px] lg:py-4 lg:pl-[40px]  flex items-center content-center"
                }
                to="Sign up"
              >
                <span className="relative z-10 ">
                  <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">
                    Sign Up
                  </p>
                </span>
                <img
                  src={ar}
                  alt=""
                  className="absolute right-[25px] top-[50%] z-50 translate-y-[-50%]"
                />
                <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
              </NavLink>
            </div>
          )}
          {isLogin ? (
            <div className="hidden lg:flex gap-4">
              <div className="relative flex items-center">
                <Link to="/Cart">
                  <img className="" src={cartt} alt="" />
                </Link>
                {num ? (
                  <div className="bg-[#E2063A] w-5 h-5 items-center justify-center flex  rounded-full text-center absolute top-[13px] right-[3px]">
                    <p className=" text-[12px] text-white">{num}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <img
                className="w-[72px] h-[72px] rounded-full"
                src={user?.Profile_Image ? user?.Profile_Image : profile}
                alt="Menu"
                onClick={() => navigate("/Profile")}
              />
            </div>
          ) : (
            ""
          )}
        </header>

        <header
          className={`fixed w-[100%] top-[0px] z-20 bg-white px-8 h-[80px] items-center flex justify-between rounded-b-[40px] lg:hidden transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <Link to="/">
            <img src={logo} className="h-[36px]" alt="logo" />
          </Link>
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex">
            <div onClick={check} className="relative">
              <img className="" src={cartt} alt="" />

              {num ? (
                <div className="bg-[#E2063A] w-5 h-5 items-center justify-center flex  rounded-full text-center absolute top-[3px] right-[3px]">
                  <p className=" text-[12px] text-white">{num}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <img src={menue} alt="Menu" onClick={toggleMenu} />
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`flex backdrop-blur flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-y-scroll  bg-black bg-opacity-30 ${
            isOpen ? "flex flex-col items-center justify-center" : "hidden"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`flex items-center flex-col bg-white w-[90%] left-1/2 transform -translate-x-1/2  absolute top-11  text-center  pt-10 rounded-[32px]`}
            onClick={handleModalClick}
          >
            <img
              src={menue2}
              alt=""
              className="w-[48px]"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col gap-3 my-[60px] text-[#9A9A9A] items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row items-center pl-4 pr-2"
                    : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row items-center pl-4 pr-2"
                }
                to="/About"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                    : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                }
                to="/Store"
                onClick={toggleMenu}
              >
                {({ isActive }) => (
                  <>
                    Store{" "}
                    {isActive ? (
                      <img src={rapparel} alt="" />
                    ) : (
                      <img src={apparel} alt="" />
                    )}{" "}
                  </>
                )}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                    : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                }
                to="/Brandit Hub"
                onClick={toggleMenu}
              >
                {({ isActive }) => (
                  <>
                    Brandit Hub{" "}
                    {isActive ? (
                      <img src={rhub} alt="" />
                    ) : (
                      <img src={hub} alt="" />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                    : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                }
                to="/Assist Centre"
                onClick={toggleMenu}
              >
                {({ isActive }) => (
                  <>
                    Assist Centre{" "}
                    {isActive ? (
                      <img src={rassist} alt="" />
                    ) : (
                      <img src={assist} alt="" />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E2063A] font-nexa-light font-bold leading-[22px] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                    : "font-nexa-light font-bold leading-[22px] hover:text-black active:text-[#E2063A] focus:text-[#E2063A] h-12 flex flex-row gap-3 items-center pl-4 pr-2"
                }
                to="/Become a reseller"
                onClick={toggleMenu}
              >
                {({ isActive }) => (
                  <>
                    Become a Reseller{" "}
                    {isActive ? (
                      <img src={rreseller} alt="" />
                    ) : (
                      <img src={reseller} alt="" />
                    )}
                  </>
                )}
              </NavLink>
              {isLogin ? (
                ""
              ) : (
                <div className="div flex gap flex-col ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-[2px] border-black rounded-[72px] font-nexa-bold text-[14px] leading-[22px] text-black  justify-center flex items-center h-[48px] mb-3 w-full"
                        : "rounded-full font-nexa-bold  hover:border-[2px] w-full text-[14px] leading-[22px] text-black  justify-center flex items-center mb-3 h-[48px]"
                    }
                    to="Log in"
                    onClick={toggleMenu}
                  >
                    Log In
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#E2063A] border-[4px] border-[#E2063A] text-white font-nexa-bold text-[14px] leading-[22px] w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group h-[48px]   flex items-center content-center"
                        : "bg-[#E2063A] text-white font-nexa-bold text-[14px] leading-[22px] w-[178px] px-4 py-[13px] rounded-full relative overflow-hidden group h-[48px]  flex items-center content-center"
                    }
                    to="Sign up"
                    onClick={toggleMenu}
                  >
                    <span className="relative z-10 ">
                      <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">
                        Sign Up
                      </p>
                    </span>
                    <img
                      src={ar}
                      alt=""
                      className="absolute right-[15px] top-[50%] z-50 translate-y-[-50%]"
                    />
                    <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
                  </NavLink>
                </div>
              )}
            </ul>
            <img src={navLogo} alt="" />
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

/*  */
