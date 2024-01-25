import BackgroundElement from '@/components/BackgroundElement';
import ContentContainer from '@/components/ContentContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Settings | TMEDIA',
};

const GeneralSettings = () => (
  <main className="relative flex w-full items-center justify-center">
    <BackgroundElement />
    <ContentContainer>
      <h1 className="px-20 py-20 text-xl">General Settings Page</h1>
    </ContentContainer>
  </main>
);

export default GeneralSettings;
