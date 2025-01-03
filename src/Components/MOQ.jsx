import React, { useState, useEffect, useContext, useMemo } from "react";
import ho from "../assets/Images/ho.svg";
import sho from "../assets/Images/sho.svg";
import shi from "../assets/Images/shi.svg";
import ja from "../assets/Images/ja.svg";
import jea from "../assets/Images/jea.svg";
import jer from "../assets/Images/jer.svg";
import sw from "../assets/Images/sw.svg";
import ca from "../assets/Images/ca.svg";



export default function MOQ() {
  return(
    <div className="px-[40px] py-[72px] md:px-[80] lg:px-[120px] xl:px-[160px] 2xl:px-[180px] bg-black text-white xl:flex gap-20 lg:py-[135px]">
              <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[56px] lg:leading-[78px] mb-11">
                Our Products <span className="xl:block">Minimum Order</span>{" "}
                Quantity {"{MOQ}"}
              </h3>
              <div className="border-2 border-[#DDDDDD] p-6 rounded-[32px] xl:w-[50%]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={ho} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Hoodie
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={sho} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Shorts
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={shi} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Shirts
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={ja} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Jacket
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={jea} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Jeans
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={jer} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Jersey
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={sw} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      Sweatshirt
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-5 items-center">
                    <img className="lg:w-[56px]" src={ca} alt="" />
                    <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                      cap
                    </p>
                  </div>
                  <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                    20
                  </p>
                </div>
              </div>
            </div>
  )
}