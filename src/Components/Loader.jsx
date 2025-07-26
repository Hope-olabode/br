import { useEffect } from 'react';



export default function Loader() {
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    
    <div className="div">
      <div className="flex items-center justify-center fixed inset-0 bg-white z-50">
      <div className="relative flex items-center justify-center w-12 h-12 bg-[#E2063A] rounded-full animate-outer">
        <div className="absolute w-10 h-10 bg-[#000000] rounded-full animate-inner"></div>
      </div>
    </div>
    </div>
  );
}
