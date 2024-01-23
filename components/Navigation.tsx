'use client';

import NavigationLink from './NavigationLink';
import { usePathname } from 'next/navigation';
import UserMenu from './UserMenu';
import Image from 'next/image';

const Navigation = () => {
  const links = [
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Apartments', path: 'apartments' },
    { name: 'Devices', path: 'devices' },
    { name: 'General Settings', path: 'general_settings' },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-center border-b border-zinc-200 border-opacity-10 bg-neutral-800 px-[20px] py-[16px]">
      <div className="flex w-full max-w-[1170px] items-center">
        <div className="pr-[52px]">
          <Image src="/Logotype.svg" width={66} height={40} alt="logo" />
        </div>
        <div className="flex items-center gap-[32px] ">
          {links.map((link) => {
            const activePath = pathname.startsWith(`/home/${link.path}`);
            return (
              <NavigationLink
                key={link.name}
                params={{
                  name: link.name,
                  path: link.path,
                  isActive: activePath,
                }}
              />
            );
          })}
        </div>
        <UserMenu
          params={{
            user: 'Roberts',
          }}
        />
      </div>
    </nav>
  );
};

export default Navigation;
