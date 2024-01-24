import { Device } from '@/app/home/devices/page';

const filterDevices = (
  devices: Device[],
  searchQuery: string,
  devicesToDisplay: string,
) => {
  return devices.filter((device) => {
    const matchesSearch = device.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      if (devicesToDisplay === 'all') {
        return matchesSearch;
      } else if (devicesToDisplay === 'online') {
        return matchesSearch && device.status === 'Online';
      } else if (devicesToDisplay === 'offline') {
        return matchesSearch && device.status === 'Offline';
      }
  });
};

export default filterDevices;
