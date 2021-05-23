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
