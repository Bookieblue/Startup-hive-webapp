
import React, { FC, ReactNode } from 'react';
import Logo from '@/components/ui/logo';

interface FormLayoutProps {
  children: ReactNode;
}
const Formlayout: FC<FormLayoutProps> = ({ children }) => {
  return (
    <section className=" ">
            {children}
    </section>
  );
};

export default Formlayout;
