
import fuelm from '../assets/Images/fuelmobile.jpg'
import fueld from '../assets/Images/fueldesktop.jpg'
import Blog from '../Components/Post'
import up from '../assets/Images/up.svg';
import post1 from '../assets/Images/Post-img/CoverImage.jpg';
import post2 from '../assets/Images/Post-img/CoverImage1.jpg';
import post3 from '../assets/Images/Post-img/CoverImage2.jpg';
import down from '../assets/Images/down.svg';
import search from '../assets/Images/search.svg';
import one from '../assets/Images/Frame273.jpg';
import two from '../assets/Images/Frame273(1).jpg';
import three from '../assets/Images/Frame273(2).jpg';
import img1 from '../assets/Images/Links/IconButton(1).png';
import img2 from '../assets/Images/Links/IconButton(2).png';
import img3 from '../assets/Images/Links/IconButton(3).png';
import img4 from '../assets/Images/Links/IconButton(4).png';
import img5 from '../assets/Images/Links/IconButton(5).png';
import img6 from '../assets/Images/Links/IconButton(6).png';
import Touch from '../Components/Touch.jsx'


import  { useState,useEffect,useRef } from 'react';
import Subscribe from '../Components/subscribe.jsx';


export default function QuoteCal() {
  const [isFocused, setIsFocused] = useState(false);
  
  

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const closeModal = () => {
    setOpenDropdown(null);
  };

  const handleModalClick = (event) => {
    // Prevent closing the modal when clicking inside the modal content
    event.stopPropagation();
  };

  const containerRef = useRef(null);

  



  useEffect(() => {
    if (openDropdown) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openDropdown]);
  const [list, setList] = useState(false);


  return(
    <div className="mt-[96px]">
      <div className="text-center pt-[120px] pb-[24px] px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[140px]">
        <h1 className="text-[36px] leading-[48px] font-nexa-light font-bold lg:text-[56px] lg:leading-[78px]">
          Fuel Your Fashion Passion: <span className="inline">Explore Our <br />Inspiring Blog</span>
        </h1>
        <p className="text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] mt-4">
          Discover design trends, production tips, and success stories and a lot more
        </p>
        <img className="w-full mt-10 md:mt-24 md:hidden" src={fuelm} alt="" />
        <img className="w-full mt-10 hidden md:block" src={fueld} alt="" />
      </div>
      <div className="px-4 py-[56px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-40">
          <div className={`flex items-center md:w-[50%] rounded-full ${
                isFocused ? 'border-[#E2063A] border-2 ' : 'border-2 border-[#DDDDDD] '
              } font-poopins text-[16px] leading-[26px] h-[48px]`}>
            <input
              type="text"
              placeholder="Search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full pl-[24px] pr-[16px] py-2 transition duration-200 ease-in-out  rounded-full focus:outline-none`}
            />
            <button className={`p-2 ml-2  rounded-full `}>
              <img className="w-[32px] md:w-[40px]" src={search} alt="" />
            </button>
          </div>


          {/* <input className="w-[100%] placeholder:font-poopins placeholder:leading-[26px] font-poopins font-normal px-4" placeholder="Search" type="text" /> */}
          <div className="flex  gap-2  h-[48px]">
            <div className="flex gap-4 pl-[24px] items-center" onClick={() => toggleDropdown('dropdown1')}>
              <p className="font-[14px] leading-[22px] md:font-[16px] md:leading-[26px]">Category</p>
              {openDropdown === 'dropdown1' ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div className="flex gap-4 pl-[24px] items-center" onClick={() => toggleDropdown('dropdown2')}>
              <p className="font-[14px] leading-[22px] md:font-[16px] md:leading-[26px]">Tag</p>
              {openDropdown === 'dropdown2' ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>

          </div>
        </div>
        {openDropdown === 'dropdown1' && (
          <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
            <div className="bg-white p-[20px]" onClick={handleModalClick}>
              
              <h2>Dropdown 1</h2>
              <p>Content for Dropdown 1</p>
            </div>
          </div>
        )}
        {openDropdown === 'dropdown2' && (
          <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
            <div className="bg-white p-[20px]" onClick={handleModalClick}>
              
              <h2>Dropdown 2</h2>
              <p>Content for Dropdown 2</p>
            </div>
          </div>
        )}

        <div className="mt-[32px] mb-6">
          <h3 className="font-nexa-bold font-[24px] leading-[38px]">Featured Blog Posts</h3>
          <h3 className="mt-2 text-[#9A9A9A] font-nexa-light font-[24px] leading-[38px]">Showing: All</h3>
        </div>      
        <Blog totalPages={3} /> 
      </div>

      <div className="py-8 md:py-[88px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <p className="font-poopins text-[16px] leading-[26px] font-medium mb-6 md:mb-[88px] text-center  md:font-nexa-bold md:text-[24px] md:leading-[34px] lg:text-[34px] lg:leading-[48px]">Recognizing Our Writers</p>
        <div className="grid gap-2 grid-cols-2 md:flex">
          <div className="rounded-t-[228px] rounded-b-[8px] flex flex-col text-center px-2 pt-2 pb-6 bg-[#F2F2F2]"> 
            <img className='mb-2 rounded-full' src={one} alt="" />
            <p className="font-poopins text-[14px] leading-[22px] font-medium md:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Olayemi Jacob</p>
            <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A] md:font-nexa-light lg:text-[24px] lg:leading-[38px]">Job role or title</p>
          </div>
          <div className="rounded-t-[228px] rounded-b-[8px] flex flex-col text-center px-2 pt-2 pb-6 bg-[#F2F2F2]"> 
            <img className='mb-2 rounded-full' src={two} alt="" />
            <p className="font-poopins text-[14px] leading-[22px] font-medium md:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Olayemi Jacob</p>
            <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A] md:font-nexa-light lg:text-[24px] lg:leading-[38px]">Job role or title</p>
          </div>
          <div className="rounded-t-[228px] rounded-b-[8px] flex flex-col text-center px-2 pt-2 pb-6 bg-[#F2F2F2]"> 
            <img className='mb-2 rounded-full' src={three} alt="" />
            <p className="font-poopins text-[14px] leading-[22px] font-medium md:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Olayemi Jacob</p>
            <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A] md:font-nexa-light lg:text-[24px] lg:leading-[38px]">Job role or title</p>
          </div>
          <div className="rounded-t-[228px] rounded-b-[8px] flex flex-col text-center px-2 pt-2 pb-6 bg-[#F2F2F2]"> 
            <img className='mb-2 rounded-full' src={one} alt="" />
            <p className="font-poopins text-[14px] leading-[22px] font-medium md:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Olayemi Jacob</p>
            <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A] md:font-nexa-light lg:text-[24px] lg:leading-[38px]">Job role or title</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:flex py-10 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="px-4">
          <h3 className="font-nexa-bold text-[24px] leading-[38px] md:text-[32px] md:leading-[48px]">Launchpad</h3>
          <p className="font-poopins text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] my-[13px]">Have any questions or thoughts on you can start your brand or business? With Brandit we can propel you on your journey to blossoming brand</p>
          <button className="px-6 h-12 font-bold font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Start your brand</button>
        </div>
        <div className="px-4 h-[1px] lg:hidden w-full bg-[#DDDDDD] my-8"></div>
        <div className="px-4">
          <h3 className="font-nexa-bold text-[24px] leading-[38px] md:text-[32px] md:leading-[48px]">Education and Training</h3>
          <p className="font-poopins text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] my-[13px]">Have any questions or thoughts on you can start your brand or business? With Brandit we can propel you on your journey to blossoming brand</p>
          <button className="px-6 h-12 font-bold font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Learn from us</button>
        </div>
        <div className="px-4 h-[1px] lg:hidden w-full bg-[#DDDDDD] my-8"></div>
        <div className="px-4">
          <h3 className="font-nexa-bold text-[24px] leading-[38px] md:text-[32px] md:leading-[48px]">FAQs</h3>
          <p className="font-poopins text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] my-[13px]">Have any questions or thoughts on you can start your brand or business? With Brandit we can propel you on your journey to blossoming brand</p>
          <button className="px-6 h-12 font-bold font-poopins text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Frequently Asked Questions</button>
        </div>
      </div>


      <Subscribe />

      <div className="div px-4 py-8 md:py-[56px] gap-4 flex flex-col content-center items-center bg-[#E2063A]">
        <h3 className="font-poopins text-[14px] leading-[22px] md:text-[24px] md:leading-[38px] font-medium text-white">Follow us on social media</h3>
        <div className="flex gap-1">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
      <Touch />
    </div> 
    
  )
}

