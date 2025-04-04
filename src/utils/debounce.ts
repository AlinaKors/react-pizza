//функция, для откладки вызова другой функции
export const debounce = <T extends (...args: any[]) => void>(fn: T, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};
