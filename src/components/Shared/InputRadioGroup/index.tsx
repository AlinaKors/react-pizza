import { Fragment, memo } from 'react';
import styles from './InputRadioGroup.module.scss';

type InputRadioGroupProps = {
  name: string;
  options: string[];
  id: number;
  checkedValue: number;
  setValue: (index: number) => void;
};

export const InputRadioGroup: React.FC<InputRadioGroupProps> = memo(
  ({ name, options, id, checkedValue, setValue }) => {
    return (
      <div className={styles[name]}>
        {options.map((type, index) => (
          <Fragment key={`${type + id}`}>
            <input
              className={styles.typePizza}
              type="radio"
              id={type + id}
              name={name + id}
              value={type}
              checked={checkedValue === index}
              onChange={() => setValue(index)}
            />
            <label className={styles.typePizzaLabel} htmlFor={`${type + id}`}>
              {type}
            </label>
          </Fragment>
        ))}
      </div>
    );
  },
);
