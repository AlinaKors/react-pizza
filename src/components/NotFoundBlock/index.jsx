import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.notFoundBlock}>
      <h1>404</h1>
      <span>Страница не найдена :c</span>
      <p>Извините, но страницы, которую вы ищите, не существует.</p>
    </div>
  );
};

export const NotFoundPizzas = () => {
  return (
    <div className={styles.notFoundBlock}>
      <h1>К сожалению, пицца не найдена</h1>
      <p>Извините, но данной пиццы в этой категории нету :с</p>
    </div>
  );
};
