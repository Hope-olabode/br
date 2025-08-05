import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
const answer =
  "At Brandit, we specialize in transforming your visionary clothing ideas into tangible success stories. Discover a suite of services designed to empower your brand from inception to delivery.";
export default function FAQ() {
  return (
    <div className="py-16 md:py-32 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <h3 className="px-4 font-nexa-bold text-[24px] leading-[35px] lg:text-[36px] lg:leading-[48px] mb-10 md:mb-[60px]">
        Frequently Asked Questions (FAQ)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 px-4">
        {/* Column 1 */}
        <div className="space-y-6">
          <Accordion title="What are your MOQs for T-shirts?" answer={answer} />
          <Accordion title="Do you sell in retail?" answer={answer} />
          <Accordion title="Do you do international deliveries?" answer={answer} />
          <Accordion title="Do you make clothing tags for other brands?" answer={answer} />
          <Accordion title="Why are samples more expensive?" answer={answer} />
          <Accordion title="Do you do installment payment?" answer={answer} />
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <Accordion title="Where is your office located?" answer={answer} />
          <Accordion title="How long does production last?" answer={answer} />
          <Accordion title="What type of prints do you do?" answer={answer} />
          <Accordion title="What are the MOQs for hoodies and jerseys?" answer={answer} />
          <Accordion title="Do you pay on delivery?" answer={answer} />
          <Accordion title="Can you help me design for my own Brand?" answer={answer} />
          <div className="flex flex-col gap-4">
            <p className="font-poopins text-[12px] leading-[18px] text-[#9A9A9A]">
              Require more support/help, go to the Assist Centre. We are ready and available for your questions and enquiries
            </p>
            <button className="font-nexa-bold text-[14px] leading-[22px] h-[48px] w-[139px] border-2 border-white rounded-full hover:border-[#E6E6E6] focus:border-black">
              <NavLink to='/Assist Centre' >
              Assist Centre
            </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
