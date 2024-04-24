import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { Input } from '../ui/input';
import { toast } from '@/components/ui/use-toast';
import Button from '../ui/button';
import { otpSchema } from '@/lib/models/auth/schema';
import { useMutatePassResetConfirmOtp } from '@/lib/models/auth/hooks';
import { errorFormat } from '@/lib/utils';
import { saveLocalStorage } from '@/lib/core/localStorageUtil';
import { HIVE_RESET_TOKEN } from '@/lib/core/constant';
const ConfirmPassOtpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
  });

  const { mutate: mutatePassResetConfirmOtp } = useMutatePassResetConfirmOtp();

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    const payload = values; // it is the value sending
    setIsLoading(true);
    mutatePassResetConfirmOtp(values, {
      onSuccess: (resp) => {
        // console.log(resp);
        setIsLoading(false);
        toast({
          title: 'Success',
          description: 'OTP verified successfully',
        });
        saveLocalStorage(HIVE_RESET_TOKEN, resp.token);
        console.log(resp.token);
        form.reset();
        router.push('/password/reset');
      },
      onError: (error: any) => {
        setIsLoading(false);
        const message = errorFormat(error);
        toast({
          title: 'Error',
          description: message,
        });
      },
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter the OTP Sent to Your Email Address </FormLabel>
              <FormControl>
                <Input placeholder="910276" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          title="Submit Now"
          variant="btn_lightred"
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default ConfirmPassOtpForm;
