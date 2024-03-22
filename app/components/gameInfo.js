import Image from "next/image";
import React from "react";
import ActionButton from "./actionButton";

const GameInfo = ({ montserrat, righteous }) => {
  return (
    <div className={`${montserrat.className} pt-32 pb-10 px-10`}>
      <div className="flex gap-8 justify-center">
        <div className="flex flex-col gap-3">
          <div className="w-[773px] h-[335px] rounded-[20px] relative">
            <Image src="/images/image1-game-info.png" fill />
          </div>
          <div className="flex justify-between">
            <div className="w-[245px] h-[204px] rounded-[20px] relative">
              <Image src="/images/image2-game-info.png" fill />
            </div>
            <div className="w-[245px] h-[204px] rounded-[20px] relative">
              <Image src="/images/image3-game-info.png" fill />
            </div>
            <div className="w-[245px] h-[204px] rounded-[20px] relative">
              <Image src="/images/image4-game-info.png" fill />
            </div>
          </div>
        </div>
        <div className="text-white basis-2/5">
          <h3 className="text-[#BEF56E] text-[28px] leading-[34.13px] font-semibold mb-5">
            Mortal Kombat 1
          </h3>
          <p className="text-[#BDC1C6] text-[16px] leading-[24px] mb-5">
            For single-player, the game features the return of the plot-driven
            Story Mode and the traditional form of Towers mode from the previous
            games, while introducing the addition of the seasonal Invasion mode,
            an online mode combining fighting mechanics with board game and
            role-playing game elements.
          </p>
          <h5 className="text-[18px] font-light leading-[21.94px] mb-5">
            Category: Fighting Action-adventure
          </h5>
          <h5 className="text-[18px] font-light leading-[21.94px] mb-5">
            Listed Date: September 19, 2023
          </h5>
          <h5 className="text-[18px] font-light leading-[21.94px] mb-5">
            Chain: Ethereum
          </h5>
          <h5 className="text-[18px] font-light leading-[21.94px] mb-8">
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
