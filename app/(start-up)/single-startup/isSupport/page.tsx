'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface IsSupport {
  supports: number;
}

const IsSupport = ({ supports }: IsSupport) => {
  const [support, setSupport] = useState(supports);
  const [isSupport, setisSupport] = useState(false);

  const SupportIcon = () => {
    setSupport(support + (isSupport ? -1 : 1));
    setisSupport(!isSupport);
  };

  return (
    <>
      <div
        className=" flex flex-row bg-gray-20 px-2 pr-4 py-1 rounded-full text-white text-sm"
        onClick={SupportIcon}
      >
        {isSupport ? (
          <Image
            src="/active-select.svg"
            alt="map"
            width={25}
            height={29}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/non-active-select.svg"
            alt="map"
            width={25}
            height={29}
            className="cursor-pointer"
          />
        )}
        &nbsp;&nbsp;{' '}
        <button className="">
          Support &nbsp;&nbsp;{' '}
          <span className="support-styles border-l  border-gray-30 pl-1 ">
            {support}
          </span>
        </button>
      </div>
    </>
  );
};

export default IsSupport;
