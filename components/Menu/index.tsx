import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {
  open: boolean;
}

const Menu = ({ open, ...rest }: Props): React.ReactElement => (
  <nav className={clsx(styles.nav, { [styles.open]: open })} aria-hidden={!open} {...rest}>
    <a href="/">Home</a>
    <a href="/designs">Designs</a>
    <a href="/illustrations">Ilustrações</a>
    <a href="/">Sobre</a>
  </nav>
);

export default Menu;
