'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const NavigationTitle = () => {
  const path = usePathname();

  const getPathName = (path: string) => {
    const split = path.split('/').pop();
    if (split) {
      const formatted = split
        .replace(/_/g, ' ')
        .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
      return formatted;
    }
  };

  return (
    <div className="flex flex-col items-center gap-[12px] bg-neutral-800 px-[135px] py-[20px]">
      <div className="w-full max-w-[1170px]">
        <div className="flex gap-[8px]">
          <h1 className="text-sm font-medium text-neutral-500">
            Home
          </h1>
          <h1 className="text-sm font-medium text-neutral-500 opacity-20">
            /
          </h1>
        </div>
        <h1 className="text-[21px] font-medium text-neutral-100">
          {getPathName(path)}
        </h1>
      </div>
    </div>
  );
};

export default NavigationTitle;