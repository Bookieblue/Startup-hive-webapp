'use client';

import React from 'react';
import Link from 'next/link';
import ForgotPasswordForm from '@/components/forms/forgotPassword';

const ForgetPassword = () => {
  return (
    <div className="pt-10">
      <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
        Reset password
      </h2>
      <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
        Error! Seems there is an error in the detail you submitted.
      </p>
      <ForgotPasswordForm />
      <p className="medium-16 mt-10 mb-28 lg:mb-48">
        Don’t have an account?{' '}
        <Link href="/signup" className="text-lightred-50">
          Create account here Now
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
