import Image from "next/image";
import React from "react";
import ActionButton from "./actionButton";

const GameInfo = ({ montserrat, righteous }) => {
  return (
    <div
      className={`${montserrat.className} pt-16 lg:pt-24 xl:pt-32 pb-10 px-4 md:px-10`}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 justify-center">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="md:w-full h-[150px] md:h-[220px] lg:w-[612px] lg:h-[270px] xl:w-[773px] xl:h-[335px] rounded-[20px] relative">
            <Image
              src="/images/image1-game-info.png"
              fill
              alt="game-info-image1"
            />
          </div>
          <div className="flex justify-between gap-2 md:gap-4">
            <div className="basis-1/3 lg:basis-auto h-[90px] md:h-[128px] lg:w-[188px] lg:h-[170px] xl:w-[245px] xl:h-[204px] rounded-[20px] relative">
              <Image
                src="/images/image2-game-info.png"
                fill
                alt="game-info-image2"
              />
            </div>
            <div className="basis-1/3 lg:basis-auto h-[90px] md:h-[128px] lg:w-[188px] lg:h-[170px] xl:w-[245px] xl:h-[204px] rounded-[20px] relative">
              <Image
                src="/images/image3-game-info.png"
                fill
                alt="game-info-image3"
              />
            </div>
            <div className="basis-1/3 lg:basis-auto h-[90px] md:h-[128px] lg:w-[188px] lg:h-[170px] xl:w-[245px] xl:h-[204px] rounded-[20px] relative">
              <Image
                src="/images/image4-game-info.png"
                fill
                alt="game-info-image4"
              />
            </div>
          </div>
        </div>
        <div className="text-white basis-2/5">
          <h3 className="text-[#BEF56E] text-[18px] lg:text-[22px] xl:text-[28px] leading-[34.13px] font-semibold mb-1 lg:mb-3 xl:mb-5">
            Mortal Kombat 1
          </h3>
          <p className="text-[#BDC1C6] text-[12px]  lg:text-[14px] xl:text-[16px] leading-[24px] mb-1 lg:mb-3 xl:mb-5">
            For single-player, the game features the return of the plot-driven
            Story Mode and the traditional form of Towers mode from the previous
            games, while introducing the addition of the seasonal Invasion mode,
            an online mode combining fighting mechanics with board game and
            role-playing game elements.
          </p>
          <h5 className="text-[13px] lg:text-[15px] xl:text-[18px] font-light leading-[21.94px] md:mb-2 lg:mb-3 xl:mb-5">
            Category: Fighting Action-adventure
          </h5>
          <h5 className="text-[13px] lg:text-[15px] xl:text-[18px] font-light leading-[21.94px] md:mb-2 lg:mb-3 xl:mb-5">
            Listed Date: September 19, 2023
          </h5>
          <h5 className="text-[13px] lg:text-[15px] xl:text-[18px] font-light leading-[21.94px] md:mb-2 lg:mb-3 xl:mb-5">
            Chain: Ethereum
          </h5>
          <h5 className="text-[13px] lg:text-[15px] xl:text-[18px] font-light leading-[21.94px] mb-4 lg:mb-6 xl:mb-8">
            Number of users: 439,475
          </h5>
          <ActionButton
            righteous={righteous}
            width={130}
            height={50}
            content="Play"
          />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
