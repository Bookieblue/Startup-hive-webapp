'use client';
import { useMutation } from '@tanstack/react-query';
import { LoginResponse } from '@/lib/models/auth/type';
import { backendFetch } from '@/lib/core/client';

export const useMutateLogin = (options?: object) => {
  const postLogin = (data: {
    email: string;
    password: string;
  }): Promise<LoginResponse> =>
    backendFetch({
      endpoint: '/identity/login/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: postLogin,
    ...options,
  });
};

export const useMutateSignUp = (options?: object) => {
  const signUp = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/register/',
      method: 'POST',
      body: data,
    });
  return useMutation({
    mutationFn: signUp,
    ...options,
  });
};

export const useMutateResendEmailConfirmationOTP = (options?: object) => {
  const resendOtp = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/email/resend/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: resendOtp,
    ...options,
  });
};

export const useMutateEmailConfirmation = (options?: object) => {
  const postEmailConfirmation = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/email/confirmation/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: postEmailConfirmation,
    ...options,
  });
};

//
//   PASSWORD RESET ENDPOINT STARTING
//

export const useMutatePasswordReset = (options?: object) => {
  const passwordReset = (data: JSON): Promise<any> =>
    backendFetch({
      endpoint: '/identity/password/forgot/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: passwordReset,
    ...options,
  });
};

export const useMutatePassResetConfirmOtp = (options?: object) => {
  const otpConfirm = (data: JSON): Promise<any> =>
    backendFetch({
      endpoint: '/identity/password/verify/otp/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: otpConfirm,
    ...options,
  });
};

export const useMutateSetNewPassword = (options?: object) => {
  const newPasswords = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/password/reset/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: newPasswords,
    ...options,
  });
};

//
//   PASSWORD RESET ENDPOINT FINISHING
//
