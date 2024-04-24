import React from 'react';

import { Form } from '../ui/form';
import { toast } from '@/components/ui/use-toast';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';
import { saveLocalStorage } from '@/lib/core/localStorageUtil';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { TextInput } from '../ui/FormFields';
import { useMutatePasswordReset } from '@/lib/models/auth/hooks';



const ResetPasswordForm = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const { mutate: onPassReset } = useMutatePasswordReset();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const payload = values;
  
        setIsLoading(false);
        toast({
          title: 'OTP Reset Sent Succesfully',
          description: 'OTP Sent successfully',
        });
        saveLocalStorage(HIVE_ACCOUNT_EMAIL, payload.email);
        form.reset();
    }
  

  const FormSchema = z.object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Incorrect email address'),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <TextInput
          control={form.control}
          name="email"
          placeholder="eg. yourname@gmail.com"
          label="Your Email"
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

export default ResetPasswordForm;
