import { useState } from 'react';
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
      <h1 className={styles.text}>Linara</h1>
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
