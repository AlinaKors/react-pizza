import styles from './Button.module.scss';
type BtnForCartProps = {
  children?: React.ReactNode;
  handleClick?: () => void;
  textBtn?: string;
  classNameBtn: string;
};

//шаблон кнопок в корзине
export const Button: React.FC<BtnForCartProps> = ({
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
