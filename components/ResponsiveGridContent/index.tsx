import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

const ResponsiveGridContent = ({ children }: Props): React.ReactElement => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default ResponsiveGridContent;
