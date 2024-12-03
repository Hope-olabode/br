import { useState } from "react"
import Footer from "../Components/Footer.jsx"
import Feature from "../Components/Feature.jsx"
import temp_product from '../assets/Images/temp product.svg'
import QuoteCal from "../Components/Quote_Cal.jsx"
import QuoteCalc from "../Components/Quote_Cal copy.jsx"
import FAQ from "../Components/FAQ.jsx"
import Testimonials from '../Components/Testimonials.jsx'
import Touch from '../Components/Touch.jsx'
import one from '../assets/Images/Apparel-img/1.png'
import two from '../assets/Images/Apparel-img/2.png'
import three from '../assets/Images/Apparel-img/3.png'
import four from '../assets/Images/Apparel-img/4.png'
import five from '../assets/Images/Apparel-img/5.png'
import six from '../assets/Images/Apparel-img/6.png'
import seven from '../assets/Images/Apparel-img/7.png'
import eight from '../assets/Images/Apparel-img/8.png'
import ho from '../assets/Images/ho.svg'
import sho from '../assets/Images/sho.svg'
import shi from '../assets/Images/shi.svg'
import ja from '../assets/Images/ja.svg'
import jea from '../assets/Images/jea.svg'
import jer from '../assets/Images/jer.svg'
import sw from '../assets/Images/sw.svg'
import ca from '../assets/Images/ca.svg'
import CustomCheckbox from "../Components/jjj.jsx"


export default function Apparel() {
  const [products, setProducts] = useState([]);
    
    // State to keep track of the active button (initially null or a specific index)
    const [activeIndex, setActiveIndex] = useState(-1);
  
    // Function to handle button click
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index)
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch('https://dummyjson.com/products?limit=20')
    .then(res => res.json())
    .then((data) => {
      setProducts(data.products); // Update state with fetched products
    })
    .catch((error) => console.error('Error fetching data:', error));
    console.log(products)
/* { status: 'ok', method: 'GET' } */
  };

  const items = [
    {name:'Hoodie', img:one, style:"rounded-full col-start-1 col-end-3",},
    {name:'Shorts', img:two, style:" rounded-full col-start-3 col-end-5 "},
    {name:'T-shirts', img:three, style:" rounded-full col-start-5 col-end-8"},
    {name:'Trouser', img:four, style:" rounded-full col-start-1 col-end-3 "},
    {name:'Sweatshirt', img:five, style:" rounded-full col-start-3 col-end-5"},
    {name:'Cap', img:six, style:" rounded-full col-start-5 col-end-8"},
    {name:'Jersey', img:seven, style:" rounded-full col-start-2 col-end-4"},
    {name:'Jackets', img:eight, style:" rounded-full col-start-4 col-end-6"}
  ];

  const img = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
  ];
  return (
    <div className="mt-[96px]">
      <div className="top_quality pt-[120px] ">
      
        <h1 className="text-[36px] leading-[48px] text-center font-nexa-bold lg:text-[56px] lg:leading-[78px]">Experience Top <span className="block lg:inline">Quality Product</span></h1>
        <div className="md:flex mt-4 items-center justify-center mb-10 overflow-scroll md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
          {/* <div className="flex  flex-row gap-[4px]">
            <button onClick={ ()=>select("hoodie")} className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Hoodie</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Shorts</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] whitespace-nowrap">T-shirt</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Trouser</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Sweatshirt</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Cap</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Jersey</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Jackets</button>
          </div> */}
          <div className="flex gap-[4px]">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`px-6 py-2 whitespace-nowrap hover:border-2  hover:border-[#E6E6E6] rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] ${
                  activeIndex === index ? 'border-2  border-black focus:border-black' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

       
        <div className={`${
              activeIndex === -1
                ? 'grid'
                : ''
            } px-4 py-2  grid-cols-6 grid-rows-3 gap-x-2  gap-y-2 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]`}>
          {/* <img src={one} className=" rounded-full col-start-1 col-end-3"/>
          <img src={two} className=" rounded-full col-start-3 col-end-5 "/>
          <img src={three} className=" rounded-full col-start-5 col-end-8"/>
          <img src={four} className=" rounded-full col-start-1 col-end-3"/>  
          <img src={five} className=" rounded-full col-start-3 col-end-5 "/>  
          <img src={six} className=" rounded-full col-start-5 col-end-8"/>  
          <img src={seven} className=" rounded-full col-start-2 col-end-4"/>
          <img src={eight} className=" rounded-full col-start-4 col-end-6"/> */}
          {items.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.name}
            onClick={() => handleClick(index)}
            className={` ${item.style} ${
              activeIndex === -1 || activeIndex === index
                ? 'block'
                : 'hidden'
            }${
              activeIndex === index
                ? 'w-full '
                : ''
            }`}
          />
        ))}
        </div>
      </div>
      {/* <CustomCheckbox checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange}  checkboxData={checkboxData}/> */}
      <div className="px-[40px] py-[72px] md:px-[80] lg:px-[120px] xl:px-[160px] 2xl:px-[180px] bg-black text-white xl:flex gap-20 lg:py-[135px]">
        <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[56px] lg:leading-[78px] mb-11">Our Products <span className="xl:block">Minimum Order</span> Quantity {"{MOQ}"}</h3>
        <div className="border-2 border-[#DDDDDD] p-6 rounded-[32px] xl:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={ho} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Hoodie</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={sho} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Shorts</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={shi} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Shirts</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={ja} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Jacket</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={jea} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Jeans</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={jer} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Jersey</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={sw} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">Sweatshirt</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img className="lg:w-[56px]" src={ca} alt="" />
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">cap</p>
            </div>
            <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">20</p>
          </div>
        </div>
      </div>
      <Feature />
      {/* <QuoteCalc checkboxes1={checkboxes1} handleCheckboxChange={handleCheckboxChange}  checkboxData1={checkboxData1}/> */}
      <FAQ />
      <Testimonials />
      <Touch />
      
    </div>
  )
}