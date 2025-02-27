export default function Facts() {
  return(
    <div className="grid grid-cols-2 grid-rows-2 gap-y-[40px] px-4 py-[72px] lg:flex flex-row justify-between md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px] text-left">
      <div className="order-1 flex flex-col gap-2">
        <p className="font-nexa-light text-[12px] leading-[18px] lg:text-[16px] lg:leading-[30px] 2xl:text-[24px] 2xl:leading-[38px]">Worked with over...</p>
        <h1 className="font-nexa-light text-[32px] leading-[42px] lg:text-[40px] lg:leading-[56px] 2xl:text-[48px] 2xl:leading-[64px]">50 Brands</h1>
      </div>
      <div className="order-4 text-right flex flex-col gap-2 lg:text-left">
        <p className="font-nexa-light text-[12px] leading-[18px] lg:text-[16px] lg:leading-[30px] 2xl:text-[24px] 2xl:leading-[38px] ">Years of Experience</p>
        <h1 className="font-nexa-light text-[32px] leading-[42px] lg:text-[40px] lg:leading-[56px] 2xl:text-[48px] 2xl:leading-[64px]">+7 years</h1>
      </div>
      <div className="order-3 flex flex-col gap-2">
        <p className="font-nexa-light text-[12px] leading-[18px] lg:text-[16px] lg:leading-[30px] 2xl:text-[24px] 2xl:leading-[38px]">Customer Satisfaction Rate</p>
        <h1 className="font-nexa-light text-[32px] leading-[42px] lg:text-[40px] lg:leading-[56px] 2xl:text-[48px] 2xl:leading-[64px]"><span className="first">95</span> <span className="second">%</span></h1>
      </div>
      <div className="order-2 text-right flex flex-col gap-2 lg:text-left">
        <p className="font-nexa-light text-[12px] leading-[18px] lg:text-[16px] lg:leading-[30px] 2xl:text-[24px] 2xl:leading-[38px]">Serving Clients Across</p>
        <h1 className="font-nexa-light text-[32px] leading-[42px] lg:text-[40px] lg:leading-[56px] 2xl:text-[48px] 2xl:leading-[64px]">3 countries</h1>
      </div>
    </div>
  )
}