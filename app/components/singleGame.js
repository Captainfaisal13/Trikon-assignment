import Image from "next/image";
import React from "react";

const SingleGame = ({ game, helvetica }) => {
  const { name, gameCategories, imgSrc } = game;
  return (
    <div className={`text-white ${helvetica.className} w-[250px] mx-auto`}>
      <div className="h-[237px] relative">
        <Image src={imgSrc} fill />
      </div>

      <div
        className="p-[16px] bg-[#1819201A]"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <h3 className="text-[14px] leading-[19.35px]">{name}</h3>
        <h4 className="text-[12px] leading-[16.58px]">Activision</h4>
        <h4 className="text-[12px] leading-[16.58px]">{gameCategories}</h4>
      </div>
    </div>
  );
};

export default SingleGame;
