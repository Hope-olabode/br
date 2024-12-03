import React, { useEffect, useRef } from "react";
import i1 from "../assets/Images/i1.png"
import i2 from "../assets/Images/i2.png"
import i3 from "../assets/Images/i3.png"
import i4 from "../assets/Images/i4.png"
import i5 from "../assets/Images/i5.png"
import post1 from '../assets/Images/Post-img/Cover Image.jpg';
import post2 from '../assets/Images/Post-img/Cover Image 1.jpg';
import post3 from '../assets/Images/Post-img/Cover Image 2.jpg';
import img from "../assets/Images/image 9.jpg"
import img2 from "../assets/Images/image 92.png"
import kk from "../assets/Images/kk.svg"
import ll from "../assets/Images/ll.svg"
import mm from "../assets/Images/mm.svg"
import nn from "../assets/Images/nn.svg"
import oo from "../assets/Images/oo.svg"
import pp from "../assets/Images/pp.svg"
import GianniVersace from "../Components/Gianni_Versace"



export default function Launchpad() {


  const textRefs = useRef([]); // Reference for text elements
  const sectionRefs = useRef([]); // Reference for section elements
  const scrollableDiv = useRef(null); // Reference for the scrollable div
  const textScrollDiv = useRef(null); // Reference for the horizontal text container

  // Function to handle text color change
  const changeTextColor = (index) => {
    textRefs.current.forEach((text, i) => {
      text.classList.toggle("text-[#E2063A]", i === index);
      text.classList.toggle("text-black", i !== index);
    });

    // Scroll the text container to the matching text
    const selectedText = textRefs.current[index];
    const textContainer = textScrollDiv.current;
    if (selectedText && textContainer) {
      textContainer.scrollTo({
        left: selectedText.offsetLeft - textContainer.offsetLeft, // Scroll to the text element
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Scroll to the section when the corresponding text is clicked
  const handleTextClick = (index) => {
    const section = sectionRefs.current[index];
    if (scrollableDiv.current && section) {
      scrollableDiv.current.scrollTo({
        top: section.offsetTop - scrollableDiv.current.offsetTop, // Scroll relative to the container
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  useEffect(() => {
    // Observer options
    const observerOptions = {
      root: scrollableDiv.current,
      threshold: 0.5, // 50% of the section must be visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          changeTextColor(index);
        }
      });
    }, observerOptions);

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  


  return (
    <div className="mt-[96px]">
      <div className="py-[120px] px-4 text-center md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[140px]">
        <h4 className="font-poopins text-[16px] leading-[26px] font-medium text-[#9A9A9A] mb-4 lg:font-nexa-bold lg:text-[36px] lg:leading-[48px]">Brandit Launchpad</h4>
        <h3 className="font-nexa-bold text-[36px] leading-[48px] lg:text-[56px] lg:leading-[78px]">Your Roadmap to Fashionpreneurship</h3>
        <p className="font-poopins text-[14px] leading-[22px] mt-6 lg:text-[20px] lg:leading-[32px]">Welcome to Brandit Launchpad: Turn Your Clothing Line Dreams into Reality! Our comprehensive guide empowers you to navigate every step, from concept to creation.</p>
        <img className="mt-10 w-[100%] md:hidden" src={img} alt="" />
        <img className="mt-10 lg:mt-[186px] w-[100%] hidden md:block" src={img2} alt="" />
      </div>
      <GianniVersace />
      <div className="py-[72px] px-4 bg-black text-white md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[140px]">
        <h3 className="font-nexa-bold text-[24px] leading-[38px] text-center lg:text-[36px] lg:leading-[48px]">Step-by-Step Guide</h3>
        <div className="lg:flex">
          <div className="lg:w-[40%]">
            <h1 className="font-nexa-bold text-[48px] leading-[64px] mt-8 mb-4 xl:text-[56px] xl:leading-[78px]">Key phases of <br className="hidden lg:block"/> launching a <br className="hidden lg:block"/> clothing line</h1>
            <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">A bite-sized guide on the steps to <br className="hidden lg:block"/> launching your clothing line</p>
          </div>
          <div className="mt-10 border-2 border-white rounded-[32px] flex flex-col gap-10 px-4 py-6 h-[581px] overflow-scroll lg:w-[60%]">
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 1</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={kk} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Concept & Inspiration</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Define your brand identity, target audience, and the overall vision for your clothing line. What makes your brand unique? Who are you designing for? Craft a mood board to visually represent your brand aesthetic.</p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 2</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={ll} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Market Research & Niche Selection</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Research current market trends and identify a gap in the market where your clothing line can thrive. Understand your target audience's needs, preferences, and buying</p>
                  <p>Niche Market Research Guide</p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 3</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={mm} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Product Design & Development</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Sketch your clothing designs, considering factors like functionality, style, and wearability. Create prototypes to test your ideas and gather feedback. Refine your product line based on your findings.</p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 4</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={nn} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Sourcing & Production</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Source high-quality materials that align with your brand values and budget. Research ethical and sustainable manufacturing practices. Partner with a reliable clothing manufacturer to bring your designs to life.</p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 5</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={oo} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Branding & Marketing</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Develop a strong brand identity that resonates with your target audience. This includes your brand name, logo, messaging, and visual style. Create a marketing strategy to build brand awareness and generate excitement for your clothing line. Utilize social media platforms and influencer marketing to reach your target audience.</p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#E2063A] pl-[72px] font-medium">Step 5</h4>
              <div className="flex items-start gap-5 mt-1">
                <img src={pp} alt="" />
                <div className="div">
                  <h3 className="font-nexa-bold text-[24px] leading-[38px]">Launch & Sales</h3>
                  <p className="font-poopins text-[14px] leading-[22px] mt-2">Launch your online store using a user-friendly e-commerce platform. Implement effective sales strategies like promotions and discounts to attract customers. Prioritize excellent customer service to build brand loyalty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* Scrollable Horizontal Text */}
        <div className="lg:flex flex-col items-center">
          <div
            ref={textScrollDiv}
            className="flex gap-2 h-24 mx-2 overflow-x-auto py-6 overflow-scroll lg:overflow-auto"
          >
            {["Why Start Online?", "Pick Your Products", "Business Model Basics", "Launch with Less", "Find Your Niche"].map(
              (text, index) => (
                <button
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)}
                  className="font-nexa-bold h-48px px-6 text-[14px] leading-[22px] cursor-pointer text-black whitespace-nowrap"
                  onClick={() => handleTextClick(index)} // Scroll to section on click
                >
                  {text}
                </button>
              )
            )}
          </div>
        </div>

        {/* Scrollable Div with sections */}
        <div
          ref={scrollableDiv}
          className="scrollable h-[748px] overflow-y-auto"
        >
          {[
            { title: "Why Start Online?",
              imgSrc: i1,
              h1: "Why Launch Your Clothing Line Online?",
              p: "The world of fashion is at your fingertips! Starting an online clothing business offers a dynamic and rewarding path for aspiring entrepreneurs. Here are some of the key benefits that make online clothing a compelling choice:",
              l1: "Global Reach: Break free from geographical limitations! The internet allows you to sell your clothing creations to a worldwide audience, bypassing traditional retail restrictions.",
              l2: "Lower Overhead Costs: Compared to brick-and-mortar stores, online businesses require significantly lower startup costs. You eliminate expenses like rent, utilities, and physical inventory management.",
              l3: "Flexibility & Scalability: Enjoy the freedom of being your own boss and setting your own schedule. As your online clothing business grows, you can easily scale your operations to meet increasing demand.",
              l4: "Direct Customer Connection: Build a strong relationship with your customers through online interactions. Gather valuable feedback to refine your products and brand strategy.",
              l5: "Endless Creativity & Innovation: The online world empowers you to experiment with unique designs and cater to niche markets. Express your creativity and carve out your space in the ever-evolving fashion industry."
            },
            { title: "Pick Your Products",
              imgSrc: i2,
              h1: "Define Your Style: Choosing the Perfect Clothing Items for Your Brand",
              p: "Your clothing line is a curated story waiting to be told! Selecting the right products is crucial for establishing a strong brand identity and attracting your target audience. Here are some key factors to consider when picking your products:",
              l1: "Brand Identity: Reflect on your brand's core values and overall aesthetic. What message do you want your clothing to convey? Choose items that embody your brand's unique personality.",
              l2: "Target Audience: Who are you designing for? Understanding your target market's needs, preferences, and fashion sense is essential. Research current trends within your chosen niche.",
              l3: "Product Mix: Strike a balance between variety and focus. Offer a range of clothing items that complement each other while maintaining a cohesive brand image. Consider core staples, seasonal pieces, and statement items.",
              l4: "Quality & Sustainability: Prioritize high-quality materials and construction to ensure customer satisfaction and brand reputation. Explore sustainable practices and eco-friendly materials that resonate with conscious consumers.",
              l5: "Profitability: Factor in production costs, pricing strategies, and potential profit margins when selecting your clothing items."
            },
            { title: "Business Model Basics",
              imgSrc: i3,
              h1: "Chart Your Course: Exploring Business Models for Your Clothing Line",
              p: "The world of online clothing businesses thrives on diverse approaches. Understanding various business models empowers you to choose the one that best aligns with your resources, goals, and target audience. Here's a breakdown of some popular options:",
              l1: "Made-to-Order (MTO): This model allows customers to order clothing items that are produced after their order is placed. It minimizes upfront inventory costs but requires strong production partnerships and potentially longer fulfillment times.",
              l2: "Pre-Order: Generate excitement and secure funding upfront by offering pre-orders for your clothing line before production begins. This model requires effective marketing strategies and clear communication with customers regarding production timelines.",
              l3: "Dropshipping: Partner with a dropshipping supplier who handles inventory and fulfillment. This eliminates inventory management for you but may limit profit margins and control over product quality.",
              l4: "Print-on-Demand (POD): Leverage POD services to print your designs onto pre-made clothing items. This offers a low-investment entry point but may limit your design customization options.",
              l5: "Wholesale: Produce your clothing line in bulk and sell it to retail stores. This model requires significant upfront investment and strong sales strategies to secure wholesale partnerships."
            },
            { title: "Launch with Less",
              imgSrc: i4,
              h1: "Launching Your Clothing Line with Print-on-Demand",
              p: "Limited funds shouldn't limit your fashion dreams! Print-on-Demand (POD) offers a cost-effective way to launch your clothing line without a significant upfront investment. Here's how POD empowers aspiring entrepreneurs:",
              l1: "Low Barrier to Entry: POD eliminates the need for bulk inventory purchases, allowing you to test your designs and market viability with minimal financial risk.",
              l2: "Scalability & Flexibility: Easily add new designs to your collection as your business grows, without worrying about overstocking or understocking inventory.",
              l3: "Focus on Design & Creativity: Free yourself from inventory management and focus on what you love most – designing and creating unique clothing items. POD services handle production and fulfillment.",
              l4: "Wide Range of Products: Many POD providers offer a variety of clothing items like t-shirts, hoodies, and accessories, allowing you to cater to diverse customer preferences.",
              l5: "Testing & Refining: Launch a small initial collection with POD and gather customer feedback before expanding your product line, ensuring your designs resonate with your target audience."
            },
            { title: "Find Your Niche: Unlocking a Loyal Customer Base",
              imgSrc: i5,
              h1: "Carve Your Space: The Power of Niche Selection in Building Your Clothing Brand",
              p: "Standing out in the vast world of fashion requires focus. Identifying your niche market allows you to cater to a specific audience with unique needs and preferences, fostering brand loyalty and customer connection. Here's why finding your niche is crucial:",
              l1: "Targeted Marketing: By understanding your ideal customer, you can develop targeted marketing strategies that resonate with their interests and buying habits. Maximize your marketing efforts by reaching the right audience.",
              l2: "Brand Differentiation: A clearly defined niche sets you apart from competitors offering generic clothing options. Build a brand identity that speaks directly to your target audience's desires and sets yourself up for success.",
              l3: "Increased Customer Loyalty: Niche audiences appreciate brands that understand their unique style and needs. Cultivate a loyal customer base by offering them clothing items they can't find elsewhere.",
              l4: "Community Building: Foster a strong sense of community within your niche by engaging with your customers and fostering a shared passion for your brand's style and values.",
              l5: ""
            },
          ].map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-[300px] pt-[96px] p-4 lg:flex lg:flex-row lg:gap-11 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]"
            >
              {index % 2 === 0 ? (
                <div className="grid grid-flow-row lg:grid-flow-col lg:gap-x-14 lg:grid-cols-2">
                  <img className="lg:w-[100%] lg:mt-[72px]" src={section.imgSrc} alt={`Image ${index + 1}`} />
                  <div className=" mt-10 lg:mt-0 lg:w-[100%] ">
                    <h3 className="font-poopins text-[16px] leading-[26px] font-medium text-[#E2063A] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[42px]">
                      {section.title}
                    </h3>
                    <h1 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[30px] lg:leading-[43px] 2xl:text-[36px] 2xl:leading-[48px]">{section.h1}</h1>
                    <div className="mt-6 font-poopins text-[14px] leading-[22px] text-[#9A9A9A] xl:text-[16px] xl:leading-[27px] 2xl:text-[20px] 2xl:leading-[32px]">
                      <p>{section.p}</p>
                      <ul className="px-5">
                        <li className="list-disc">{section.l1}</li>
                        <li className="list-disc">{section.l2}</li>
                        <li className="list-disc">{section.l3}</li>
                        <li className="list-disc">{section.l4}</li>
                        {section.l5 && <li className="list-disc">{section.l5}</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-flow-row lg:grid-flow-col lg:gap-x-14 lg:grid-cols-2">
                  <div className="order-2 lg:order-1 mt-10 lg:w-[100%] lg:mt-0">
                    <h3 className="font-poopins text-[16px] leading-[26px] font-medium text-[#E2063A] lg:font-nexa-bold lg:text-[20px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[42px]">
                      {section.title}
                    </h3>
                    <h1 className="font-nexa-bold text-[24px] leading-[38px] lg:text-[30px] lg:leading-[43px] 2xl:text-[36px] 2xl:leading-[48px]">{section.h1}</h1>
                    <div className="mt-6 font-poopins text-[14px] leading-[22px] text-[#9A9A9A] xl:text-[16px] xl:leading-[27px] 2xl:text-[20px] 2xl:leading-[32px]">
                      <p>{section.p}</p>
                      <ul className="px-5">
                        <li className="list-disc">{section.l1}</li>
                        <li className="list-disc">{section.l2}</li>
                        <li className="list-disc">{section.l3}</li>
                        <li className="list-disc">{section.l4}</li>
                        {section.l5 && <li className="list-disc">{section.l5}</li>}
                      </ul>
                    </div>
                  </div>
                  <img className="lg:w-[100%] lg:order-2  lg:mt-[72px]" src={section.imgSrc} alt={`Image ${index + 1}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 lg:py-[114px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
        <h4 className="font-poopins text-[16px] leading-[26px] font-medium text-center lg:font-nexa-bold lg:text-[36px] lg:leading-[48px]">Related Resources</h4>
        <div className="p-2 bg-[#F2F2F2] rounded-r-xl rounded-l-[100px] mt-6 lg:mt-12">
          <div className="overflow-scroll w-[100%]  bg-[#F2F2F2] rounded-r-xl rounded-l-[100px] ">
            <div className="overflow-scroll flex gap-4  w-[411%] rounded-l-[100px] rounded-r-xl md:w-[200%] lg:w-[150%]">
              <div className="flex bg-white gap-4 p-2 rounded-l-[100px] w-[100%] rounded-r-xl h-[224px]">
                <img src={post2} alt="" className=" w-[47%] rounded-full" />
                <div className="w-[53%]">
                  <div className="div">
                    <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
                    <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
                  </div>
                  <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
                </div>
              </div>
              <div className="flex gap-4 flex-row-reverse bg-white p-2 w-[100%] rounded-r-[100px] rounded-l-xl h-[224px]">
                <img src={post3} alt="" className="w-[47%] rounded-full"/>
                <div className="w-[53%]">
                  <div className="div">
                    <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
                    <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
                  </div>
                  <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
                </div>
              </div>
              <div className="flex bg-white gap-4 p-2 rounded-l-[100px] w-[100%] rounded-r-xl h-[224px]">
                <img src={post2} alt="" className=" w-[47%] rounded-full" />
                <div className="w-[53%]">
                  <div className="div">
                    <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
                    <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
                  </div>
                  <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
                </div>
              </div>
              <div className="flex bg-white gap-4 p-2 rounded-l-[100px] w-[100%] rounded-r-xl h-[224px]">
                <img src={post2} alt="" className=" w-[47%] rounded-full" />
                <div className="w-[53%]">
                  <div className="div">
                    <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
                    <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
                  </div>
                  <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center bg-black lg:py-[116px]">
        <h2 className="font-nexa-bold text-[24px] leading-[35px] text-white lg:text-[36px] lg:leading-[48px]">Ready to Take the First Step?</h2>
        <button className="bg-white font-nexa-light px-6 py-[13px]  rounded-full mt-6 border-2 border-white hover:border-[#DDDDDD]  lg:w-[311px] ">
          <p className="text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Get a Free Production Quote</p>
        </button>
      </div>
    </div>
  )
} 


  


