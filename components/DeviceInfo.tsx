'use client';

import Link from 'next/link';
import Button from './Button';
import { Device } from '@/types/types';
import { useState } from 'react';
import Image from 'next/image';

type DeviceInfoProps = {
  device: Device;
};

const DeviceInfo = ({ params }: { params: DeviceInfoProps }) => {
  const { device } = params;
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredDeviceId, setHoveredDeviceId] = useState(0);
  const isDeviceHovered = isHovered && device.ID === hoveredDeviceId;
  return (
    // When hovered over buttons will show up, shadow added and border color changes
    <div
      className={`flex items-center justify-between gap-[16px] rounded-md border ${isDeviceHovered ? 'border-neutral-500' : 'border-neutral-400'} py-[12px] pl-[20px] pr-[8px] ${isDeviceHovered ? 'shadow' : ''}`}
      key={device.ID}
      onMouseOver={() => {
        setIsHovered(true);
        setHoveredDeviceId(device.ID);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredDeviceId(0);
      }}
    >
      <div className="flex w-full max-w-[870px] items-center gap-[16px]">
        <div className="flex w-full max-w-[250px] items-center gap-[12px]">
          {/* If device is online - green dot. If offline - red dot */}
          <div
            className={`h-[6px] w-[6px] rounded-full ${device.status === 'Online' ? 'bg-success-300' : 'bg-danger-300'}`}
          ></div>
          <div>
            <h1 className="text-sm font-medium text-neutral-800">
              {device.name}
            </h1>
            <h1 className="text-xs font-normal text-neutral-700">
              Connection: {device.conPct}%
            </h1>
          </div>
        </div>
        <div className="flex h-[38px] w-full max-w-[140px] flex-col items-start justify-center">
          <h1 className="text-xs font-normal text-neutral-700 opacity-70 ">
            Model
          </h1>
          <h1 className="text-sm font-medium text-neutral-800">
            {device.model}
          </h1>
        </div>
        <div className="inline-flex h-[38px] w-full max-w-[350px] flex-col items-start justify-center">
          <h1 className="text-xs text-neutral-700 opacity-70">Con-stat</h1>
          <h1 className="text-sm font-medium text-neutral-800">
            {device.conStat}
          </h1>
        </div>
      </div>
      {/* Show buttons if device has mouse over it */}
      {isDeviceHovered && (
        <div className="flex gap-[4px]">
          <Button
            params={{
              text: 'Settings',
              textClassInfo: 'text-sm font-medium text-neutral-800',
              buttonClassInfo: 'rounded-md bg-neutral-200 px-[16px] py-[8px]',
            }}
          />
          <Button
            params={{
              text: 'Control',
              textClassInfo: 'text-sm font-medium text-neutral-800',
              buttonClassInfo: 'rounded-md bg-neutral-200 px-[16px] py-[8px]',
            }}
          />
          <Link
            href={`/home/devices/${device.ID}`}
            className="flex h-[36px] w-[36px] items-center justify-center"
          >
            <Image
              src="/chevron_right.svg"
              width={16}
              height={16}
              alt="chevron right"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DeviceInfo;
