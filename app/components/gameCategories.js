import React, { useState } from "react";
import SingleGame from "./singleGame";
import allGames from "../data/allGames.json";
const GameCategories = ({ montserrat, helvetica }) => {
  const [gameType, setGameType] = useState(0);

  return (
    <div className="bg-[url('/images/image.png')] bg-no-repeat bg-cover bg-center pt-10 md:pt-20 pb-10 md:pb-24">
      <div>
        <h3
          className={`text-white ${montserrat.className} text-2xl md:text-[26px] lg:text-[30px] leading-[48px] text-center mb-4`}
        >
          Newly Released Games
        </h3>
        <div className="flex justify-center gap-4 mb-8 md:mb-12">
          <button
            className={`${montserrat.className} text-[14px] leading-[17.07px] ${
              gameType === 0 ? "bg-[#F68E5F]" : "bg-none"
            } h-[29px] rounded-[48px] px-[16px] py-[6px] text-white`}
            onClick={() => setGameType(0)}
          >
            All
          </button>
          <button
            className={`${montserrat.className} text-[14px] leading-[17.07px] ${
              gameType === 1 ? "bg-[#F68E5F]" : "bg-none"
            } h-[29px] rounded-[48px] px-[16px] py-[6px] text-white`}
            onClick={() => setGameType(1)}
          >
            PS4
          </button>
          <button
            className={`${montserrat.className} text-[14px] leading-[17.07px] ${
              gameType === 2 ? "bg-[#F68E5F]" : "bg-none"
            } h-[29px] rounded-[48px] px-[16px] py-[6px] text-white`}
            onClick={() => setGameType(2)}
          >
            PS5
          </button>
          <button
            className={`${montserrat.className} text-[14px] leading-[17.07px] ${
              gameType === 3 ? "bg-[#F68E5F]" : "bg-none"
            } h-[29px] rounded-[48px] px-[16px] py-[6px] text-white`}
            onClick={() => setGameType(3)}
          >
            X-Box
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-[24px] sm:gap-y-[56px] md:gap-y-[72px] max-w-[94vw] mx-auto">
          {allGames.map((game, idx) => {
            if (
              (gameType === 1 &&
                !game.gameCategories
                  .split(",")
                  .some((gm) => gm.startsWith("PS4"))) ||
              (gameType === 2 &&
                !game.gameCategories
                  .split(",")
                  .some((gm) => gm.trim().startsWith("PS5"))) ||
              (gameType === 3 &&
                !game.gameCategories
                  .split(",")
                  .some((gm) => gm.trim().startsWith("Xbox")))
            )
              return;

            return <SingleGame key={idx} game={game} helvetica={helvetica} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
