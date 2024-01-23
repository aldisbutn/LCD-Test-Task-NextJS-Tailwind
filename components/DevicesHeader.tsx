import Button from './Button';
import Image from 'next/image';

type DevicesHeaderProps = {
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onlineCount: number;
  offlineCount: number;
  searchQuery: string;
  activeButton: boolean;
  click: (button: boolean) => void;
};

const DevicesHeader = (props: DevicesHeaderProps) => {
  const {
    handleSearchInputChange,
    onlineCount,
    offlineCount,
    searchQuery,
    activeButton,
    click,
  } = props;
  return (
    <div className="flex justify-between px-5 py-5">
      <div className="flex gap-1">
        <Button
          buttonText={'Online'}
          click={() => click(true)}
          variant={`${activeButton ? 'primary' : 'secondary'}`}
          number={onlineCount}
        />

        <Button
          click={() => click(false)}
          buttonText={'Offline'}
          variant={`${!activeButton ? 'primary' : 'secondary'}`}
          number={offlineCount}
        />
      </div>
      <div className="relative w-full max-w-80">
        <Image
          src="/Search.svg"
          alt="search icon"
          className="absolute left-3 top-2.5"
          width={16}
          height={16}
        />
        <input
          type="text"
          name="search"
          placeholder="Quick search.."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full rounded-md  bg-neutral-200 py-2.5 pl-9 pr-4 text-sm text-gray-600"
        />
      </div>
    </div>
  );
};

export default DevicesHeader;
