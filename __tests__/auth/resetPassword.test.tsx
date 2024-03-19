import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResetPasswordForm from '@/components/forms/resetPassword';
import { FormProviderWrapper } from '@/lib/core/testHelpers';

const mutateResetPassword = jest.fn();

jest.mock('@/lib/models/auth/hooks', () => ({
  useMutatePasswordReset: () => ({
    mutate: mutateResetPassword,
  }),
}));

describe('<ResetPasswordForm />', () => {
  it('should render reset-password component correctly without error', () => {
    const { container } = render(<ResetPasswordForm />, {
      wrapper: FormProviderWrapper,
    });
    expect(container).not.toBeNull();
  });

  it('should submit form when user click submit button and form is valid', async () => {
    const user = userEvent.setup();
    render(<ResetPasswordForm />, {
      wrapper: FormProviderWrapper,
    });

    const emailInput = screen.getByLabelText('Your Email');
    const btn = screen.getByText('Submit Now');

    fireEvent.submit(btn);

    await waitFor(() => {
      expect(mutateResetPassword).toHaveBeenCalledWith(
        {
          email: 'johndoe@gmail.com',
        },
        {
          onSuccess: expect.any(Function),
          onError: expect.any(Function),
        },
      );
    });
  });
});
