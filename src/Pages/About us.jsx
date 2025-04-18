import custom from '../assets/Images/custom design.jpg';
import solutions from '../assets/Images/private label.jpg'
import packaging from '../assets/Images/packaging.jpg';
import ecommerce from '../assets/Images/e-commerce.jpg';
import welcome from '../assets/Images/welcome.jpg'
import welcome2 from '../assets/Images/welcome2.jpg'
import slideMobile from '../assets/Images/slideMobile.svg'
import Cap from '../assets/Images/Cap.svg'
import Top from '../assets/Images/Top.svg'
import Hoodie from '../assets/Images/Hoodie.svg'
import quest from '../assets/Images/quest.svg'
import Facts from '../Components/Facts.jsx'
import Footer from '../Components/Footer.jsx'

import Touch from '../Components/Touch.jsx'
import Why from '../Components/Why.jsx'
import Wrangler from '../Components/Wrangler.jsx'

import StackedCarousel from '../Components/s.jsx';
import GianniVersace from '../Components/Gianni_Versace.jsx';


const images = [
  'https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Image+1',
  'https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Image+2',
  'https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Image+3',
  'https://via.placeholder.com/600x300/FFFF00/FFFFFF?text=Image+4',
  'https://via.placeholder.com/600x300/FF00FF/FFFFFF?text=Image+5',
];


export default function aboutUs() {
  return(
    <div className="mt-[96px]">
      <div className="flex flex-col items-center text-center px-4 pt-[205px] pb-4 md:pb-10 lg:pb-20 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="text">
          <h1 className="text-[36px] leading-[48px] font-nexa-bold md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[78px]">
            Welcome to Brandit: <br />Where Dreams Become Reality
          </h1>
          <p className="font-poopins text-[14px] leading-[22px] pt-4 lg:pt-6 pb-10 md:pb-[52px] lg:pb-16 md:text-[16px] md:leading-[22px] lg:text-[20px] lg:leading-[32px]">Meet the passionate team dedicated to making your clothing line dreams a reality</p>
        </div>
          <img className="w-[100%] md:hidden" src={welcome} alt="" />
          <img className="w-[100%] hidden md:block" src={welcome2} alt="" />
      </div>

      <div className="our_story px-4 py-[72px] md:px-[40px] md:font-light lg:px-[60px] xl:px-[80px] 2xl:px-[120px] lg:font-extralight">
        <h5 className="font-poopins text-[14px] leading-[22px] md:text-[18px] md:leading-[30px] lg:text-[24px] lg:leading-[38px]">Our Story</h5>
        <h1 className="text-[32px] leading-[42px] font-nexa-bold py-4">From Humble Threads to Fashion Fireworks!</h1>
        <p className="font-poopins  text-[14px] leading-[22px] pb-[40px] md:text-[18px] md:leading-[30px] md:font-light lg:text-[24px] lg:leading-[38px] lg:font-extralight">Brandit is more than just a clothing production company; we’re a passionate collective of designers, production specialists, and dream-chaser enablers. We believe that everyone has the potential to create a thriving clothing line, and we’re here to empower you every step of the way. From the initial design spark to the final product in your customer’s hands, we’re your reliable partner in turning your fashion vision into a tangible reality.</p>
        <div className="image_slide">
          <img src={slideMobile} alt="" />
        </div>
      </div>

      <div className="px-4 py-[72px] md:py-[100px] lg:py-[128px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h2 className="text-[48px] leading-[64px] text-left font-nexa-bold lg:text-[56px] lg:leading-[78px]">The Brandit Dream Team: <span className="lg:block">We’re More Than Just Clothes! </span></h2>
        <div className="grid grid-cols-2 gap-[20px] mt-[72px]   md:flex overflow-x-scroll overflow-y-hidden">
          
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Cap} alt="" />
              <div className="price-stock pt-2 pl-2">
                <div className="flex">
                  <div className="div">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Adeoluwa Adewale</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media Manager</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Top} alt="" />
              <div className="price-stock pt-2 pl-2">
                <div className="flex items-center justify-between">
                  <div className="">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Ola Praise</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Hoodie} alt="" />
              <div className="price-stock pt-2 pl-2">
              <div className="flex items-center justify-between">
                  <div className="">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Ola Praise</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Top} alt="" />
              <div className="price-stock pt-2 pl-2">
              <div className="flex items-center justify-between">
                  <div className="">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Ola Praise</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Cap} alt="" />
              <div className="price-stock pt-2 pl-2">
                <div className="flex items-center justify-between">
                  <div className="">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Ola Praise</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
          <div className="border-[2px] pb-0 p-2 border-white  hover:border-[#E6E6E6] rounded-t-full max-w-[350px] md:min-w-[300px]">
            <img className="rounded-full" src={Hoodie} alt="" />
              <div className="price-stock pt-2 pl-2">
                <div className="flex items-center justify-between">
                  <div className="">
                    <p className="font-medium text-[16px] leading-[25px] md:text-[24px] md:leading-[38px]">Ola Praise</p>
                    <p className="text-[14px] leading-[22px] text-[#9A9A9A] md:text-[16px] md:leading-[26px]">Social Media</p>
                  </div>
                  <img className="md:mr-6" src={quest} alt="" />
                </div>
              </div>
          </div>
      
        
          
          
        </div>
      </div>

      <div className="bg-black text-white py-[72px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h3 className="font-nexa-light font-bold text-[24px] pb-12 leading-[38px]  text-center lg:text-[40px] lg:leading-[52px]">Our Services</h3>
        <div className="service">
          <div className="lg:flex gap-10">
            <div className="pb-10 lg:w-[40%]">
              <p className="font-bold font-nexa-bold  md:text-[24px] md:leading-[38px]">Our Vision</p>
              <p className="text-[14px] leading-[22px] font-normal font-nexa-light md:text-[24px] md:leading-[38px]">Bringing Your Fashion Dreams to Life</p>
            </div>
            <div className="right lg:w-[60%]">
              <p className="font-nexa-light font-extralight text-[24px] leading-[38px] md:text-[36px] md:leading-[48px]">At Brandit, we specialize in transforming your visionary clothing ideas into tangible success stories. Discover a suite of services designed to empower your brand from inception to delivery.</p>
            </div>
          </div>
          
          <div className="pt-12 lg:grid lg:grid-cols-5 lg:gap-x-10 lg:pt-12">
            <div className="md:col-span-2 flex justify-center items-center">
              <img  className="rounded-full" src={custom} alt="" />
            </div>
            <div className="md:col-span-3 mt-4">
              <h3 className="font-nexa-bold text-[24px] leading-[38px] pb-2 lg:pt-0 md:text-[36px] md:leading-[48px]">Custom Design & Production</h3>
              <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Dive deep into the world of custom fashion with our bespoke design and production services. Whether you’re starting from scratch or have a detailed vision, our expert designers and craftsmen work closely with you to bring your unique clothing line to life, ensuring every piece reflects your brand’s essence.</p>
            </div>
          </div>

          <div className="pt-12 md:grid md:grid-cols-5 md:gap-x-10 md:pt-12">
            <div className="md:col-span-2 flex justify-center items-center">
              <img className="rounded-full" src={solutions} alt="" />
            </div>
            <div className="md:col-span-3 mt-4">
              <h3 className="font-nexa-bold text-[24px] leading-[38px] pb-2 md:pt-0 md:text-[36px] md:leading-[48px]">Private Label Solutions</h3>
              <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Step into the market with confidence through our private label solutions. Choose from an extensive catalog of high-quality garments ready to be branded with your identity. It’s the perfect shortcut for emerging brands aiming to launch quickly without compromising on quality.</p>
            </div>
          </div>

          <div className="pt-12 md:grid md:grid-cols-5 md:gap-x-10 md:pt-12">
            <div className="md:col-span-2 flex justify-center items-center">
              <img className="rounded-full" src={packaging} alt="" />
            </div>
            <div className="md:col-span-3 mt-4">
              <h3 className="font-nexa-bold text-[24px] leading-[38px] pb-2 md:pt-0 md:text-[36px] md:leading-[48px]">Packaging & Delivery</h3>
              <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">Make a lasting impression from the moment your product reaches your customer’s hands. Our comprehensive packaging and delivery services ensure your items are not only safe and secure but also reflect your brand’s values and attention to detail, enhancing the unboxing experience.</p>
            </div>
          </div>

          <div className="pt-12 md:grid md:grid-cols-5 md:gap-x-10 md:pt-12">
            <div className="md:col-span-2 flex justify-center items-center">
              <img className="rounded-full" src={ecommerce} alt="" />
            </div>
            <div className="md:col-span-3  mt-4">
              <h3 className="font-nexa-bold text-[24px] leading-[38px] pb-2 md:pt-0 md:text-[36px] md:leading-[48px]">E-Commerce & Brand Development</h3>
              <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">In today’s digital age, a strong online presence is key. We offer e-commerce solutions and brand development strategies tailored to the fashion industry. From creating captivating online stores to implementing marketing strategies that drive sales, we’re here to help you grow your digital footprint and connect with your target audience effectively.</p>
            </div>
          </div>
        </div>
      </div>
      <Why />
      <GianniVersace />
      <Wrangler />
      <Facts/>
      <Touch />
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Horizontal Left Stacked Carousel</h1>
      {/* <StackedCarousel images={images} interval={3000} /> */}
    </div>
     
    </div>
  )
}