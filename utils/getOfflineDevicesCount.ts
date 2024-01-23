import { Device } from '@/app/home/devices/page';

const getOfflineDevicesCount = (devices: Device[]) => {
  return devices.filter((device) => device.status === 'Offline').length;
};

export default getOfflineDevicesCount;
