import Wrangler from "../Components/Wrangler.jsx"
import Touch from '../Components/Touch.jsx'
import Resellercap1 from '../assets/Images/cap1.jpg'
import Resellercap2 from '../assets/Images/cap2.jpg'
import bulb from '../assets/Images/bulb.svg'
import palerre from '../assets/Images/palette.svg'
import trending from '../assets/Images/trending.svg'
import diversity from '../assets/Images/diversity.svg'
import savings from '../assets/Images/savings.svg'
import search from '../assets/Images/saved_search_FILL0_wght400_GRAD0_opsz24 1.jpg'
import check from '../assets/Images/check_circle_FILL0_wght400_GRAD0_opsz24 1.jpg'
import sell from '../assets/Images/sell_FILL0_wght400_GRAD0_opsz24 1.jpg'
import campaign from '../assets/Images/campaign_FILL0_wght400_GRAD0_opsz24 1.jpg'
import box from '../assets/Images/box_FILL0_wght400_GRAD0_opsz24 1.jpg'
import Accordion from "../Components/Accordion.jsx";


export default function Reseller() {
  return(
    <div className="mt-[96px]">
      <div className="text-center pt-[120px] px-4 pb-6 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A] font-medium lg:font-nexa-bold lg:text-[36px] lg:leading-[48px]">Become a Brandit Reseller: </p>
        <h2 className="font-nexa-bold text-[36px] leading-[48px] mt-4 mb-6 lg:text-[56px] lg:leading-[78px]">Empower Others & Build Your Business Dreams</h2>
        <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">Sell fashion you love, earn on your own terms. Join our thriving reseller community.</p>
        <button className="bg-[#E2063A] my-10 text-white w-[233px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[311px] lg:h-[72px] lg:py-4 lg:pl-[40px]">
          <span class="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Become a Reseller Today</p></span>
          <span class="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10 "></span>
          <div className="absolute right-[15px] top-[50%] translate-y-[-50%] lg:right-[25px]">
            <div className="group-hover:hidden">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3565 11.944L10.5005 16.8L5.64453 11.944" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 3.2V16.664" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="hidden group-hover:block">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.872 17.9999C16.872 14.9039 13.792 12.3999 10 12.3999C6.20805 12.3999 3.12805 14.9039 3.12805 17.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
        <img className="w-[100%] md:hidden" src={Resellercap1} alt="" />
        <img className="w-[100%] hidden md:block" src={Resellercap2} alt="" />
      </div>
      <div className="py-14 lg:py-[72px] px-4 text-center md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h3 className=" font-nexa-bold text-[24px] leading-[38px] mb-6 lg:text-[36px] lg:leading-[48px]">What are the benefits of being a Brandit Reseller?</h3>
        <div className="px-[20px] flex flex-col lg:flex-row gap-4">
          <div className="px-4 py-6 flex flex-col items-center">
            <img className="mb-6 w-[54px] lg:w-36" src={bulb} alt="" />
            <div className="text-cente py-6 px-4 lg:px-0">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2">Be Your Own Boss</h4>
              <p className="font-poopins text-[14px] leading-[22px]">Become your own boss and set your own hours. Enjoy the freedom and flexibility of running your own reseller business.</p>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <img className="mb-6 w-[54px] lg:w-36" src={palerre} alt="" />
            <div className="text-cente py-6 px-4 lg:px-0">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2">Curate Your Collection</h4>
              <p className="font-poopins text-[14px] leading-[22px]">Sell fashion you love! Choose from a wide variety of trendy brands and styles to curate a collection that resonates with your target audience.</p>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <img className="mb-6 w-[54px] lg:w-36" src={trending} alt="" />
            <div className="text-cente py-6 px-4 lg:px-0">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2">Scale Up Your Success</h4>
              <p className="font-poopins text-[14px] leading-[22px]">The sky's the limit! Grow your reseller business at your own pace and experience the potential for significant earnings as you build your customer base.</p>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <img className="mb-6 w-[54px] lg:w-36" src={diversity} alt="" />
            <div className="text-cente py-6 px-4 lg:px-0">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2">Support & Resources</h4>
              <p className="font-poopins text-[14px] leading-[22px]">Sell fashion you love! Choose from a wide variety of trendy brands and styles to curate a collection that resonates with your target audience.</p>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <img className="mb-6 w-[54px] lg:w-36" src={savings} alt="" />
            <div className="text-cente py-6 px-4 lg:px-0">
              <h4 className="font-poopins text-[16px] leading-[26px] font-medium mb-2">Low Investment, High Rewards</h4>
              <p className="font-poopins text-[14px] leading-[22px]">Get started with minimal upfront costs and enjoy the potential for high returns. Brandit's reseller program offers a low barrier to entry and a chance to build a profitable business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 px-4 md:px-[80px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px]">
        <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-center lg:text-[36px] lg:leading-[48px]">How it works</h3>
        <div className="mt-8 lg:mt-[68px] lg:flex gap-10 flex-row">
          <div className="w-[40%]">
            <h4 className="mb-4 font-nexa-bold text-[40px] leading-[56px] lg:text-[56px] lg:leading-[78px]">Simple Steps to Reseller Success</h4>
            <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px] text-[#9A9A9A]">Here are 5 simple steps you should follow to achieve success while reselling</p>
          </div>
          <div className="w-[60%] mt-10 lg:mt-0 border-2 border-black rounded-[32px] py-6 px-4 flex flex-col gap-10">
            <div className="flex gap-2 content-center items-start">
              <img className="lg:w-[72px]" src={search} alt="" />
              <div>
                <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[32px] lg:leading-[42px]">Sign Up & Get Approved</h3>
                <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Fill out a quick and easy online application form to become a Brandit reseller. Our team will review your application and get you started in no time.</p>
              </div>
            </div>
            <div className="flex gap-2 content-center items-start">
              <img className="lg:w-[72px]" src={check} alt="" />
              <div>
                <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[32px] lg:leading-[42px]">Browse & Choose Brands</h3>
                <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Explore our extensive catalog of popular fashion brands and select the ones that perfectly align with your style and target market.</p>
              </div>
            </div>
            <div className="flex gap-2 content-center items-start">
              <img className="lg:w-[72px]" src={sell} alt="" />
              <div>
                <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[32px] lg:leading-[42px]">Set Your Prices & Margins</h3>
                <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Set competitive prices and profit margins for your chosen brands, allowing you to control your earning potential.</p>
              </div>
            </div>
            <div className="flex gap-2 content-center items-start">
              <img className="lg:w-[72px]" src={campaign} alt="" />
              <div>
                <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[32px] lg:leading-[42px]">Promote & Sell Your Collection</h3>
                <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Utilize Brandit's marketing resources and your own creativity to promote your curated collection and start making sales!</p>
              </div>
            </div>
            <div className="flex gap-2 content-center items-start">
              <img className="lg:w-[72px]" src={box} alt="" />
              <div>
                <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[32px] lg:leading-[42px]">Order Fulfillment & Customer Service</h3>
                <p className="font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Leave the order fulfillment and customer service to us! Brandit handles order processing, shipping, and any customer inquiries, allowing you to focus on growing your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wrangler />
      <div className="px-4 md:px-8 md:py-[6rem] py-[72px]">
        <h1 className="text-center font-nexa-bold text-[24px] leading-[38px]">Resellers Testimonials</h1>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-[2rem] md:gap-16 pt-[3rem] ">
          <div className="min-w-[350px] md:min-w-[400px] bg-white rounded-[20px] border-black border-2 py-[24px] px-[16px]">
            <img src="" alt="" />
            <div className="pt-4">
              <h3 className="pb-3 font-nexa-light text-[24px] leading-[38px] md:text-[36px] md:leading-[48px]">head</h3>
              <p className="font-poopins text-[12px] leading-[20px]  md:text-[20px] md:leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum aspernatur sapiente incidunt consectetur unde asperiores nemo quidem nostrum provident nihil tempore explicabo perspiciatis, laboriosam facilis, quibusdam officia amet. Amet.</p>
            </div>
          </div>
          <div className="min-w-[350px] md:min-w-[400px] bg-white rounded-[20px] border-black border-2 py-[24px] px-[16px]">
            <img src="" alt="" />
            <div className="pt-4">
              <h3 className="pb-3 font-nexa-light text-[24px] leading-[38px] md:text-[36px] md:leading-[48px]">head</h3>
              <p className="font-poopins text-[12px] leading-[20px]  md:text-[20px] md:leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum aspernatur sapiente incidunt consectetur unde asperiores nemo quidem nostrum provident nihil tempore explicabo perspiciatis, laboriosam facilis, quibusdam officia amet. Amet.</p>
            </div>
          </div>
          <div className="min-w-[350px] md:min-w-[400px] bg-white rounded-[20px] border-black border-2 py-[24px] px-[16px]">
            <img src="" alt="" />
            <div className="pt-4">
              <h3 className="pb-3 font-nexa-light text-[24px] leading-[38px] md:text-[36px] md:leading-[48px]">head</h3>
              <p className="font-poopins text-[12px] leading-[20px]  md:text-[20px] md:leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum aspernatur sapiente incidunt consectetur unde asperiores nemo quidem nostrum provident nihil tempore explicabo perspiciatis, laboriosam facilis, quibusdam officia amet. Amet.</p>
            </div>
          </div>
        </div> 
      </div>

      
      <div className=" py-[40px] p px-4 bg-black text-white text-center">
        <h3 className="font-nexa-bold pb-[24px] text-[24px] leading-[38px]">Ready to Join the Brandit Reseller Revolution?</h3>
        <button className="bg-[#E2063A]  text-white w-[233px] px-4 py-[13px] rounded-full relative overflow-hidden group lg:w-[311px] lg:h-[72px] lg:py-4 lg:pl-[40px]">
          <span class="relative z-10 "><p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Become a Reseller Today</p></span>
          <span class="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10 "></span>
          <div className="absolute right-[15px] top-[50%] translate-y-[-50%] lg:right-[25px]">
            <div className="group-hover:hidden">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3565 11.944L10.5005 16.8L5.64453 11.944" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 3.2V16.664" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="hidden group-hover:block">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.872 17.9999C16.872 14.9039 13.792 12.3999 10 12.3999C6.20805 12.3999 3.12805 14.9039 3.12805 17.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="lg:flex gap-8 md:px-[40px] lg:pt-[104px] lg:mb-16 lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <div className="py-10 lg:py-0 px-4 lg:px-0 lg:w-[50%]">
          <div className="flex items-center justify-between">
            <h3 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px]">Sign-Up form</h3>
            <div className="flex items-center gap-3 lg:hidden">
              <p className="font-nexa-bold text-[14px] leading-[22px]">FAQ</p>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#1F1F1F"/>
              <path d="M22.3361 13.5601L17.1201 18.7761C16.5041 19.3921 15.4961 19.3921 14.8801 18.7761L9.66406 13.5601" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-[10px]">
            <input type="text" placeholder="Full name" className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px]" />
            <input type="text" placeholder="Business name" className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px]" />
            <input type="email" placeholder="Email Address" className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px]" />
            <input type="tel" placeholder="Phone number" className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px]" />
            <textarea type="text" placeholder="Kindly provide a brief description of you target audience or ideal customer base. This helps us understand your market focus." className="border-2 border-[#DDDDDD] outline-none h-[266px] py-4 rounded-[32px] w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black" />
          </div>
          <div className="mt-6 lg:mt-12">
            <h3 className="font-nexa-bold text-[16px] leading-[22px] hover:text-[#E2063A] hover:cursor-pointer lg:text-[16px] lg:leading-[26px]">Terms and Conditions</h3>
            <button className="bg-[#E2063A]  text-white w-[233px] px-4 py-[13px] rounded-full relative overflow-hidden mt-4 group lg:w-[311px] lg:h-[72px] lg:py-4 lg:pl-[40px]">
              <span class="relative -z-10 "><p className="font-nexa-light text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">Submit Application</p></span>
              <span class="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
            </button>
          </div>
        </div>
        <div className="mt-9 lg:mt-0 flex flex-col gap-4 lg:w-[50%]">
          <h3 className="font-poopins text-[14px] leading-[22px] lg:hidden font-medium">FAQ</h3>
          <div className=" items-center justify-end i gap-3 hidden lg:flex lg:pb-10">
            <p className="font-nexa-bold text-[14px] leading-[22px]">FAQ</p>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#1F1F1F"/>
            <path d="M22.3361 13.5601L17.1201 18.7761C16.5041 19.3921 15.4961 19.3921 14.8801 18.7761L9.66406 13.5601" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
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
            answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
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
    </div>
  )
}

