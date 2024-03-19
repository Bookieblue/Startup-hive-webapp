'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// /assets/black_star_icon.svg
const IsStarred = () => {
  const [isStarred, setisStarred] = useState(false);
  const StarIcon = () => {
    setisStarred(!isStarred);
  };

  return (
    <>
      {isStarred ? (
        <Image
          src="/assets/red_star_icon.svg"
          alt="map"
          width={25}
          height={29}
          className="cursor-pointer"
          onClick={StarIcon}
        />
      ) : (
        <Image
          src="/assets/black_star_icon.svg"
          alt="map"
          width={25}
          height={29}
          className="cursor-pointer"
          onClick={StarIcon}
        />
      )}
    </>
  );
};

export default IsStarred;
