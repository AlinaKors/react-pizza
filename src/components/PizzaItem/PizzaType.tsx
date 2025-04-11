import { memo } from 'react';
import styles from './PizzaItem.module.scss';
import { InputRadioGroup } from '../Shared/InputRadioGroup';
import { PizzaTypeProps } from './types';
import { typePizza } from '../../utils/initialParams';

export const PizzaType: React.FC<PizzaTypeProps> = memo(
  ({ id, types, sizes, typeInput, setTypeInput, sizeInput, setSizeInput }) => {
    return (
      <div className={styles.doughChoise}>
        <InputRadioGroup
          id={id}
          name="type"
          options={types.map((type) => typePizza[type])}
          checkedValue={typeInput}
          setValue={setTypeInput}
        />
        <InputRadioGroup
          id={id}
          name="size"
          options={sizes.map((size) => `${size} см.`)}
          checkedValue={sizeInput}
          setValue={setSizeInput}
        />
      </div>
    );
  },
);
