import { HTMLAttributes } from 'react';

import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  url?: string;
  width: number;
  height: number;
  title: string;
}

const ImageWSubtitle = ({ url, title, width, height, ...rest }: Props): React.ReactElement => {
  return (
    <div
      className={styles.art}
      style={{
        backgroundImage: `url(${url || '/images/building.jpg'})`,
        width,
        height,
      }}
      {...rest}
    >
      <div className={styles.textWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ImageWSubtitle;
