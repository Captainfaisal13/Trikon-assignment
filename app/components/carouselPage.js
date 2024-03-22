import React, { useState } from "react";
import Image from "next/image";

import carouselImages from "../data/carouselImages.json";
import ActionButton from "./actionButton";

const CarouselPage = ({ galactus, montserrat, righteous }) => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  return (
    <div className="w-full flex justify-evenly pb-28">
      <div className="md:px-[1.8rem]  lg:px-[2rem] xl:px-[5rem] pt-20 basis-2/5">
        <div className="">
          <h3
            className={`text-[#BEF56E] ${galactus.className} md:text-[12px] lg:text-[16px] leading-4 mb-8`}
          >
            EXPLORE A NEW DIMENSION
          </h3>
          <h1
            className={`text-white md:text-[32px]  text-[40px] ${montserrat.className} leading-[52px] mb-10`}
          >
            Ready to unlock your potentials in a world of fun?
          </h1>
          <ActionButton
            righteous={righteous}
            width={221}
            height={50}
            content="Get Started"
          />
          {/* <button
            className={`bg-[#BEF56E] w-[221px] h-[50px] rounded-tl-[10px] rounded-br-[10px] ${righteous.className} text-[16px] border border-[#B5B5B5]`}
          >
            GET STARTED
          </button> */}
        </div>
      </div>
      <div className="basis-3/5 flex flex-col gap-8">
        <div className="flex gap-4 md:max-w-[600px] lg:max-w-[920px] overflow-x-hidden">
          {carouselImages.map((image, index) => {
            const { src } = image;
            return (
              <div
                className="md:min-w-[388px] md:min-h-[288px] lg:min-w-[488px] lg:min-h-[388px] relative inner rounded-xl overflow-hidden"
                key={index}
                style={{
                  transform: `translate(-${currentGameIndex * (488 + 16)}px)`,
                }}
              >
                <Image key={index} src={src} fill />;
              </div>
            );
          })}
        </div>
        <div className="flex gap-5">
          <button
            onClick={() =>
              setCurrentGameIndex((curr) => {
                if (curr === 0) return curr;
                return curr - 1;
              })
            }
          >
            <Image src="/images/btn-left-arrow.png" width="48" height="48" />
          </button>
          <button
            onClick={() =>
              setCurrentGameIndex((curr) => {
                if (curr === carouselImages.length - 1) return curr;
                return curr + 1;
              })
            }
          >
            <Image src="/images/btn-right-arrow.png" width="48" height="48" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
