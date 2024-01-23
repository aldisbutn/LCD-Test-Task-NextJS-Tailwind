import { Device } from '@/types/types';
import Button from './Button';

type PaginationProps = {
  filteredDevices: Device[];
  currentPage: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
  onClick: (index: number) => void;
};
const Pagination = ({ params }: { params: PaginationProps }) => {
  const {
    filteredDevices,
    currentPage,
    pageSize,
    startIndex,
    endIndex,
    onClick,
  } = params;

  // Calculate the total number of buttons by dividing the total number of devices by the page size
  const totalButtons = Math.ceil(filteredDevices.length / pageSize);

  // Calculate from which device to which device is being displayed
  const devicesInCurrentPage = `${startIndex + 1} - ${endIndex}`;

  // Calculate the total number of devices
  const totalDevices = filteredDevices.length;

  return (
    <div className="w-full flex items-center justify-between rounded-bl-md rounded-br-md bg-neutral-200 px-[20px] py-[12px]">
      <span className="text-sm font-normal text-neutral-700">
        Showing {devicesInCurrentPage} of {totalDevices} devices
      </span>
      <div className="mt-2 flex">
        {Array.from({ length: totalButtons }, (_, index) => (
          <Button
            key={index}
            params={{
              onClick: (event: React.MouseEvent<HTMLButtonElement>) =>
                onClick(Number(event.currentTarget.textContent)),
              text: `${index + 1}`,
              textClassInfo: 'text-sm font-medium',
              buttonClassInfo: `mx-1 rounded-md px-2 py-1 ${
                currentPage === index + 1
                  ? 'bg-primary-300 text-neutral-100'
                  : 'bg-neutral-200 text-neutral-800'
              }`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
