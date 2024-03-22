import React from "react";

const ActionButton = ({ righteous, content, width, height }) => {
  return (
    <div>
      {/* <button
        className={`bg-[#BEF56E] w-[${width}px] h-[${height}px] rounded-tl-[10px] rounded-br-[10px] ${righteous.className} text-[16px] border border-[#B5B5B5] text-[#141414]`}
      >
        {content.toUpperCase()}
      </button> */}
      <button
        className={`bg-[#BEF56E] px-16 py-3 rounded-tl-[10px] rounded-br-[10px] ${righteous.className} text-[16px] border border-[#B5B5B5] text-[#141414]`}
      >
        {content.toUpperCase()}
      </button>
    </div>
  );
};

export default ActionButton;
