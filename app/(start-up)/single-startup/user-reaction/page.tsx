import { USERREACTION } from '@/app/constants';
import Image from 'next/image';
import React from 'react';

const UserReaction = () => {
  return (
    <>
      <div className="flex flex-row justify-center mt-1 md:mt-5 md:justify-start md:gap-7">
        {USERREACTION.map((reaction, index) => (
          <div className="flex  " key={index}>
            <Image
              src={reaction.src}
              alt={reaction.alt}
              width={25}
              height={29}
              
            />{' '}
            &nbsp;&nbsp;
            <p className="text-gray-20 regular-14 font-[inter]">
              {reaction.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserReaction;
