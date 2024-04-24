import { REVIEW } from '@/app/constants';
import Image from 'next/image';
import React from 'react';
import IsStarred from '../isStarred/page';

REVIEW;
const Reviews = () => {
  return (
    <>
      {REVIEW.map((review, index) => (
        <div className="each_review mt-8 pb-4 border-b border-[#545151]" key={index}>
          <div className="flex flex-row">
            <Image src={review.src} alt={review.alt} width={45} height={29} />
            <div className="ml-2">
              <h6 className="regular-18 font-[lato] text-white">
                {review.name}
              </h6>
              <p className="regular-12 font-[lato] text-cream-50">
                {review.date}
              </p>
            </div>
          </div>
          <p className="text-justify w-fit md:w-[35rem] mt-3 regular-16 font-[lato] text-gray-40">
            {review.comment}
          </p>

          <div className="flex flex-row mt-5 gap-1">
            <IsStarred />
            <IsStarred />
            <IsStarred />
            <IsStarred />
            <IsStarred />
          </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
