import React from 'react';
import MainLayout from '@/components/main-layout';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Page;
