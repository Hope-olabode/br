import React, { useState } from 'react';
import post from '../assets/Images/Post-img/Cover Image.jpg';
import post1 from '../assets/Images/Post-img/Cover Image 1.jpg';
import post2 from '../assets/Images/Post-img/Cover Image 2.jpg';
import post3 from '../assets/Images/Post-img/Cover Image 3.jpg';
import post4 from '../assets/Images/Post-img/Cover Image 4.jpg';
import post5 from '../assets/Images/Post-img/Cover Image 5.jpg';
import post6 from '../assets/Images/Post-img/Cover Image 6.jpg';
import right from '../assets/Images/arrow-right.svg';
import left from '../assets/Images/arrow-left.svg';
import up from '../assets/Images/up.svg';
import down from '../assets/Images/down.svg';


// Sample data for 3 pages
const pageData = {
  1:  <div className="flex flex-col gap-2">
        <div className="row-start-1 row-end-3 bg-white p-2 rounded-t-[100px] rounded-b-xl">
          <img src={post} alt="" className="w-full rounded-full"/>
          <div className="my-4">
            <h3 className=" font-nexa-bold text-[24px] leading-[38px]">Mastering Mood Boards for Your Clothing Line</h3>
            <p className="mt-2 font-poopins text-[14px] leading-[22px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
          </div>
          <button className="font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
        </div>
        <div className="flex bg-white gap-4 p-2 rounded-l-[80px] rounded-r-xl h-[224px]">
          <img src={post1} alt="" className=" w-[47%] rounded-full" />
          <div className="w-[53%]">
            <div className="div">
              <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
              <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
            </div>
            <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
          </div>
        </div>
        <div className="flex gap-4 flex-row-reverse bg-white p-2 rounded-r-[80px] rounded-l-xl h-[224px]">
          <img src={post2} alt="" className="w-[47%] rounded-full"/>
          <div className="w-[53%]">
            <div className="div">
              <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
              <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
            </div>
            <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
          </div>
        </div>
      </div>,
  2:  <div className="flex flex-col gap-2">
        <div className="flex bg-white gap-4 p-2 rounded-l-[80px] rounded-r-xl h-[224px]">
          <img src={post1} alt="" className=" w-[47%] rounded-full" />
          <div className="w-[53%]">
            <div className="div">
              <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
              <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
            </div>
            <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
          </div>
        </div>
        <div className="flex gap-4 flex-row-reverse bg-white p-2 rounded-r-[80px] rounded-l-xl h-[224px]">
          <img src={post2} alt="" className="w-[47%] rounded-full"/>
          <div className="w-[53%]">
            <div className="div">
              <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
              <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
            </div>
            <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
          </div>
        </div>
        <div className="row-start-1 row-end-3 bg-white p-2 rounded-t-[100px] rounded-b-xl">
          <img src={post} alt="" className="w-full rounded-full"/>
          <div className="my-4">
            <h3 className=" font-nexa-bold text-[24px] leading-[38px]">Mastering Mood Boards for Your Clothing Line</h3>
            <p className="mt-2 font-poopins text-[14px] leading-[22px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
          </div>
          <button className="font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
        </div>
      </div>,
  3:  <div className="flex flex-col gap-2">
      <div className="flex gap-4 flex-row-reverse bg-white p-2 rounded-r-[80px] rounded-l-xl h-[224px]">
        <img src={post2} alt="" className="w-[47%] rounded-full"/>
        <div className="w-[53%]">
          <div className="div">
            <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
            <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
          </div>
          <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
        </div>
      </div>
      <div className="row-start-1 row-end-3 bg-white p-2 rounded-t-[100px] rounded-b-xl">
        <img src={post} alt="" className="w-full rounded-full"/>
        <div className="my-4">
          <h3 className=" font-nexa-bold text-[24px] leading-[38px]">Mastering Mood Boards for Your Clothing Line</h3>
          <p className="mt-2 font-poopins text-[14px] leading-[22px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
        </div>
        <button className="font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
      </div>
      <div className="flex bg-white gap-4 p-2 rounded-l-[80px] rounded-r-xl h-[224px]">
        <img src={post1} alt="" className=" w-[47%] rounded-full" />
        <div className="w-[53%]">
          <div className="div">
            <h3 className="font-poopins font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your C...</h3>
            <p className="mt-2 font-nexa-bold text-[12px] leading-[18px] text-[#9A9A9A]">This post explores the world of graphic design for apparel. It covers essential design software, typography c...</p>
          </div>
          <button className=" mt-2 font-nexa-bold w-[121px] h-[48px] px-[24px] py-[8px] text-[14px] leading-[22px]">Read more</button>
        </div>
      </div>
    </div>,
};

const Post = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const selectPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setDropdownVisible(false);
  };

  return (
    <div className={`flex p-2 flex-col items-center bg-[#F2F2F2]  ${currentPage === 1 ? 'rounded-t-[100px] ' : currentPage === 2 ? 'rounded-tl-[80px] rounded-tr-[15px]' : 'rounded-tr-[80px] rounded-tl-[15px]' }` }>
      <div className="mb-2">{pageData[currentPage]}</div>

      <div className="flex items-center content-between bg-white w-full rounded-full">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="pl-4 "
        >
          <img src={right} alt="" />
        </button>

        <div className="relative  w-full">
          <div className="flex flex-col content-center items-center">
            <button
              onClick={handlePageClick}
              className="px-4 py-2 flex"
            >
              {currentPage} {dropdownVisible ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </button>
          </div>

          {dropdownVisible && (
            <ul className="absolute left-[50%]  translate-x-[-50%] top-full mt-2 w-20 bg-white border rounded-md shadow-md z-10">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index + 1}
                  onClick={() => selectPage(index + 1)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="pr-4 "
        >
          <img src={left} alt="" />
        </button>
      </div>

      








      <div className="grid box gap-4  grid-rows-3 px-20">
        <div className="border-2 grid grid-cols-2  border-black col-start-1 rounded-r-[8px] rounded-l-[150px] gap-6 p-4 col-end-6">
          <img className="rounded-full h-full" src={post3} alt="" />
          <div>
            <h4 className="overflow-hidden text-ellipsis line-clamp-2 font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
            <p className="overflow-hidden text-ellipsis line-clamp-2 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
            <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
          </div>
        </div>
        <div className="border-2 grid grid-cols-2  border-black col-start-6 rounded-r-[150px] rounded-l-[8px] gap-6 p-4 col-end-11">
          <div>
            <h4 className="overflow-hidden text-ellipsis line-clamp-2 font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
            <p className="overflow-hidden text-ellipsis line-clamp-2 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
            <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
          </div>
          <img className="rounded-full h-full" src={post4} alt="" />
        </div>
        <div className="border-2 border-black col-start-11 col-end-[14] row-start-1 row-end-3 p-4 rounded-t-[128px] rounded-b-[8px]">
          <img className="rounded-full  mb-4" src={post5} alt="" />
            <div>
              <h4 className="font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
              <p className="overflow-hidden text-ellipsis line-clamp-5 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
              <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
            </div>
        </div>
        <div className="border-2 p-4 rounded-t-[128px] rounded-b-[8px] border-black col-start-1 col-end-5 row-start-2 row-end-4">
          <img className="rounded-full  mb-4" src={post6} alt="" />
          <div>
            <h4 className="font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
            <p className="overflow-hidden text-ellipsis line-clamp-5 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
            <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
          </div>
        </div>
        <div className="border-2 w-100% p-4 rounded-t-[128px] rounded-b-[8px] border-black col-start-5 col-end-9 row-start-2 row-end-4">
          <img className="rounded-full mb-4" src={post6} alt="" />
          <div>
            <h4 className="font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
            <p className="overflow-hidden text-ellipsis line-clamp-5 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
            <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
          </div>
        </div>
        <div className="border-2 border-black col-start-9 col-end-11 rounded-[32px]">66</div>
        <div className="border-2 border-black col-start-9 col-end-[14] rounded-r-[150px] rounded-l-[8px] p-4 grid grid-cols-2">
          <div>
            <h4 className="overflow-hidden text-ellipsis line-clamp-2 font-poopins mb-2 font-bold text-[16px] leading-[26px]">Mastering Mood Boards for Your Clothing Line</h4>
            <p className="overflow-hidden text-ellipsis line-clamp-2 mb-2 font-poopins font-medium text-[14px] leading-[22px]">This post explores the world of graphic design for apparel. It covers essential design software, typography considerations, and creative techniques for creating eye-catching graphics that elevate your clothing line.</p>
            <button className="font-nexa-bold text-[14px] leading-[22px] py-2 px-6">Read more</button>
          </div>
          <img className="rounded-full h-full" src={post4} alt="" />
        </div>
      </div>
    












      
    </div>
  );
};

export default Post;
