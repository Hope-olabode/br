import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="py-16 md:py-32 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <h3 className="px-4 font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-10 md:mb-[60px]">Frequently Asked Questions (FAQ)</h3>
      <div className="px-5 grid grid-flow-row md:grid-cols-2 gap-y-4 md:gap-x-10 lg:gap-y-10 lg:gap-x-20">
        <Accordion
          title="What are your MOQs for T-shirts?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion
          title="Where is your office located?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="Do you sell in retail?" 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <Accordion
          title="How long does production last? "
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion
          title="Do you do international deliveries? "
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="What type of prints do you do? " 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <Accordion
          title="Do you make clothing tags for other brands?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion
          title="What are the MOQs for hoodies and jerseys?"
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery."
        />
        <Accordion 
          title="Why are samples more expensive?" 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <Accordion 
          title="Do you pay on delivery?" 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <Accordion 
          title="Do you do installment payment?" 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <Accordion 
          title="Can you help me design for my own Brand?" 
          answer="At Brandit, we specialize in transforming your visionary clothing ideas into tangiblesuccess stories. Discover a suite of services designed to empower your brand from inception to delivery." />
        <div className="flex flex-col gap-4">
          <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A]">Require more support/help, goi to the Assist Centre. We are ready and available for your questions and enquiries</p>
          <button className="font-nexa-bold text-[14px] leading-[22px] h-[48px] w-[139px] border-2 border-white rounded-full hover:border-[#E6E6E6] focus:border-black focus:border-2">Assist Centre</button>
        </div>
      </div>
    </div>
  );
} 

  
