const getPercentage = (numerator: number, total: number): string =>
  ((numerator / total) * 100).toFixed(2);

const countHashKeys = (data: any, keyToCount: string): object => {
  //sort out data
  const hash: object = {};
  data.forEach((obj: any) => {
    const key = obj[keyToCount];
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  });
  return hash;
};

const getElementWordBasedOnIndex = (
  array: string[],
  string: string,
  elementMovement: number = 1
): string => array[array.indexOf(string) + elementMovement];

export { getPercentage, countHashKeys, getElementWordBasedOnIndex };
