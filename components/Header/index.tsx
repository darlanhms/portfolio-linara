import { useState } from 'react';
import Image from 'next/image';
import Burguer from '../Burguer';
import Menu from '../Menu';
import styles from './styles.module.css';

const Header = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div>
        <Menu open={open} />
        <Burguer open={open} setOpen={setOpen} />
      </div>
      <Image width={600} height={600} src="/images/capa.png" layout="intrinsic" />
      <ul className={styles.links}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/designs">Designs</a>
        </li>
        <li>
          <a href="/illustrations">Ilustrações</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
