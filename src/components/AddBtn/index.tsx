import styles from './AddBtn.module.scss';
import IconAdd from '../../assets/img/plus.svg?react';

type AddBtnProps = {
  handleAddToCart: () => void;
  addBtn: number;
};

export const AddBtn: React.FC<AddBtnProps> = ({ handleAddToCart, addBtn }) => {
  return (
    <button className={styles.addBtn} onClick={handleAddToCart}>
      <IconAdd />
      <span>Добавить</span>
      {addBtn !== 0 && (
        <div className={styles.countItem}>
          <span>{addBtn}</span>
        </div>
      )}
    </button>
  );
};
