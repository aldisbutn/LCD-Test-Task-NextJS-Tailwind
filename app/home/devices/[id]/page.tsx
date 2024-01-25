import BackgroundElement from '@/components/BackgroundElement';
import ContentContainer from '@/components/ContentContainer';
import useGetDevice from '@/utils/useGetDevice';

export const generateMetadata = async ({
  params,
}: {
  params: { id: number };
}) => {
  const device = await useGetDevice(params.id);
  return {
    title: `${device.name} | LCD`,
  };
};

const Device = async ({ params }: { params: { id: number } }) => {
  const { name } = await useGetDevice(params.id);

  return (
    <main className="relative flex w-full items-center justify-center">
      <BackgroundElement />
      <ContentContainer>
        <div className="px-5 py-5 flex flex-col gap-5">
          <div className="flex justify-center">
            <h1 className="text-xl">Device name: {name}</h1>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
};

export default Device;
