'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ConfirmPassOtpForm from '@/components/forms/confirmPassOtpForm';

const ConfirmPasswordOtp = () => {
  return (
    <div className="pt-10">
      <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
        Confirm OTP
      </h2>
      <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
        Error! Seems there is an error in the detail you submitted.
      </p>
      <ConfirmPassOtpForm />
      <p className="medium-16 mt-10 mb-28 lg:mb-48">
        Don’t get OTP?{' '}
        <Link href="/password/forgot" className="text-lightred-50">
          Resend Here
        </Link>
      </p>
    </div>
  );
};
export default ConfirmPasswordOtp;
