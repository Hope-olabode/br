import teach from '../assets/Images/teach.jpg';
import teach2 from '../assets/Images/teach2.jpg';
import circle1 from '../assets/Images/circle1.png';
import circle2 from '../assets/Images/circle22.png';
import circle3 from '../assets/Images/circle3.png';
import circle4 from '../assets/Images/circle4.png';
import circle5 from '../assets/Images/circle5.png';
import circle6 from '../assets/Images/circle6.png';
import circle7 from '../assets/Images/circle7.png';
import circle8 from '../assets/Images/circle8.png';
import eventbut from '../assets/Images/eventbut.svg';
import sew from '../assets/Images/sew.jpg';
import sew2 from '../assets/Images/sew2.jpg';
import hood from '../assets/Images/hood.jpg';
import hood2 from '../assets/Images/hood2.jpg';
import clo from '../assets/Images/clo.jpg';
import clo2 from '../assets/Images/clo2.jpg';
import hoodBack from '../assets/Images/hoodBack.jpg';
import hoodBack2 from '../assets/Images/hoodBack2.jpg';
import design from '../assets/Images/design.jpg';
import design2 from '../assets/Images/design2.jpg';
import path from '../assets/Images/path.svg';
import calender from '../assets/Images/cal.svg';
import location from '../assets/Images/loc.svg';
import speak from '../assets/Images/speak.svg';
import person from '../assets/Images/per.svg';
import person2 from '../assets/Images/person2.png';
import food from '../assets/Images/food.svg';
import register from '../assets/Images/reg.svg';
import vid from '../assets/Images/video.svg';
import pre from '../assets/Images/presentation.svg';
import down from '../assets/Images/downloadables.svg';
import i from '../assets/Images/file.svg';
import Subscribe from '../Components/subscribe';
import Accordion from '../Components/Accordion';

export default function Education() {
  return(
    <div className="mt-[96px]">
      <div className="pt-[120px] pb-6 lg:pb-[98px] text-center px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h3 className="font-nexa-bold text-[36px] leading-[48px] md:text-[46px] md:leading-[58px] lg:text-[56px] lg:leading-[78px]">Elevate Your Fashion Game with Brandit</h3>
        <p className="font-poopins text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] mt-4">Join Our Exclusive Workshops, Seminars, and Training Events – Both Online and Offline</p>
        <img className="w-full mt-10 md:hidden" src={teach} alt="" />
        <img className="w-full mt-[96px] hidden md:block" src={teach2} alt="" />
      </div>
      <div className="py-[72px] lg:py-[128px] flex flex-col items-center relative px-4 overflow-hidden text-center">
        <img className="absolute rounded-r-full lg:hidden top-[-5px] left-0 -z-10" src={circle1} alt="" />
        <img className="absolute rounded-l-full lg:hidden top-10 right-0 -z-10" src={circle2} alt="" />
        <img className="absolute rounded-r-full lg:hidden left-0 bottom-0" src={circle3} alt="" />
        <img className="absolute rounded-l-full lg:hidden right-0 bottom-[-50px] " src={circle4} alt="" />

        <img className="absolute lg:block hidden lg:w-[200px] top-[-5px] left-0 -z-10" src={circle5} alt="" />
        <img className="absolute lg:block hidden lg:w-[135px] top-[150px] right-0 -z-10" src={circle6} alt="" />
        <img className="absolute lg:block hidden lg:w-[133px] left-0 bottom-[200px]" src={circle7} alt="" />
        <img className="absolute lg:block hidden lg:w-[200px] right-[20%] bottom-[0px] " src={circle8} alt="" />
        {/* <img className="" src={circle1} alt="" /> */}
        <div className="flex max-w-[705px] flex-col items-center">
          <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[48px] lg:leading-[64px] mb-4">Welcome to Brandit's Education and Training Hub</h3>
          <p className="font-poopins text-[14px] leading-[22px] lg:text-[24px] lg:leading-[38px]">At Brandit, we believe in the power of knowledge and creativity. Our Education and Training page is your gateway to discovering the latest trends in fashion, gaining new skills, and connecting with industry experts. Whether you're a budding fashion entrepreneur or a seasoned professional, our events are designed to inspire and empower you to take your brand to new heights.</p>
          <button className="mt-6 h-12 flex items-center font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] rounded-full text-black bg-white pl-4 pr-2 border-2 border-white hover:border-[#DDDD]  gap-3">Explore Upcoming Events<img src={eventbut} alt="" /></button>
        </div>
      </div>

      <div className="py-[72px] overflow-hidden px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="md:w-[712px] ">
          <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-4">Upcoming Seminars and Workshops</h3>
          <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">Stay ahead of the curve with our curated selection of fashion seminars and workshops. From virtual webinars to hands-on training sessions, we offer a variety of events to suit your needs and schedule</p>
        </div>
        <div className="overflow-x-scroll  mt-10 z-10">
          <div className="flex flex-row gap-2 lg:gap-6 w-[300%]  md:w-[145%] lg:w-[210%] xl:[w-100] my-1 ">
            <div className="relative w-[356px] lg:w-[596px]">
              <img className=" lg:hidden" src={sew} alt="" />
              <img className=" hidden lg:block" src={sew2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] mb-2 lg:mb-4">Mastering Sustainable Fashion Trends</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Learn about the latest sustainable fashion practices and how to implement them in your brand</p>
                <img src={path} className="my-4 lg:my-8" alt="" />
                <div className="flex flex-col gap-6 lg:gap-10">
                  <div className='flex gap-10 justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-[40px]" src={calender} alt="" />
                      <p className="font-poopins whitespace-nowrap text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">September 25, 2024</p>
                    </div>
                    <div className="w-[50%]">
                      <img className="mb-2 lg:w-[40px]" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Online via Zoom</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <img className="mb-2 lg:w-[40px]" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                      <img className="lg:w-[86px]" src={person} alt="" />
                  </div>
                  <div>
                    <img className="mb-2 lg:w-[40px]" src={food} alt="" />
                    <p className="font-poopins text-[14px] leading-[22px] font-medium  lg:text-[20px] lg:leading-[32px]">Refreshments provided for physical attendees. Free Brandit-branded notebooks for all participants.</p>
                  </div>
                  <button className="h-12 lg:h-[72px] flex justify-between items-center font-nexa-bold text-[14px] leading-[22px] rounded-full text-black bg-white pl-4 pr-2 border-2 border-white hover:border-[#DDDD] gap-3">Register Now <img src="" alt="" /><img src={register} alt="" /></button>
                  
                </div>
              </div>
            </div>
            <div className="relative w-[356px] lg:w-[596px]">
              <img className=" lg:hidden" src={hood} alt="" />
              <img className=" hidden lg:block" src={hood2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] mb-2 lg:mb-4">Mastering Sustainable Fashion Trends</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Learn about the latest sustainable fashion practices and how to implement them in your brand</p>
                <img src={path} className="my-4 lg:my-8" alt="" />
                <div className="flex flex-col gap-6 lg:gap-10">
                  <div className='flex gap-10 justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-[40px]" src={calender} alt="" />
                      <p className="font-poopins whitespace-nowrap text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">September 25, 2024</p>
                    </div>
                    <div className="w-[50%]">
                      <img className="mb-2 lg:w-[40px]" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Online via Zoom</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <img className="mb-2 lg:w-[40px]" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                      <img className="lg:w-[86px]" src={person} alt="" />
                  </div>
                  <div>
                    <img className="mb-2 lg:w-[40px]" src={food} alt="" />
                    <p className="font-poopins text-[14px] leading-[22px] font-medium  lg:text-[20px] lg:leading-[32px]">Refreshments provided for physical attendees. Free Brandit-branded notebooks for all participants.</p>
                  </div>
                  <button className="h-12 lg:h-[72px] flex justify-between items-center font-nexa-bold text-[14px] leading-[22px] rounded-full text-black bg-white pl-4 pr-2 border-2 border-white hover:border-[#DDDD] gap-3">Register Now <img src="" alt="" /><img src={register} alt="" /></button>
                  
                </div>
              </div>
            </div>
            <div className="relative w-[356px] lg:w-[596px]">
              <img className=" lg:hidden" src={clo} alt="" />
              <img className=" hidden lg:block" src={clo2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] mb-2 lg:mb-4">Mastering Sustainable Fashion Trends</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Learn about the latest sustainable fashion practices and how to implement them in your brand</p>
                <img src={path} className="my-4 lg:my-8" alt="" />
                <div className="flex flex-col gap-6 lg:gap-10">
                  <div className='flex gap-10 justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-[40px]" src={calender} alt="" />
                      <p className="font-poopins whitespace-nowrap text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">September 25, 2024</p>
                    </div>
                    <div className="w-[50%]">
                      <img className="mb-2 lg:w-[40px]" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Online via Zoom</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <img className="mb-2 lg:w-[40px]" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                      <img className="lg:w-[86px]" src={person} alt="" />
                  </div>
                  <div>
                    <img className="mb-2 lg:w-[40px]" src={food} alt="" />
                    <p className="font-poopins text-[14px] leading-[22px] font-medium  lg:text-[20px] lg:leading-[32px]">Refreshments provided for physical attendees. Free Brandit-branded notebooks for all participants.</p>
                  </div>
                  <button className="h-12 lg:h-[72px] flex justify-between items-center font-nexa-bold text-[14px] leading-[22px] rounded-full text-black bg-white pl-4 pr-2 border-2 border-white hover:border-[#DDDD] gap-3">Register Now <img src="" alt="" /><img src={register} alt="" /></button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="py-[72px] overflow-hidden px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="flex flex-col w-full items-end">
          <div className="md:w-[712px] text-right">
            <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-4">Highlights from Past Events</h3>
            <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">Missed an event? Check out our highlights and see what you can expect from future Brandit seminars and workshops</p>
          </div>
        </div>
        
        <div className="overflow-x-scroll mt-10 z-10">
          <div className="flex flex-row gap-2 lg:gap-4 w-[300%] lg:w-[210%]">
            <div className="relative  ">
              <img className="lg:hidden" src={hoodBack} alt="" />
              <img className="hidden lg:block w-full" src={hoodBack2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] lg:mb-4 mb-2 lg:whitespace-nowrap">Into Merchandise World</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Virtual seminar on fashion and technology, showcasing digital design tools, virtual shows, and e-commerce platforms</p>
                <img src={path} className="my-4 lg:my-[31px]" alt="" />
                <div className="flex flex-col gap-7 lg:gap-0">
                  <div className='flex justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-10" src={calender} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">June 5, 2024</p>
                    </div>
                    <div>
                      <img className="mb-2 lg:w-10" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Online via Zoom</p>
                    </div>
                  </div>
                  <div className="flex lg:mt-10 justify-between">
                    <div>
                      <img className="mb-2 lg:w-10" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                    <img className="hidden lg:block" src={person2} alt="" />
                  </div>
                  <div className="flex mt-4 justify-between">
                    <div>
                      <img className="mb-2 lg:w-10" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Michael Lee, Digital Fashion Specialist</p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>


            
            <div className=" relative">
              <img className="lg:hidden" src={design} alt="" />
              <img className="hidden lg:block" src={design2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] lg:mb-4 mb-2">Mastering Sustainable Fashion Trends</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Seminar on sustainable practices in fashion, including eco-friendly materials, ethical sourcing, and waste reduction</p>
                <img src={path} className="my-4 lg:my-[31px]" alt="" />
                <div className="flex flex-col gap-6 lg:gap-10 p4">
                  <div className='flex gap-10 lg:gap-20 justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-10" src={calender} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">March 15, 2024</p>
                    </div>
                    <div>
                      <img className="mb-2 lg:w-10" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Brandit HQ, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <img className="mb-2 lg:w-10" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                      <img className="lg:w-[86px]" src={person} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" relative">
              <img className="lg:hidden" src={design} alt="" />
              <img className="hidden lg:block" src={design2} alt="" />
              <div className="p-4 lg:p-6 absolute top-0 text-white">
                <h1 className="font-nexa-bold text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] lg:mb-4 mb-2">Mastering Sustainable Fashion Trends</h1>
                <p className="font-poopins text-[14px] leading-[22px] lg:font-medium lg:text-[20px] lg:leading-[32px]">Seminar on sustainable practices in fashion, including eco-friendly materials, ethical sourcing, and waste reduction</p>
                <img src={path} className="my-4 lg:my-[31px]" alt="" />
                <div className="flex flex-col gap-6 lg:gap-10 p4">
                  <div className='flex gap-10 lg:gap-20 justify-between'>
                    <div className="">
                      <img className="mb-2 lg:w-10" src={calender} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">March 15, 2024</p>
                    </div>
                    <div>
                      <img className="mb-2 lg:w-10" src={location} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Brandit HQ, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <img className="mb-2 lg:w-10" src={speak} alt="" />
                      <p className="font-poopins text-[14px] leading-[22px] font-medium lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Jane Doe, Fashion Industry Expert</p>
                    </div>
                      <img className="lg:w-[86px]" src={person} alt="" />
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
        
      </div>

      <div className="py-[72px] lg:flex lg:gap-12 px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="ib">
          <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-4">Exclusive Learning Resources</h3>
          <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">As a participant, you'll gain access to exclusive learning materials, including video recordings, presentation slides, and downloadable guides.</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4">
            <div className="div">
              <img src={vid} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] font-semibold mt-2 lg:font-medium lg:text-[20px] lg:leading-[32px]">Video Recordings</p>
            </div>
            <div className="div">
              <img src={pre} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] font-semibold mt-2 lg:font-medium lg:text-[20px] lg:leading-[32px]">Presentation Slides</p>
            </div>
            <div className="div">
              <img src={down} alt="" />
              <p className="font-poopins text-[14px] leading-[22px] font-semibold mt-2 lg:font-medium lg:text-[20px] lg:leading-[32px]">Downloadable Guides</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 border-[#DDDDDD] rounded-[32px] border-2 p-6">
          <div className="flex items-start">
            <div className="">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2 lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Sustainable Fashion Guidebook</h4>
              <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">A guide on sustainable fashion practices covering eco-friendly materials, ethical sourcing, and waste reduction tips.</p>
            </div>
            <img src={i} alt="" />
          </div>
          <div className="w-full bg-[#DDDDDD] h-[1px] my-4"></div>
          <div className="flex items-start">
            <div className="">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2 lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">2024 Fashion Trend Report</h4>
              <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Get our exclusive report on the latest fashion trends for 2024. Includes color forecasts, popular fabrics, and emerging styles.</p>
            </div>
            <img src={i} alt="" />
          </div>
          <div className="w-full bg-[#DDDDDD] h-[1px] my-4"></div>
          <div className="flex items-start">
            <div className="">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2 lg:font-nexa-bold lg:text-[24px] lg:leading-[38px]">Starting Your Own Clothing Brand: A Step-by-Step Guide</h4>
              <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Detailed roadmap for aspiring entrepreneurs starting a clothing brand. From niche selection to online store setup, it covers all.</p>
            </div>
            <img src={i} alt="" />
          </div>
        </div>
      </div>

      <Subscribe/> 
      <div className="px-5 py-24 grid grid-flow-row md:grid-cols-2 gap-y-4 md:gap-x-10 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <Accordion 
          title="What is Brandit?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="What is Brandit?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="What is Brandit?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="What is Brandit?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
      </div>
    </div>
  )
}