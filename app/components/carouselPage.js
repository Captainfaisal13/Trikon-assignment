import React, { useState } from "react";
import Image from "next/image";

import carouselImages from "../data/carouselImages.json";
import ActionButton from "./actionButton";

const CarouselPage = ({ galactus, montserrat, righteous }) => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly pb-10 lg:pb-28">
      <div className="px-4 lg:px-[1.5rem] xl:px-[5rem] pt-10 lg:pt-12 xl:pt-20 basis-2/5">
        <div className="text-center lg:text-left">
          <h3
            className={`text-[#bccf9e] ${galactus.className} text-[14px] xl:text-[16px] xl:leading-4 mb-3 lg:mb-4 xl:mb-8`}
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
          {/* <button
            className={`bg-[#BEF56E] w-[221px] h-[50px] rounded-tl-[10px] rounded-br-[10px] ${righteous.className} text-[16px] border border-[#B5B5B5]`}
          >
            GET STARTED
          </button> */}
        </div>
      </div>
      <div className="pl-4 basis-3/5 flex flex-col gap-8">
        <div className="flex gap-2 md:gap-4 lg:max-w-[750px] xl:max-w-[920px] overflow-x-hidden">
          {carouselImages.map((image, index) => {
            const { src } = image;
            return (
              <div
                className="min-w-[288px] min-h-[188px] lg:min-w-[388px] lg:min-h-[288px] xl:min-w-[488px] xl:min-h-[388px] relative inner rounded-xl overflow-hidden"
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
        <div className="flex gap-5 justify-center">
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
