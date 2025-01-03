
import hero from '../assets/Images/Hero image.png'
import cm from '../assets/Images/clothing_mobile.svg'
import pm from '../assets/Images/production_mobile.svg'
import it from '../assets/Images/it.svg'
import Facts from '../Components/Facts.jsx'
import Wrangler from "../Components/Wrangler.jsx"
import Feature from "../Components/Feature.jsx"
import Testimonials from '../Components/Testimonials.jsx'
import Why from '../Components/Why.jsx'
import Touch from '../Components/Touch.jsx'
import but from '../assets/Images/Icon Button.png'
import one from '../assets/Images/Slide show/1.png'
import two from '../assets/Images/Slide show/2.png'
import three from '../assets/Images/Slide show/3.png'
import four from '../assets/Images/Slide show/4.png'
import five from '../assets/Images/Slide show/5.png'
import six from '../assets/Images/Slide show/6.png'
import seven from '../assets/Images/Slide show/7.png'
import eight from '../assets/Images/Slide show/8.png'

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}







export default function HomePage() {


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    /* speed: 90000, */
    autoplaySpeed: 3000,
    fade: true,
    speed: 1500,
    arrows: false,
    nextArrow: false,
  };



  return(
    <div className="mt-[96px]">
      <div className="relative flex flex-col items-center pt-[96px]">
        
        <Slider className="w-full" {...settings}>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={one} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={two} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={three} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={four} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={five} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={six} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={seven} alt="" />
          </div>
          <div className="w-full">
            <img className="h-[460px] lg:h-[700px] mx-auto" src={eight} alt="" />
          </div>
        </Slider>

      
      
    
        <div className="absolute top-[171px] text-center">
          <h1 className="text-[32px] leading-[48px] px-4 font-nexa-bold md:text-[48px] md:leading-[70px] lg:text-[56px] lg:leading-[78px]">
            From Sketch to Shelf: <br />Design, Produce, <br />Launch
          </h1>
          <p className="text-[14] leading-[22px] mt-4 font-poopins md:text-[16px] md:leading-[26px] lg:mt-[24px]">Launch Your Clothing Brand with Confidence</p>
          <div className="buttons flex flex-col items-center w-full mt-10 lg:mt-[48px]">
            <button className="bg-[#E2063A] h-12 text-white w-[196px] px-4  rounded-full relative overflow-hidden group lg:w-[262px] lg:h-[72px]  lg:pl-[40px]">
              <span className="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Get Custom Quote</p></span>
              <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
              <img className="absolute right-[16px] top-[50%]  translate-y-[-50%]" src={but} alt="" />
            </button>
            <button className="bg-white font-nexa-light px-4 h-12 w-[122px]  rounded-full mt-3 border-2 border-white hover:border-[#DDDDDD] lg:h-[72px] lg:w-[165px] ">
              <p className="font-nexa-bold text-center text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Get Blanks</p>
            </button>
          </div>
          
        </div>
      </div>
    
    <Wrangler /> 
    <Facts /> 
    <div className="flex flex-col">
      <div className="px-4 py-[72px] text-left lg:py-[96px] lg:text-right lg:flex lg:flex-row lg:gap-[54px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px] items-end">
        <div className="pb-[40px]  lg:pb-0">
          <img className="h-full" src={cm} alt="" />
        </div>
        <div className="lg:w-[50%] lg:flex lg:flex-col lg:items-end lg:justify-center">
          <h1 className="font-nexa-bold text-[40px] leading-[56px] md:text-[48px] md:leading-[70px] xl:text-[56px] xl:leading-[78px]">
            <span className="lg:whitespace-nowrap lg:block">Ready to <span className="block lg:inline"> Launch Your</span></span> Clothing <span className='pink'> Brand</span>?
          </h1>
          <p className="font-poopins text-[16px] leading-[26px] pt-[16px] box-border md:text-[20px] md:leading-[32px] lg:mt-[16px] lg:ml-[8px] xl:mt-[24px] xl:ml-[88px]">
            Brandit empowers you to turn your creative vision into a thriving online store. We provide everything you need to get started, from design tools to production expertise.
          </p>
          <button className="bg-[#E2063A]  text-white w-[293px] px-4 py-[13px] rounded-full relative overflow-hidden group mt-[40px] lg:mt-[46px] xl:mt-[56px] lg:w-[375px] lg:h-[72px] lg:py-4 lg:pl-[40px]">
            <span className="relative z-10 "><p className="font-nexa-light text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Start Your Clothing Line Journey!</p></span>
            <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
          </button>
        </div>
      </div>

      <div className="px-4 py-[72px] flex flex-col-reverse bg-black text-white lg:py-[96px] lg:text-left lg:flex lg:flex-row lg:gap-[54px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px] items-end">
        <div className="lg:w-[50%] lg:flex lg:flex-col lg:items-start justify-center">
          <h1 className="text-[46px] leading-[64px] lg:text-[48px] lg:leading-[70px] xl:text-[56px] xl:leading-[78px]">
            Scale Up Your <div className="block">Clothing</div> <div className="block">Production</div>
          </h1>
          <p className="font-poopins pt-4 lg:text-[20px] lg:leading-[32px] lg:mt-[24px] lg:mr-[8px] xl:mr-[88px]">
            Brandit is your partner in growth. We offer high-quality production solutions, from bespoke garment creation to seamless import options.
          </p>
          <button className="bg-[#E2063A]  text-white w-[263px] px-4 py-[13px] rounded-full relative overflow-hidden group mt-[40px] lg:mt-[56px] lg:w-[344px] lg:h-[72px] lg:py-4 lg:pl-[40px]">
            <span className="relative z-10 "><p className="font-nexa-light text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Get a Free Production Quote!</p></span>
            <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
          </button>
        </div>
        <div className="pb-[40px] lg:pb-0">
          <img src={pm} alt="" />
        </div>
      </div>
        
    </div>
    {/* <div className="bg-[url('./assets/Images/hero-pattern.svg')] bg-[length:300%] md:bg-cover  ">
      <Feature />
    </div> */}
    
    <div className=" px-4 pb-[72px] lg:flex flex-row md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <img className="lg:w-[40%]" src={it} alt="" />
      <div className="lg:w-[60%] md:flex md:flex-col md:justify-center lg:pt-[60px] 2xl:pt-[0px]">
        <p className="text-[#9A9A9A] font-poopins text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] xl:leading-[32px]">What best describes us</p>
        <h2 className="font-nexa-bold text-[32px] leading-[48px] py-[24px] xl:text-[40px] xl:leading-[56px] 2xl:text-[48px] 2xl:leading-[64px]">We are simply pioneering the next Gen of fashion</h2>
        <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] xl:text-[24px] xl:leading-[38px]">Brandit operates as a dynamic marketplace and production company specializing in clothing for luxury brands. With a clientele ranging from 500 to 100 luxury clothing brands, Brandit caters to customers seeking to launch their own clothing lines or resell customized apparel. Their production process involves creating bespoke garments from scratch and importing items from overseas, ensuring a diverse array of offerings. Brandit prides itself on transforming clients’ visions into tangible reality, serving as the conduit for bringing fashion dreams to life.</p>
        <button className="mt-[32px] text-left px-3 py-2 rounded-full font-nexa-bold  text-[14px] leading-[22px] border-2">About Us<img src="" alt="" /></button>
      </div>
    </div>
    <div className=" bg-[url('./assets/Images/hero-pattern.svg')] bg-cover bg-no-repeat">
      <Testimonials />
    </div>
    <Why />
    <Touch />
    {/* <Footer /> */}
  </div>

 )
}