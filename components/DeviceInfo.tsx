'use client';

import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';
import Image from 'next/image';
import { Device } from '@/app/home/devices/page';

type DeviceInfoProps = {
  device: Device;
};

const DeviceInfo = (props: DeviceInfoProps) => {
  const { device } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredDeviceId, setHoveredDeviceId] = useState<number>(0);
  const isDeviceHovered = isHovered && device.ID === hoveredDeviceId;
  return (
    // When device is hovered show shadow and buttons
    <div
      className={`flex items-center justify-between gap-4 rounded-md border ${isDeviceHovered ? 'border-neutral-500' : 'border-neutral-400'} py-3 pl-5 pr-2 ${isDeviceHovered ? 'shadow' : ''}`}
      onMouseOver={() => {
        setIsHovered(true);
        setHoveredDeviceId(device.ID);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredDeviceId(0);
      }}
    >
      <div className="flex w-full max-w-217.5 items-center gap-4">
        <div className="flex w-full max-w-64 items-center gap-3">
          {/* If device is online - green dot. If offline - red dot */}
          <div
            className={`h-1.5 w-1.5 rounded-full ${device.status === 'Online' ? 'bg-success-300' : 'bg-danger-300'}`}
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
        <div className="flex h-9 w-full max-w-36 flex-col items-start justify-center">
          <h1 className="text-xs font-normal text-neutral-700 opacity-70 ">
            Model
          </h1>
          <h1 className="text-sm font-medium text-neutral-800">
            {device.model}
          </h1>
        </div>
        <div className="inline-flex h-9 w-full max-w-87.5 flex-col items-start justify-center">
          <h1 className="text-xs text-neutral-700 opacity-70">Con-stat</h1>
          <h1 className="text-sm font-medium text-neutral-800">
            {device.conStat}
          </h1>
        </div>
      </div>
      {/* Show buttons if device has mouse over it */}
      {isDeviceHovered && (
        <div className="flex gap-1">
          <Button buttonText="Settings" variant="info" size="medium" />
          <Button buttonText="Control" variant="info" size="medium" />
          <Link
            href={`/home/devices/${device.ID}`}
            className="flex h-9 w-9 items-center justify-center"
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
