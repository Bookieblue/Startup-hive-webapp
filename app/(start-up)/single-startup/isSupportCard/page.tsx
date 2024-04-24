'use client';
import Image from 'next/image';
import React, { useState } from 'react';
type IsSupportCard = {
  supports: number;
};

const IsSupportCard = ({ supports }: IsSupportCard) => {
  const [support, setSupport] = useState(supports);
  const [isSupport, setisSupport] = useState(false);

  const SupportIcon = () => {
    setSupport(support + (isSupport ? -1 : 1));
    setisSupport(!isSupport);
  };

  return (
    <>
      <div className="max-sm:hidden border-l border-gray-30 pl-5">
        {isSupport ? (
          <Image
            src="/assets/yellow_star_setting.svg"
            alt="yellow_star_setting"
            width={34}
            height={29}
            className="mr-8 mb-2"
            onClick={SupportIcon}
          />
        ) : (
          <Image
            src="/assets/black_star_setting.svg"
            alt="black_star_setting"
            width={34}
            height={29}
            className="mr-8 mb-2"
            onClick={SupportIcon}
          />
        )}

        <p className="regular-16 text-gray-40 font-[lato]">{support}</p>
      </div>
    </>
  );
};

export default IsSupportCard;
