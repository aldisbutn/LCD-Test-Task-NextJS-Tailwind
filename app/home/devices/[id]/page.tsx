import BackgroundElement from '@/components/BackgroundElement';
import ContentContainer from '@/components/ContentContainer';
import useGetDevice from '@/utils/useGetDevice';

export const generateMetadata = async ({params}: {params: {id: number}}) => {
  const device = await useGetDevice(params.id);
  return {
    title: `${device.name} | LCD`,
  };
}

const page = async ({ params }: { params: { id: number } }) => {
  const device = await useGetDevice(params.id);
  return (
    <main className="relative flex w-full items-center justify-center">
      <BackgroundElement />
      <ContentContainer>
        <h1 className='px-20 py-20 text-xl'>{device.name}</h1>
      </ContentContainer>
    </main>
  );
};

export default page;
