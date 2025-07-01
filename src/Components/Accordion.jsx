import  { useState } from "react";

import PropTypes from "prop-types";

const Accordion = ({ title, answer }) => {

  Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

  const [accordionOpen, setAccordionOpen] = useState(false);

  const [hoverDisabled, setHoverDisabled] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
    setHoverDisabled(!hoverDisabled); // Toggle hover state when clicked
  };

  return (
    <div className={` px-4 lg:h-24 transform ease-out flex items-center  duration-[400ms] rounded-2xl ${accordionOpen && "flex items-center duration-[400ms] p-4 lg:h-[auto] h-[auto] bg-black"}`}>
      <div
          className={`py-2 ${accordionOpen && " "} group`}
          onClick={toggleAccordion}
        >
          <button className="flex  items-center justify-between w-full text-[#9A9A9A]">
            <p
              className={` font-medium leading-[22px] text-[14px]  md:font-nexa-bold lg:text-[24px] lg:leading-[38px] ${
                hoverDisabled ? "/* text-[#E2063A] */" : "group-hover:text-black"
              }`}
            >
              {title}
            </p>
            <svg
              className={`fill-current  shrink-0 ml-8 ${
                hoverDisabled ? "text-[#E2063A]" : "group-hover:fill-black"
              }`}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={`grid overflow-hidden transition duration-500 ease-in-out text-white text-sm ${
              accordionOpen
                ? "grid-rows-[2fr] opacity-100 pt-4 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="leading-[22px] text-[14px] md:font-nexa-bold lg:text-[20px] lg:leading-[35px] overflow-hidden ">{answer}</div>
          </div>
        </div>
      </div>
  );
};

export default Accordion;
