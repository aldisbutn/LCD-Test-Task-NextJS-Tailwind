import Link from 'next/link';
import Image from 'next/image';

type NavigationLinkProps = {
  name: string;
  path: string;
  isActive: boolean;
};

const NavigationLink = (props: NavigationLinkProps) => {
  const { name, path, isActive } = props;
  return (
    <Link
      className={`flex gap-2 ${isActive ? 'text-neutral-100' : 'text-neutral-500'}`}
      href={`/home/${path}`}
    >
      <Image
        src={isActive ? `/${path}_active.svg` : `/${path}.svg`}
        alt={name}
        width={24}
        height={24}
      />
      {name}
    </Link>
  );
};

export default NavigationLink;
