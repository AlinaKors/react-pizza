import styles from './TriangleToggle.module.scss';

type TriangleToggle = {
  desc: boolean;
  onToggleSort: () => void;
};

export const TriangleToggle: React.FC<TriangleToggle> = ({ desc, onToggleSort }) => {
  return (
    <div
      className={desc ? `${styles.triangle} ${styles.desc}` : styles.triangle}
      onClick={onToggleSort}
    ></div>
  );
};
