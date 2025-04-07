import styles from './BtnForCart.module.scss';
type BtnForCartProps = {
  children?: React.ReactNode;
  handleClick?: () => void;
  textBtn?: string;
  classNameBtn: string;
};

export const BtnForCart: React.FC<BtnForCartProps> = ({
  children,
  textBtn,
  classNameBtn,
  handleClick,
}) => {
  return (
    <button className={styles[classNameBtn]} onClick={handleClick}>
      {children}
      <span>{textBtn}</span>
    </button>
  );
};
