import quality from '../assets/Images/quality.svg'
import support from '../assets/Images/support.svg'
import efficiency from '../assets/Images/efficiency.svg'
import expertise from '../assets/Images/expertise.svg'

export default function Why() {
  return(
    <div className="px-4 py-[72px] text-center items-center md:py-[9rem] md:px-40">
      <div className="grid grid-cols-2 px-4 gap-3 md:flex md:px-0">
        <div className="circle w-100%">
          <img src={quality} alt="" />
          
        </div>
        <div className="circle w-100%">
          <img src={expertise} alt="" />
          
        </div>
        <div className="order-4 md:order-3 w-100%">
          <img src={support} alt="" />
          
        </div>
        <div className="order-3 w-100% ">
          <img src={efficiency} alt="" />
          
        </div>
      </div>
      <p className="pb-2 pt-10 font-poopins font-medium leading-[26px] md:text-[24px] md:leading-[34px] lg:text-[36px] lg:leading-[48px]">
        Why Partner with Brandit?
      </p>
      <p className="font-poopins text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">
        We are passionate about helping brands of all sizes achieve their fashion goals. Our commitment to quality, expertise, and efficiency ensures your clothing line thrives.
      </p>
    </div>
  )
}







