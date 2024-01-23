import { Device } from '@/app/home/devices/page';

const filterDevices = (
  devices: Device[],
  searchQuery: string,
  isOnline: boolean,
) => {
  return devices.filter((device) => {
    const matchesSearch = device.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return isOnline
      ? matchesSearch && device.status === 'Online'
      : matchesSearch && device.status === 'Offline';
  });
};

export default filterDevices;
