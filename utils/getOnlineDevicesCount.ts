import { Device } from "@/app/home/devices/page";

const getOnlineDevicesCount = (devices: Device[]) => {
    return devices.filter((device) => device.status === 'Online').length;
  };

    export default getOnlineDevicesCount;