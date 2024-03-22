import React from "react";
import ActionButton from "./actionButton";
import Image from "next/image";

const CallToAction = ({ galactus, montserrat, righteous }) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly py-14 px-4 lg:px-0">
      <div className="lg:px-[1.5rem] xl:px-[5rem] pt-10 lg:pt-12 xl:pt-20 lg:basis-2/5">
        <div className="text-left">
          <h3
            className={`text-[#BEF56E] ${galactus.className} text-[14px] xl:text-[16px] xl:leading-4 mb-3 lg:mb-4 xl:mb-8 heading`}
          >
            EXPLORE A NEW DIMENSION
          </h3>
          <h1
            className={`text-white text-[24px] lg:text-[32px] xl:text-[40px] ${montserrat.className} xl:leading-[52px] mb-5 lg:mb-5 xl:mb-10`}
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
      <div className="lg:basis-3/5 relative w-full h-[300px] lg:w-[867px] lg:h-[483px] rounded-[477px]">
        <Image src="/images/image-coa.png" fill alt="call-to-action image" />
      </div>
    </div>
  );
};

export default CallToAction;
