import type { Metadata } from 'next';
import DevicesPage from '@/components/DevicesPage';

export const metadata: Metadata = {
  title: 'Devices | TMEDIA',
};

const page = () => {
  return (
    <>
      <DevicesPage />
    </>
  );
};

export default page;
