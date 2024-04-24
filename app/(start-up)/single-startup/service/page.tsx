import React from 'react';
import { SERVICERENDER } from '@/app/constants';

const ServiceRender = () => {
  return (
    <>
      {SERVICERENDER.map((service, index) => (
        <ul className="list-disc list-inside ml-2 " key={index}>
          <li className="mt-4">
            <span className="text-bold font-bold">{service.tag}:</span> &nbsp;
            &nbsp;{' '}
            <span className="regular-18 lato text-gray-40">
              {service.description}
            </span>
          </li>
        </ul>
      ))}
    </>
  );
};

export default ServiceRender;
