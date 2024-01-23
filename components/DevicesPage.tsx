'use client';
import BackgroundElement from '@/components/BackgroundElement';
import ContentContainer from '@/components/ContentContainer';
import DeviceInfo from '@/components/DeviceInfo';
import DevicesHeader from '@/components/DevicesHeader';
import Pagination from '@/components/Pagination';
import { Device } from '@/types/types';
import useGetDevices from '@/utils/useGetDevices';
import React, { useEffect, useState } from 'react';

const DevicesPage = () => {
  // State for devices and filtered devices
  const [devices, setDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

  // State for online, offline counts and which button is active
  const [onlineCount, setOnlineCount] = useState(0);
  const [offlineCount, setOfflineCount] = useState(0);
  const [activeButton, setActiveButton] = useState('offline');

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for active page and how many devices to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredDevices.length);
  const displayedDevices = filteredDevices.slice(startIndex, endIndex);

  // Function for handling search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get query from input
    const query = e.target.value.toLowerCase();

    // Filter devices based on query and active button
    const filtered = devices.filter((device) => {
      const matchesSearch = device.name.toLowerCase().includes(query);
      return activeButton === 'online'
        ? matchesSearch && device.status === 'Online'
        : matchesSearch && device.status === 'Offline';
    });

    // Set filtered devices and search query
    setFilteredDevices(filtered);
    setSearchQuery(query);
  };

  // On page load
  useEffect(() => {
    const getData = async () => {
      // Get devices from API
      const data = await useGetDevices();
      setDevices(data);
      // Filter devices based on status
      const onlineDevices = data.filter(
        (device: Device) => device.status === 'Online',
      );
      const offlineDevices = data.filter(
        (device: Device) => device.status === 'Offline',
      );
      // Set online and offline counts
      setOnlineCount(onlineDevices.length);
      setOfflineCount(offlineDevices.length);
      // Set filtered devices based on active button
      setFilteredDevices(
        activeButton === 'online' ? onlineDevices : offlineDevices,
      );
    };

    getData();
  }, [activeButton]);

  // Function for handling online/offline button click
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  // Function for handling page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <main className="relative flex w-full items-center justify-center">
      <BackgroundElement />
      <ContentContainer>
        <DevicesHeader
          props={{
            handleSearchInputChange: handleSearchInputChange,
            onlineCount: onlineCount,
            offlineCount: offlineCount,
            searchQuery: searchQuery,
            activeButton: activeButton,
            handleButtonClick: handleButtonClick,
          }}
        />
        <div className="flex flex-col gap-[4px] px-[20px] pb-[20px] ">
          {displayedDevices.map((device) => (
            <DeviceInfo
              key={device.ID}
              params={{
                device: device,
              }}
            />
          ))}
        </div>
        <Pagination
          params={{
            filteredDevices: filteredDevices,
            currentPage: currentPage,
            pageSize: pageSize,
            startIndex: startIndex,
            endIndex: endIndex,
            onClick: handlePageChange,
          }}
        />
      </ContentContainer>
    </main>
  );
};

export default DevicesPage;
