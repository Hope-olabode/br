// Toast.js

import PropTypes from "prop-types";

export default function Toast({ message, color }) {
  return (
    <div
      className={`flex rounded-[32px] border-2 border-dashed bg-[#F2F2F2] shadow-lg ring-[1px] ring-green-700/5 w-[357px] h-[84px] justify-center items-center p-4`}
      style={{ borderColor: color }}
    >
      <h1
        className="text-center font-nexa-bold text-[16px] leading-[26px]"
        style={{ color }}
      >
        {message}
      </h1>
      <div className="ml-5 shrink-0"></div>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string
};