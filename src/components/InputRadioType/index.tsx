import styles from './InputRadioType.module.scss';
import { Fragment } from 'react';

type InputRadioTypeProps = {
  velueType: string;
  type: number;
  id: number;
  checkedType: number;
  setTypeInput: (value: React.SetStateAction<number>) => void;
  nameInput: string;
};

export const InputRadioType: React.FC<InputRadioTypeProps> = ({
  velueType,
  id,
  type,
  checkedType,
  setTypeInput,
  nameInput,
}) => {
  return (
    <Fragment>
      <input
        className={styles.typePizza}
        type="radio"
        id={velueType + id}
        name={nameInput + id}
        value={velueType}
        checked={checkedType === type}
        onChange={() => setTypeInput(type)}
      />
      <label className={styles.typePizzaLabel} htmlFor={velueType + id}>
        {velueType}
      </label>
    </Fragment>
  );
};
