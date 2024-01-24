'use client';

import { Device } from '@/app/home/devices/page';
import DevicesHeader from './DevicesHeader';
import Pagination from './Pagination';
import DeviceInfo from './DeviceInfo';
import { useMemo, useState } from 'react';
import getOnlineDevicesCount from '@/utils/getOnlineDevicesCount';
import getOfflineDevicesCount from '@/utils/getOfflineDevicesCount';
import filterDevices from '@/utils/filterDevices';

export type DisplayStatus = 'all' | 'online' | 'offline';

const ViewDevices = ({ devices }: { devices: Device[] }) => {
  const [devicesToDisplay, setDevicesToDisplay] = useState<DisplayStatus>('all');

  const [onlineCount, offlineCount] = useMemo(() => {
    const onlineDevicesCount = getOnlineDevicesCount(devices);
    const offlineDevicesCount = getOfflineDevicesCount(devices);
    return [onlineDevicesCount, offlineDevicesCount];
  }, [devices]);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const startIndex = (currentPage - 1) * pageSize;
  const filteredDevices = filterDevices(devices, searchQuery, devicesToDisplay);
  const endIndex = Math.min(startIndex + pageSize, filteredDevices.length);
  const displayedDevices = filteredDevices.slice(startIndex, endIndex);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleButtonClick = (status: DisplayStatus) => {
    if (devicesToDisplay === status) {
      setDevicesToDisplay('all');
      return;
    }
    setDevicesToDisplay(status);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <DevicesHeader
        handleSearchInputChange={handleSearchInputChange}
        onlineCount={onlineCount}
        offlineCount={offlineCount}
        searchQuery={searchQuery}
        devicesToDisplay={devicesToDisplay}
        click={handleButtonClick}
      />
      <div className="flex flex-col gap-1 px-5 pb-5 ">
        {displayedDevices.map((device) => (
          <DeviceInfo key={device.ID} device={device} />
        ))}
      </div>
      <Pagination
        filteredDevices={filteredDevices}
        currentPage={currentPage}
        pageSize={pageSize}
        startIndex={startIndex}
        endIndex={endIndex}
        click={handlePageChange}
      />
    </>
  );
};

export default ViewDevices;
