import type { Metadata } from 'next';
import useGetDevices from '@/utils/useGetDevices';
import ViewDevices from '@/components/Devices-Components/ViewDevices';
import BackgroundElement from '@/components/BackgroundElement';
import ContentContainer from '@/components/ContentContainer';

export const metadata: Metadata = {
  title: 'Devices | LCD',
};

export type Device = {
  ID: number;
  name: string;
  model: string;
  status: string;
  conPct: number;
  conStat: string;
};

const Devices = async () => {
  const devices = await useGetDevices();
  return (
    <main className="relative flex w-full items-center justify-center">
      <BackgroundElement />
      <ContentContainer>
        <ViewDevices devices={devices} />
      </ContentContainer>
    </main>
  );
};

export default Devices;
