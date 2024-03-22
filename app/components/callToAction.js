import React from "react";
import ActionButton from "./actionButton";
import Image from "next/image";

const CallToAction = ({ galactus, montserrat, righteous }) => {
  return (
    <div className="flex py-14">
      <div className="px-[5rem] pt-20 basis-2/5">
        <div className="">
          <h3
            className={`text-[#BEF56E] ${galactus.className} text-[16px] leading-4 mb-8 heading`}
          >
            EXPLORE A NEW DIMENSION
          </h3>
          <h1
            className={`text-white text-[40px] ${montserrat.className} leading-[52px] mb-10`}
          >
            Ready to unlock your potentials in a world of fun?
          </h1>
          <ActionButton
            righteous={righteous}
            width={221}
            height={50}
            content="Get Started"
          />
        </div>
      </div>
      <div className="basis-3/5 relative w-[867px] h-[483px] rounded-[477px]">
        <Image src="/images/image-coa.png" fill />
      </div>
    </div>
  );
};

export default CallToAction;
