



import up from '../assets/Images/up.svg';
import down from '../assets/Images/down.svg';
import CustomCheckboxGroup from '../Components/jjj.jsx';

import  { useState,useEffect,useRef } from 'react';


const QuoteCal = ({checkboxes1,checkboxes2,checkboxes3,checkboxes4,checkboxes5,checkboxes6,checkboxes7,handleCheckboxChange1,handleCheckboxChange2,handleCheckboxChange3,handleCheckboxChange4,handleCheckboxChange5,handleCheckboxChange6,handleCheckboxChange7,checkboxData1,checkboxData2,checkboxData3,checkboxData4,checkboxData5,checkboxData6,checkboxData7, style}) => {
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


  
    const [selectedButton, setSelectedButton] = useState('button1');

    const handleButtonClick = (button) => {
      setSelectedButton(button);
      {button === 'button1' ? containerRef.current.scrollLeft -= 11160 : containerRef.current.scrollLeft += 11160}
    };
  
    

  return (
    <div className="px-4 my-[72px] py-[56px]">
      <button className={` ${selectedButton === 'button1' ? 'border-2 border-black' : 'border-2 border-white'} mb-2 rounded-full px-6 py-3 `} /* onClick={slideRight} */  onClick={() => handleButtonClick('button1')}>
      <p className="font-nexa-bold text-[14px] leading-[22px]">Production Quote Calculator</p>
      </button>
      <button className={`${selectedButton === 'button2' ? 'border-2 border-black' : 'border-2 border-white'} rounded-full px-6 py-3`} /* onClick={slideLeft} */ onClick={() => handleButtonClick('button2')}>
      <p className="font-nexa-bold text-[14px] leading-[22px]">Place an Order</p>
      </button>
      <div className="overflow-x-scroll overflow-y-hidden mt-10" ref={containerRef}>
        <h3 className="font-nexa-bold text-[24px] leading-[38px]">Quote Calculator</h3>
        <div className="flex flex-row overflow-x-scroll overflow-y-hidden w-[200%]">
          <div className="w-[100%] flex flex-col py-8 gap-[10px]">
            <div className="">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown1')}>
                <p>Clothing Type</p>
                {openDropdown === 'dropdown1' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData1.map(({ key, label }) => (
                  <div className={`${checkboxes1[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                      </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown2')}>
                <p>Print Design</p>
                {openDropdown === 'dropdown2' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData2.map(({ key, label }) => (
                  <div className={`${checkboxes2[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown3')}>
                <p>Quantity</p>
                {openDropdown === 'dropdown3' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData3.map(({ key, label }) => (
                  <div className={`${checkboxes3[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown4')}>
                <p>Addons</p>
                {openDropdown === 'dropdown4' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData4.map(({ key, label }) => (
                  <div className={`${checkboxes4[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown5')}>
                <p>Size</p>
                {openDropdown === 'dropdown5' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData5.map(({ key, label }) => (
                  <div className={`${checkboxes5[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown6')}>
                <p>Colour</p>
                {openDropdown === 'dropdown6' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData6.map(({ key, label }) => (
                  <div className={`${checkboxes6[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="div">
              <div className="flex px-6 justify-between items-center h-12" onClick={() => toggleDropdown('dropdown7')}>
                <p>Print Size</p>
                {openDropdown === 'dropdown7' ? <img src={up} alt="" /> : <img src={down} alt="" />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {checkboxData7.map(({ key, label }) => (
                  <div className={`${checkboxes7[key] ? 'inline-flex px-4  items-center  rounded-full bg-black text-white  h-12' : 'hidden h-0'}`} key={key}>
                    <span className={`w-4 m-[9.17px]  h-4 inline-block border-2 rounded-full bg-[#E2063A] border-[#E2063A]`}>   
                      <svg
                        className="w-4 h-4 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                        
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              
              
              
            </div>
            
            
            
            {/* <button className="dropdown-button" onClick={() => toggleDropdown('dropdown2')}>
              Dropdown 2 
              {openDropdown === 'dropdown2' ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </button>
            <button className="dropdown-button" onClick={() => toggleDropdown('dropdown3')}>
              Dropdown 3 
              {openDropdown === 'dropdown3' ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </button>
            <button className="dropdown-button" onClick={() => toggleDropdown('dropdown4')}>
              Dropdown 4 
              {openDropdown === 'dropdown4' ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </button> */}

            {openDropdown === 'dropdown1' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes1} handleCheckboxChange={handleCheckboxChange1}  checkboxData={checkboxData1} style={style.two} tag={'Clothing Type'}/>
                </div>
              </div>
            )}
            {openDropdown === 'dropdown2' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes2} handleCheckboxChange={handleCheckboxChange2}  checkboxData={checkboxData2} style={style.one} tag={'Print Design'}/>
                </div>
              </div>
            )}
            {openDropdown === 'dropdown3' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes3} handleCheckboxChange={handleCheckboxChange3}  checkboxData={checkboxData3} style={style.three} tag={'Quantity'}/>
                </div>
              </div>
            )}
            {openDropdown === 'dropdown4' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes4} handleCheckboxChange={handleCheckboxChange4}  checkboxData={checkboxData4} style={style.one} tag={'Addons'}/>
                </div>
                </div>
            )}
            {openDropdown === 'dropdown5' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes5} handleCheckboxChange={handleCheckboxChange5}  checkboxData={checkboxData5} style={style.three} tag={'Size'}/>
                  </div>
              </div>
            )}
            {openDropdown === 'dropdown6' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes6} handleCheckboxChange={handleCheckboxChange6}  checkboxData={checkboxData6} style={style.two} tag={'Colour'}/>
                </div>
              </div>
            )}
            {openDropdown === 'dropdown7' && (
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white w-[361px] rounded-[32px]" onClick={handleModalClick}>
                  <CustomCheckboxGroup checkboxes={checkboxes7} handleCheckboxChange={handleCheckboxChange7}  checkboxData={checkboxData7} style={style.three} tag={'Print Size'}/>
                </div>
              </div>
            )}
          </div>
          <div className="w-[100%]">
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default QuoteCal;
