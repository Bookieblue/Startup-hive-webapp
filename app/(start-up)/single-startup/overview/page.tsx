import { OVERVIEWSTACK } from '@/app/constants';
import Image from 'next/image';
import React from 'react';

const EachOverviewStack = () => {
  return (
    <>
      {OVERVIEWSTACK.map((overview) => (
        <div className="each_stack flex flex-row items-center gap-2 mt-4">
          <Image src={overview.src} alt={overview.alt} width={19} height={29} />
          <p className="w-[9rem] regular-16 font-[lato] text-gray-40">
            {overview.tag}
          </p>

          <p
            className={
              overview.descStyle
                ? overview.descStyle
                : 'ml-5 text-white regular-16 font-[lato]'
            }
          >
            {overview.description}
          </p>
        </div>
      ))}
    </>
  );
};
export default EachOverviewStack;
