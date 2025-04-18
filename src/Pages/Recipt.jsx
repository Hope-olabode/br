import l from "../assets/Images/l.svg";
import l2 from "../assets/Images/l2.svg";
import D from "../assets/Images/download.svg";
import lw from "../assets/Images/LogoW.svg";
import tell from "../assets/Images/tell.svg";
import mail from "../assets/Images/rmail.svg";
import location from "../assets/Images/rlocation.svg";

export default function Recipt() {
  return (
    <div className="mt-[240px] h-[956px] bg-black m-12 rounded-[7.42px] lg:rounded-[32px] relative">
      <img
        className="w-full h-full  rounded-[7.42px] lg:rounded-[60px] lg:hidden"
        src={l}
        alt=""
      />
      <img
        className="w-full h-full rounded-[7.42px] lg:rounded-[60px] hidden lg:block"
        src={l2}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-2 bg-black bg-opacity-80  rounded-[32px]">
        <p className="text-white font-bold text-lg">Overlay Active</p>
      </div>
      <div className="absolute top-[40px] right-[50%] translate-x-[50%] flex flex-col items-center justify-center w-full">
        <img src={lw} alt="" />
        <div className="flex gap-6 mt-6 flex-shrink-0">
          <div className="flex gap-2">
            <img src={tell} alt="" />
            <a href="tel:+2348023456789" className="font-poopins font-bold text-[16px] leading-[26px] text-[#9A9A9A]">
              +23480-2345-6789
            </a>
          </div>
          <div className="flex gap-2">
            <img src={mail} alt="" />
            <a href="mailto:brandit.marketplace@gmail.com" className="font-poopins font-bold text-[16px] leading-[26px] text-[#9A9A9A]">
              brandit.marketplace@gmail.com
            </a>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <img src={location} alt="" />
            <p className="font-poopins font-bold text-[16px] leading-[26px] text-[#9A9A9A]">Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white mx-4 p-4 flex gap-6 rounded-[32px] absolute top-[160px]">
        <div className="p-2">
          <div className="mb-4">
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Invoice Number
            </p>
            <p className="font-poopins font-bold text-[16px] leading-[26px] text-[#9A9A9A]">
              INV-2024-04-23-001
            </p>
          </div>
          <div>
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Invoice Date
            </p>
            <p className="font-poopins font-bold text-[16px] leading-[26px] text-[#9A9A9A]">
              April 23, 2024
            </p>
          </div>

          <div className="my-4 h-1 bg-[#E2063A66]"></div>

          <div className="div">
            <p className="font-poopins font-medium text-[14px] leading-[22px] text-[#9A9A9A]">
              Customer Information
            </p>
          </div>
          <div className="mt-4">
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Name
            </p>
            <p className="font-nexa-bold text-[20px] leading-[30px] text-[#DDDDDD]">
              John Smith
            </p>
          </div>
          <div className="mt-4">
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Shipping Address
            </p>
            <p className="font-nexa-bold text-[20px] leading-[30px] text-[#DDDDDD]">
              123 Main Street
            </p>
          </div>
          <div className="mt-4">
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Billing Address
            </p>
            <p className="font-nexa-bold text-[20px] leading-[30px] text-[#DDDDDD]">
              Anytown, CA 12345
            </p>
          </div>
          <div className="mt-4">
            <p className="font-poopins text-[16px] leading-[26px] text-[#9A9A9A]">
              Email Address
            </p>
            <p className="font-nexa-bold text-[20px] leading-[30px] text-[#DDDDDD]">
              johnsmith@email.com
            </p>
          </div>
        </div>
        <div className=" p-2">
          <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px]">
            Order Details
          </p>
          <div className="max-w-5xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-4 gap-2 text-center h-[54px] py-4 mt-4">
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                Product Name
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                Quantity
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                Unit Price
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                Amount
              </p>
            </div>

            {/* Red Divider Line */}
            <div className="h-1 w-full bg-[#E2063A66] "></div>

            {/* Bottom Row */}
            <div className="grid grid-cols-4 gap-2 text-center py-4">
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                Cozy Comfort Crewneck Sweatshirt
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                15
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                N19,000
              </p>
              <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px] flex justify-center items-center">
                N300,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="div mt-2 flex-shrink-0">
          <div className="p-2">
            <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px]">
              Order Summary
            </p>
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-poopins text-[16px] leading-[26px]">
                Subtotal
              </p>
              <p className="text-[#DDDDDD] font-nexa-bold text-[20px] leading-[30px]">
                N300,000.00
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-poopins text-[16px] leading-[26px]">
                Tax
              </p>
              <p className="text-[#DDDDDD] font-nexa-bold text-[20px] leading-[30px]">
                N3,030.99
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-poopins text-[16px] leading-[26px]">
                Shipping Cost
              </p>
              <p className="text-[#DDDDDD] font-nexa-bold text-[20px] leading-[30px]">
                N2,000.00 (Standard Shipping)
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-poopins text-[16px] leading-[26px]">
                Order Total
              </p>
              <p className="text-[#DDDDDD] font-nexa-bold text-[32px] leading-[42px]">
                N303,030.99
              </p>
            </div>
          </div>
          <div className="h-1 w-full bg-[#E2063A66] mt-6"></div>
          <div className="mt-4 pb-2">
            <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px]">
              Payment Information
            </p>
            <p className="text-[#9A9A9A] font-poopins text-[16px] leading-[26px] mt-4">
              Payment Method
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#DDDDDD] font-nexa-bold text-[20px] leading-[30px]">
                Credit Card
              </p>
              <p className="text-[#DDDDDD] font-nexa-bold text-[20px] leading-[30px]">
                ****2354
              </p>
            </div>
          </div>
          <div className="pt-[72px]">
            <p className="text-[#E2063A] font-nexa-bold text-[20px] leading-[32px]">
              Thank you for your order!
            </p>
            <p className="text-[#9A9A9A] font-medium font-poopins text-[14px] leading-[22px]">
              We hope you enjoy your new items from Brandit!
            </p>
            <button className="mt-6 bg-[#E2063A] flex gap-5 justify-center items-center pl-10 py-4 pr-4 rounded-full font-nexa-bold text-[16px] leading-[26px] text-white">
              Download
              <img src={D} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
