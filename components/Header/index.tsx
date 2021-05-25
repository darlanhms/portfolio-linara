import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Burguer from '../Burguer';
import Menu from '../Menu';
import styles from './styles.module.scss';

function isRouteActive(url: string) {
  const router = useRouter();

  return router.pathname === url;
}

function CustomLink({ url, desc }: { url: string; desc: string }) {
  return (
    <Link href={url}>
      <span className={clsx(styles.linkText, { [styles.active]: isRouteActive(url) })}>{desc}</span>
    </Link>
  );
}

const Header = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div>
        <Menu open={open} />
        <Burguer open={open} setOpen={setOpen} />
      </div>
      <Image width={700} height={460} src="/images/capa.png" layout="intrinsic" />
      <ul className={styles.links}>
        <li>
          <CustomLink url="/" desc="Home" />
        </li>
        <li>
          <CustomLink url="/designs" desc="Designs" />
        </li>
        <li>
          <CustomLink url="/illustrations" desc="Ilustrações" />
        </li>
        <li>
          <CustomLink url="/about" desc="Sobre" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
