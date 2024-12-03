import React from 'react';

const CustomCheckboxGroup = ({ checkboxData, checkboxes, handleCheckboxChange, style, tag }) => {
  return (
    <div className="px-6 pt-6 pb-4">
      <p className="text-[14px] leading-[22px] font-medium mb-4">{tag}</p>
      <div key={style} className={`${style}`}>
        {checkboxData.map(({ key, label }) => (
          <div >
            <label className={`${checkboxes[key] ? 'bg-black  hover:border-white transition-all duration-200 ease-in-out' : ''}  border-2 border-white pl-4  hover:border-2 hover:border-[#DDDDDD] group rounded-full inline-flex w-full h-12 items-center cursor-pointer`} key={key}>
              <input
                type="checkbox"
                checked={checkboxes[key]}
                onChange={() => handleCheckboxChange(key)}
                className="hidden"
              />
              <span
                className={`w-4 m-[9.17px] group-hover:border-[#E2063A] h-4 inline-block border-2 rounded-full transition-all duration-200 ease-in-out ${
                  checkboxes[key] ? 'bg-[#E2063A] border-[#E2063A]' : 'bg-white border-gray-300'
                }`}
              >
                {checkboxes[key] && (
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
                )}
              </span>
              <span  className={`${checkboxes[key] ? 'text-white' : ''}  text-[14px] leading-[22px] ml-[2px] text-[#1F1F1F]`}>{label}</span>
            </label>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CustomCheckboxGroup;
