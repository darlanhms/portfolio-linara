import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './styles.module.css';

const Footer = (): React.ReactElement => {
  function scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className={styles.section}>
        <span className={styles.backToTop} onClick={scrollTop}>
          <p>Voltar ao topo</p>
          <Icon icon={faLongArrowAltUp} />
        </span>
      </div>
      <div className={clsx(styles.section, styles.socials)}>
        <a href="https://www.instagram.com/linaraarts/" target="_blank" rel="noreferrer">
          <Icon size="2x" icon={faInstagram}></Icon>
        </a>
        <a href="https://linkedin.com/in/linara-tomasoni-da-silva-6769931a2" target="_blank" rel="noreferrer">
          <Icon size="2x" icon={faLinkedinIn}></Icon>
        </a>
      </div>
    </>
  );
};

export default Footer;
