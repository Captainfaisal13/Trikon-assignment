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
        className={`bg-[#BEF56E] px-10 py-2 lg:px-12 lg:py-2 xl:px-16 xl:py-3 rounded-tl-[10px] rounded-br-[10px] ${righteous.className} lg:text-[12px] xl:text-[16px] border border-[#B5B5B5] text-[#141414]`}
      >
        {content.toUpperCase()}
      </button>
    </div>
  );
};

export default ActionButton;
