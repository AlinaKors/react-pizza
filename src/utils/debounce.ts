//функция, для откладки вызова другой функции
export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  ms: number,
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};
