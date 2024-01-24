import Image from 'next/image';

const UserMenu = ({ user }: { user: string }) => {
  return (
    <div className="ml-auto flex items-center gap-2">
      <div className="relative justify-center flex items-center h-8 w-8 rounded-full bg-gradient-to-bl from-slate-300 to-slate-400">
        <h1 className="text-sm font-semibold text-neutral-800">{user[0]}</h1>
      </div>
      <div className="flex gap-1">
        <h1 className="font-medium text-neutral-300">{user}</h1>
        <Image
          src={'/chevron_down.svg'}
          alt={'chevron down'}
          width={8}
          height={6}
        />
      </div>
    </div>
  );
};

export default UserMenu;
