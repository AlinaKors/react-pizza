//сравнение двух объектов
export const isEqual = (x: { [key: string]: any }, y: { [key: string]: any }): boolean => {
  return typeof x === 'object' && typeof x === typeof y
    ? Object.keys(x).length === Object.keys(y).length &&
        Object.keys(x).every((key) => isEqual(x[key], y[key]))
    : x === y;
};
