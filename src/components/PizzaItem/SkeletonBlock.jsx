import ContentLoader from 'react-content-loader';

export const SkeletonBlock = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={450}
    viewBox="0 0 260 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="264" rx="0" ry="0" width="260" height="36" />
    <rect x="0" y="304" rx="10" ry="10" width="260" height="60" />
    <rect x="0" y="376" rx="0" ry="0" width="82" height="32" />
    <rect x="130" y="369" rx="30" ry="30" width="130" height="40" />
  </ContentLoader>
);
