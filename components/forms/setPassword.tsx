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
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';
import { useMutateSetNewPassword } from '@/lib/models/auth/hooks';
import { toast } from '../ui/use-toast';
import { getLocalStorage, saveLocalStorage } from '@/lib/core/localStorageUtil';
import { errorFormat } from '@/lib/utils';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';
import _ from 'lodash';

const FormSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have 8 characters'),
    confirmPassword: z
      .string()
      .min(1, 'Password confirmation is required')
      .min(8, 'Password must have 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SetPasswordForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate: mutateSetNewPassword } = useMutateSetNewPassword();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const cacheToken = getLocalStorage(HIVE_ACCOUNT_EMAIL) ;
    var b = {token: cacheToken} //new object to be added as payload
    const payload = _.extend(values, b); 
  
    setIsLoading(true);
    mutateSetNewPassword(values, {
      onSuccess: (resp) => {
        // console.log(resp);
        setIsLoading(false);
        toast({
          title: 'Success',
          description: 'Your New Password Created Successfully',
        });
        form.reset();
        router.push('/login');
      },
      onError: (error: any) => {
        console.log(error);
        setIsLoading(false);
        const message = errorFormat(error);
        toast({
          title: 'Error',
          description: message,
        });
      },
    });
    // console.log('submitted successfully');
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-5 space-y-4 mb-28 lg:mb-48 "
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Set password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Set password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-3 md:mt-5 ">
          <Button type="submit" title="Submit Now" variant="btn_lightred" isLoading={isLoading} />
        </div>
      </form>
    </Form>
  );
};

export default SetPasswordForm;
