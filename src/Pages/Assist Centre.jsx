import qq from '../assets/Images/qq.png'
import qq2 from '../assets/Images/qq2.jpg'
import ww from '../assets/Images/ww.jpg'
import ee from '../assets/Images/ee.png'
import ww2 from '../assets/Images/ww2.png'
import ee2 from '../assets/Images/ee2.png'
import sms from '../assets/Images/sms.png';
import callCalling from '../assets/Images/call-calling.png';
import gps from '../assets/Images/gps.png';
import FAQ from '../Components/FAQ';
import Touch from '../Components/Touch';
import rd from '../assets/Images/reddown.svg';
import call from '../assets/Images/call.svg';
import mail from '../assets/Images/mail.svg';
import whatsapp from '../assets/Images/whatsapp.svg';
import { NavLink } from "react-router-dom";


export default function AssistCentre() {
  return(
    <div className="mt-[96px] lg:mt-[197px]">
      <div className="px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]  pt-[120px] pb-6">
        <h1 className="font-nexa-bold text-[36px] leading-[48px] md:text-[44px] md:leading-[56px] lg:text-[56px] lg:leading-[78px] text-center">Stuck on a Stitch? We’ve Got You Covered!</h1>
        <p className="font-poopins text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] text-center mt-4">Welcome to Brandit’s Help and Assist Centre! Our dedicated team is here to provide you with the support and guidance you need to succeed in launching and growing your clothing brand. Whether you have questions about our services, need advice on starting your brand, or require assistance with an order, we’re here to help every step of the way.</p>
      
        {/* <div className="grid grid-cols-3 grid-rows-2 gap-4  py-16">
          <div className="row-span-3 rounded-t-full">
            <img className="row-span-3 rounded-t-full" src={qq} alt="" />
          </div>
          <div className="rounded-e-full round rounded-s-full h-[100%]">
            <img  className="rounded-e-full round rounded-s-full h-[100%]" src={ww} alt="" />
            <p className=""></p>
          </div>
          <div className="h-[100%] bg-black border-2  row-start-2 col-start-2 rounded-b-full"></div>
          <img className="row-span-3 rounded-full" src={ee} alt="" />
        </div> */}

        <div className="flex lg:hidden flex-col mt-[190px] gap-4 ">
          <div className=" flex flex-col items-center">
            <div className="relative w-[361px]">
              <img className="" src={qq2} alt="" />
              <div className="text-center absolute top-0 text-white px-6 py-12">
                <h3 className="font-nexa-bold text-[24px] leading-[38px] mt-2">Launchpad</h3>
                <p className="font-poopins text-[14px] leading-[22px]">Brandit empowers you to turn your creative vision into a thriving online store. We provide everything you need to get started, from design tools to production expertise.</p>
                <NavLink to='/Launchpad'><button className="mt-6 h-12 font-nexa-bold text-[14px] leading-[22px] rounded-full text-black bg-white w-full">Start Your Clothing Line Journey!</button></NavLink>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between md:h-[400px]">
            <div className="relative">
              <img className="w-[100%] h-[100%]" src={ww} alt="" />
              <div className="text-center absolute fl top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white px-6 py-10 w-[173px]">
                <h3 className="font-nexa-bold text-[24px] leading-[38px]">Frequently Asked Questions</h3>
                <div className="flex w-full justify-center items-center">
                <img className="mt-4" src={rd} alt="" />
                </div>
              </div>
            </div>
            <div className="rounded-tr-full rounded-br-full bg-black h-100% relative w-[172px] md:w-[250px]">
              <div className="text-left absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  text-white px-6 py-10">
                <h3 className="font-nexa-bold text-[24px] leading-[38px]">Quick Actions</h3>
                <div className="mt-4 grid grid-cols-2 w-[106px] gap-2">
                  <button className=""><img src={call} alt="" /></button>
                  <button className=""><img src={mail} alt="" /></button>
                  <button className=""><img src={whatsapp} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-[361px]">
              <img className="rounded-t-full rounded-b-full" src={ee} alt="" />
              <div className="text-center absolute top-0 text-white px-16 py-[92px]">
                <h3 className="font-nexa-bold text-[24px] leading-[38px] mt-2">Education and Training</h3>
                <p className="font-poopins text-[14px] leading-[22px] my-5">Stay Informed and Up-to-Date with the Newest Fashion Trends and Techniques</p>
                <NavLink to='/Education'><button className=" h-12 font-nexa-bold text-[14px] leading-[22px] rounded-full text-black bg-white w-[90%]">Education and Training</button></NavLink>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden lg:grid grid-cols-3 mt-10 md:mt-[95px] lg:mt-[190px] gap-4 ">
          <div className=" flex flex-col items-center w-[100%] h-[100%]">
            <div className="relative ">
              <img className="rounded-t-[1200px]" src={qq} alt="" />
              <div className="text-center absolute bottom-0 text-white px-6 py-12">
                <h3 className="font-nexa-bold mb-5 text-[24px] leading-[35px] xl:text-[36px] xl:leading-[48px]">Launchpad</h3>
                <p className="font-poopins font-medium text-[16px] leading-[26px]">Brandit empowers you to turn your creative vision into a thriving online store. We provide everything you need to get started, from design tools to production expertise.</p>
                <NavLink to='/Launchpad'><button className="mt-6 xl:mt-[140px] h-[72px] font-nexa-bold text-[16px] leading-[26px] rounded-full text-black bg-white w-full">Start Your Clothing Line Journey!</button></NavLink>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 justify-between lg:h-[100%] xl:h-[120%] w-[100%]">
            <div className="relative">
              <img className="w-[100%] h-[100%]" src={ww2} alt="" />
              <div className="flex items-center flex-col text-center absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white px-6 py-10 w-[90%]">
                <h3 className="font-nexa-bold text-[24px] leading-[35px] xl:text-[36px] xl:leading-[48px] ">Frequently Asked Questions</h3>
                <img className="mt-4 xl:w-[72px]" src={rd} alt="" />
              </div>
            </div>
            <div className="rounded-b-full  bg-black lg:h-[100%] xl:h-[67%] relative">
              <div className="text-left  absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  text-white  whitespace-nowrap w-[60%]">
                <h3 className="font-nexa-bold text-center text-[24px] leading-[35px] xl:text-[36px] xl:leading-[48px]">Quick Actions</h3>
                <div className="mt-4 grid grid-cols-3  gap-2">
                  <button><img className="xl:w-[72px]" src={call} alt="" /></button>
                  <button><img className="xl:w-[72px]" src={mail} alt="" /></button>
                  <button><img className="xl:w-[72px]" src={whatsapp} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[100%]">
            <div className="relative h-[100%]" >
              <img className="rounded-t-full rounded-b-full h-full self-stretch" src={ee2} alt="" />
              <div className="text-center absolute text-white px-6 py-[92px] top-[50%] xl:top-[70px] translate-y-[-50%] xl:translate-y-0">
                <h3 className="font-nexa-bold text-[24px] leading-[35px] xl:text-[36px] xl:leading-[48px] mt-2">Education and Training</h3>
                <p className="font-poopins font-medium text-[16px] leading-[26px] my-5">Stay Informed and Up-to-Date with the Newest Fashion Trends and Techniques</p>
                <NavLink to='/Education'><button className=" h-[72px] font-nexa-bold text-[16px] leading-[26px] rounded-full text-black bg-white w-[90%]">Education and Training</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center text-center font-nexa-light text-[24px] leading-[38px] px-4 py-[56px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="flex content-center flex-col lg:w-auto items-center">
          <img src={callCalling} alt="" className="w-[32px] lg:w-[72px] mb-4"/>
          <h3 className="font-nexa-light text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">+23480-2345-6789</h3>
          <h3 className="font-nexa-light text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">+23480-2345-6789</h3>
          <h3 className="font-nexa-light text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">+23480-2345-6789</h3>
        </div>
        <div className="flex content-center lg:w-auto flex-col items-center font-nexa-light text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">
          <img src={gps} alt="" className="w-[32px] lg:w-[72px] mb-4" />
          <h3>Lagos, Nigeria</h3>
          <h3>United Kingdom</h3>
          <h3>Canada</h3>
        </div>
        <div className="flex content-center w-[100%] lg:w-auto flex-col items-center">
          <img src={sms} alt="" className="w-[32px] lg:w-[72px] mb-4" />
          <h3 className="font-nexa-light text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">brandit.marketplace<br />@gmail.com</h3>
        </div>
      </div>
      <FAQ />
      <Touch />
    </div>
  );
}
