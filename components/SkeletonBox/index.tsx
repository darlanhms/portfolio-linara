import ContentLoader from 'react-content-loader';

interface Props {
  width: number;
  height: number;
  className?: string;
}

const SkeletonBox = ({ width, height, className }: Props): React.ReactElement => (
  <ContentLoader className={className} style={{ width, height }}>
    <rect x="0" y="0" rx="5" ry="5" width="600" height="600" />
  </ContentLoader>
);

export default SkeletonBox;
