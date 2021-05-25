import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  url?: string;
  title: string;
}

const ImageWSubtitle = ({ url, title, ...rest }: Props): React.ReactElement => {
  return (
    <div
      {...rest}
      className={clsx(styles.art, rest.className)}
      style={{
        backgroundImage: `url(${url || '/images/building.jpg'})`,
      }}
    >
      <div className={styles.textWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ImageWSubtitle;
