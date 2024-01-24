import { Device } from '@/app/home/devices/page';
import Button from '../Button';

type PaginationProps = {
  filteredDevices: Device[];
  currentPage: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
  click: (index: number) => void;
};
const Pagination = (props: PaginationProps) => {
  const {
    filteredDevices,
    currentPage,
    pageSize,
    startIndex,
    endIndex,
    click,
  } = props;

  const totalButtons = Math.ceil(filteredDevices.length / pageSize);
  const devicesInCurrentPage = `${startIndex + 1} - ${endIndex}`;
  const totalDevices = filteredDevices.length;

  return (
    <div className="w-full flex items-center justify-between rounded-bl-md rounded-br-md bg-neutral-200 px-5 py-3">
      <span className="text-sm font-normal text-neutral-700">
        Showing {devicesInCurrentPage} of {totalDevices} devices
      </span>
      <div className="gap-1 flex">
        {Array.from({ length: totalButtons }, (_, index) => (
          <Button
            click={() => click(index + 1)}
            buttonText={`${index + 1}`}
            variant={`${currentPage === index + 1 ? 'primary' : 'secondary'}`}
            size="small"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
