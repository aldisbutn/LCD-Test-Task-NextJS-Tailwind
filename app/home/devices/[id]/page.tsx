import useGetDevice from '@/utils/useGetDevice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devices | TMEDIA',
};

const page = async ({ params }: { params: { id: number } }) => {
  const device = await useGetDevice(params.id);
  return (
    <div>
      <h1>{device.name}</h1>
    </div>
  );
};

export default page;
