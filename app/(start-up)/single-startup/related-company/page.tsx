import Image from 'next/image';
import React from 'react';
import IsSupportCard from '../isSupportCard/page';
import { RELATEDCOMPANY } from '@/app/constants';

RELATEDCOMPANY;
const RelatedCompany = () => {
  return (
    <>
      {RELATEDCOMPANY.map((company) => (
        <div className="bottom_card flex flex-row py-5 border-b border-gray-30 mt-8">
          <Image
            src={company.src}
            alt={company.alt}
            width={85}
            height={29}
            className="mr-8"
          />

          <div className="flex-col justify-start">
            <h6 className="">
              {' '}
              <span className="semi-medium-18 font-[lato]">
                {company.startup}
              </span>{' '}
              &nbsp;{' '}
              <span className="regular-12 text-gray-40 ">
                {company.category}
              </span>
            </h6>
            <p className="md:w-[24rem] mt-3 regular-12 text-gray-40 font-[lato]">
              {company.description}
            </p>
            <p className="regular-12 text-white font-[lato]">
              {company.location}
            </p>
          </div>

          <IsSupportCard supports={company.supports} />
        </div>
      ))}
    </>
  );
};

export default RelatedCompany;
