'use client';

import { usePathname } from 'next/navigation';
import UserMenu from './UserMenu';
import Image from 'next/image';
import Link from 'next/link';
import DashboardIcon from './Navigation-Icons/DashboardIcon';
import ApartmentsIcon from './Navigation-Icons/ApartmentsIcon';
import DevicesIcon from './Navigation-Icons/DevicesIcon';
import GeneralSettingsIcon from './Navigation-Icons/GeneralSettingsIcon';

const Navigation = () => {
  const links = [
    { name: 'Dashboard', path: 'dashboard', IconComponent: DashboardIcon },
    { name: 'Apartments', path: 'apartments', IconComponent: ApartmentsIcon },
    { name: 'Devices', path: 'devices', IconComponent: DevicesIcon },
    {
      name: 'General Settings',
      path: 'general-settings',
      IconComponent: GeneralSettingsIcon,
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-center border-b border-zinc-200 border-opacity-10 bg-neutral-800 px-5 py-4">
      <div className="flex w-full max-w-292.5 items-center">
        <div className="pr-14">
          <Image src="/Logotype.svg" width={66} height={40} alt="logo" />
        </div>
        <div className="flex items-center gap-8 ">
          {links.map(({ name, path, IconComponent }) => {
            const activePath = pathname.startsWith(`/home/${path}`);
            return (
              <Link
                key={name}
                className={`flex gap-2 ${activePath ? 'text-neutral-100 fill-primary-300' : 'text-neutral-500 fill-neutral-600'}`}
                href={`/home/${path}`}
              >
                <IconComponent />
                {name}
              </Link>
            );
          })}
        </div>
        <UserMenu user="Roberts" />
      </div>
    </nav>
  );
};

export default Navigation;
