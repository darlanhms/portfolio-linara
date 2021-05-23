import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burguer = ({ open, setOpen, ...rest }: Props): React.ReactElement => {
  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={open}
      className={styles.button}
      onClick={() => setOpen(!open)}
      {...rest}
    >
      <span className={clsx({ [styles.open]: open })} />
      <span className={clsx({ [styles.open]: open })} />
      <span className={clsx({ [styles.open]: open })} />
    </button>
  );
};

export default Burguer;
