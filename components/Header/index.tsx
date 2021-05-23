import styles from './styles.module.css';

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <h1 className={styles.text}>Linara</h1>
      <ul className={styles.links}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Designs</a>
        </li>
        <li>
          <a href="/">Ilustrações</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
