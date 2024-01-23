import Button from './Button';
import Image from 'next/image';

type DevicesHeaderProps = {
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onlineCount: number;
  offlineCount: number;
  searchQuery: string;
  activeButton: string;
  handleButtonClick: (button: string) => void;
};

const DevicesHeader = ({ props }: { props: DevicesHeaderProps }) => {
  const {
    handleSearchInputChange,
    onlineCount,
    offlineCount,
    searchQuery,
    activeButton,
    handleButtonClick,
  } = props;
  return (
    <div className="flex justify-between px-[20px] py-[20px]">
      <div className="flex gap-[4px]">
        <Button
          params={{
            onClick: () => handleButtonClick('online'),
            text: 'Online',
            textClassInfo: `text-sm font-medium ${activeButton === 'online' ? 'text-neutral-100' : 'text-neutral-800'}`,
            buttonClassInfo: `flex items-center gap-[10px] rounded-md border ${activeButton === 'online' ? 'border-neutral-400 bg-primary-300' : 'border-neutral-400 bg-neutral-100'} py-[6px] pl-[16px] pr-[6px]`,
            secondaryTextWrapperClassInfo: `inline-flex h-6 w-6 items-center justify-center rounded-md ${activeButton === 'online' ? 'bg-primary-100' : 'bg-neutral-200'} px-[8px] py-[4px]`,
            secondaryTextClassInfo: `text-xs font-medium leading-none ${activeButton === 'online' ? 'text-primary-500' : 'text-neutral-700'}`,
            secondaryText: `${onlineCount}`,
          }}
        />
        <Button
          params={{
            onClick: () => handleButtonClick('offline'),
            text: 'Offline',
            textClassInfo: `text-sm font-medium ${activeButton === 'offline' ? 'text-neutral-100' : 'text-neutral-800'}`,
            buttonClassInfo: `flex items-center gap-[10px] rounded-md border ${activeButton === 'offline' ? 'border-neutral-400 bg-primary-300' : 'border-neutral-400 bg-neutral-100'} py-[6px] pl-[16px] pr-[6px]`,
            secondaryTextWrapperClassInfo: `inline-flex h-6 w-6 items-center justify-center rounded-md ${activeButton === 'offline' ? 'bg-primary-100' : 'bg-neutral-200'} px-[8px] py-[4px]`,
            secondaryTextClassInfo: `text-xs font-medium leading-none ${activeButton === 'offline' ? 'text-primary-500' : 'text-neutral-700'}`,
            secondaryText: `${offlineCount}`,
          }}
        />
      </div>
      <div className="relative w-full max-w-[300px]">
        <Image
          src="/Search.svg"
          alt="search icon"
          className="absolute left-[12px] top-[11px]"
          width={16}
          height={16}
        />
        <input
          type="text"
          name="search"
          placeholder="Quick search.."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full rounded-md  bg-neutral-200 py-[9px] pl-[36px] pr-[16px] text-sm text-gray-600"
        />
      </div>
    </div>
  );
};

export default DevicesHeader;
