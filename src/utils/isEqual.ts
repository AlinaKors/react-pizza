//сравнение двух объектов
export const isEqual = (x: unknown, y: unknown): boolean => {
  if (typeof x !== typeof y) return false;

  if (typeof x === 'object' && x !== null && y !== null) {
    const xKeys = Object.keys(x as object);
    const yKeys = Object.keys(y as object);

    if (xKeys.length !== yKeys.length) return false;
    return xKeys.every((key) =>
      isEqual((x as Record<string, unknown>)[key], (y as Record<string, unknown>)[key]),
    );
  }

  return x === y;
};
