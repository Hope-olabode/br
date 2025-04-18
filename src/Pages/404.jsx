import E4 from '../assets/Images/404.svg';
import RB from '../assets/Images/RB.svg';

export default function Error4() {
    return(
        <div className="mt-[80px] flex flex-col items-center justify-center h-screen px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
            <img src={E4} alt="" />
            <p className=" font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[48px] md:leading-[64px]">Page Not Found</p>
            <a href="/" className="mt-10 flex items-center gap-4">
                <img src={RB} alt="" />
                <p className='font-nexa-bold font-medium text-[16px] leading-[22px] lg:text-[16px] md:leading-[26px]'>Return To Home Page</p> 
            </a>
        </div>
    )
}