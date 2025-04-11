import { memo } from 'react';
import { PizzaInfoProps } from './types';

export const PizzaInfo: React.FC<PizzaInfoProps> = memo(({ imageUrl, title }) => {
  return (
    <>
      <picture>
        <img src={imageUrl} alt="pizza" />
      </picture>
      <h3>{title}</h3>
    </>
  );
});
