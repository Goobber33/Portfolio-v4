import React from 'react';
import MainLayout from '@/components/main-layout';

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
};

export default Page;
