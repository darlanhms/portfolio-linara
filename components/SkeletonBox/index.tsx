import ContentLoader from 'react-content-loader';

import styles from './styles.module.scss';

const SkeletonBox = (): React.ReactElement => (
  <ContentLoader className={styles.skeletonBox}>
    <rect x="0" y="0" rx="5" ry="5" width="600" height="600" />
  </ContentLoader>
);

export default SkeletonBox;
