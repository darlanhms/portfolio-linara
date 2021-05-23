import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Burguer from '../Burguer';
import Menu from '../Menu';
import styles from './styles.module.css';

function isRouteActive(url: string) {
  const router = useRouter();

  return router.pathname === url;
}

function Link({ url, desc }: { url: string; desc: string }) {
  return (
    <a className={clsx({ [styles.active]: isRouteActive(url) })} href={url}>
      {desc}
    </a>
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
          <Link url="/" desc="Home" />
        </li>
        <li>
          <Link url="/designs" desc="Designs" />
        </li>
        <li>
          <Link url="/illustrations" desc="Ilustrações" />
        </li>
        <li>
          <Link url="/about" desc="Sobre" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
