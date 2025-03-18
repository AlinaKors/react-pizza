//функция, для откладки вызова другой функции
export const debounce = (fn, ms) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};
