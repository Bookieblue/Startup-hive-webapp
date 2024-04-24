import { SOCIALICONS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialIcons = () => {
  return (
    <>
      <div className="social_icons flex flex-row justify-center gap-2 mt-4 md:mt-0 md:justify-start ">
        {SOCIALICONS.map((icon, index) => (
          <Link href="/" key={index}>
            <Image src={icon.src} alt={icon.alt} width={25} height={29} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
