import up from '../assets/Images/up.svg';
import down from '../assets/Images/down.svg';
import CustomCheckboxGroup from '../Components/jjj.jsx';

import  { useState,useEffect,useRef } from 'react';

export default function CustomQuote() {
  const [Dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    
  });
  const [filterCategory, setFilterCategory] = useState()

  const checkboxData1 = [
    "Hoodie",
    "Shorts",
    "T-shirts",
    "Trouser",
    "Sweatshirt",
    "Cap",
    "Jersey",
    "Jackets",
  ];
  
  /* const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
    console.log(dropdown)
  }; */
  const toggleDropdown = (dropdownKey) => {
    setDropdowns((prevState) => {
      const updatedDropdowns = {
        ...prevState,
        [dropdownKey]: !prevState[dropdownKey],
      };

      // Log the updated checkboxes state to the console
     

      return updatedDropdowns;
    });
  };

  const closeModal = () => {
    setDropdowns(false);
  };

  const handleModalClick = (event) => {
    // Prevent closing the modal when clicking inside the modal content
    event.stopPropagation();
  };

  const containerRef = useRef(null);

  



  useEffect(() => {
    if (Dropdowns) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [Dropdowns]);


  
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
          <div className="w-[100%] flex flex-col py-8 gap-7">
            <div className="flex  justify-between items-center" onClick={() => toggleDropdown('dropdown1')}>
              <p>Clothing Type</p>
              {Dropdowns.dropdown1 ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div className="flex justify-between items-center" onClick={() => toggleDropdown('dropdown2')}>
              <p>Design Complexity</p>
              {Dropdowns.dropdown2 ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div className="flex justify-between items-center" onClick={() => toggleDropdown('dropdown3')}>
              <p>Enter quantity</p>
              {Dropdowns.dropdown3 ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div className="flex justify-between items-center" onClick={() => toggleDropdown('dropdown4')}>
              <p>Addons</p>
              {Dropdowns.dropdown4 ? <img src={up} alt="" /> : <img src={down} alt="" />}
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

            {Dropdowns.dropdown1 ?
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white lg:flex flex-wrap w-[500px] gap-2 pt-[24px] px-[24px] pb-4 mb-4 rounded-[32px]" onClick={handleModalClick}>
                {checkboxData1.map((item, index) => (
                      <button
                        key={index}
                        className={`${
                          filterCategory === item
                            ? "bg-black text-white "
                            : "bg-white text-black "
                        } flex items-center px-8 h-[72px] rounded-full  transition`}
                        onClick={() => setFilterCategory(item)}
                      >
                        <span
                          className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full ${
                            filterCategory === item
                              ? "bg-[#E2063A]"
                              : "border-2 border-[#9A9A9A]"
                          }`}
                        >
                          {filterCategory === item && (
                            <svg
                              className="w-3 h-3 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l3.086 3.086 6.793-6.793a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                        {item}
                      </button>
                    ))}
                </div>
              </div>
            :''}
            {Dropdowns.dropdown2 ?
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white p-[20px]" onClick={handleModalClick}>
                  
                  <h2>Dropdown 2</h2>
                  <p>Content for Dropdown 2</p>
                </div>
              </div>
            :""}
            {Dropdowns.dropdown3 ?
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white p-[20px]" onClick={handleModalClick}>
                  
                  <h2>Dropdown 3</h2>
                  <p>Content for Dropdown 3</p>
                </div>
              </div>
            :""}
            {Dropdowns.dropdown4 ?
              <div className="flex flex-col items-center justify-center fixed z-[999999] inset-0 w-full h-full overflow-auto bg-black bg-opacity-30" onClick={closeModal}>
                <div className="bg-white p-[20px]" onClick={handleModalClick}>
                  
                  <h2>Dropdown 4</h2>
                  <p>Content for Dropdown 4</p>
                </div>
              </div>
            :""}
          </div>
          <div className="w-[100%]">
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
      
  );
};