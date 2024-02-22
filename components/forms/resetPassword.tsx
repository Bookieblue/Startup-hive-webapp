import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { toast } from '@/components/ui/use-toast';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';
import { saveLocalStorage } from '@/lib/core/localStorageUtil';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { errorFormat } from '@/lib/utils';
import { useMutatePasswordReset } from '@/lib/models/auth/hooks';

const FormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
});


const ResetPasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

 
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const { mutate: onPassReset } = useMutatePasswordReset();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const payload = values;
    setIsLoading(true);

    onPassReset(payload, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: 'OTP Reset Sent Succesfully',
          description: 'OTP Sent successfully',
        });
        saveLocalStorage(HIVE_ACCOUNT_EMAIL, payload.email);
        form.reset();
        router.push('/password/confirm');
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="eg. yourname@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" title="Submit Now" variant="btn_lightred" isLoading={isLoading} />
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
