import { PrizePoolsProps } from "../Pages/AnalysisPage";

export const getPercentage = (numerator: number, total: number): string =>
  ((numerator / total) * 100).toFixed(2);

const countHashKeys = (
  data: Array<{ [key: string]: string }>,
  keyToCount: string
): { [key: string]: number } => {
  const hash = {} as { [key: string]: number };
  data.forEach((obj) => {
    const key = obj[keyToCount];
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  });
  return hash;
};

export const countHashKeysPrizePools = (
  data: Array<{ [key: string]: string }>,
  keyToCount: string
): PrizePoolsProps => {
  const hash: PrizePoolsProps = {};
  data.forEach((obj) => {
    const prize = obj[keyToCount] as PrizePoolsProps;
    hash["$10.00"] = prize["$10.00"] ? prize["$10.00"] + 1 : 1;
    hash["$15.00"] = prize["$15.00"] ? prize["$15.00"] + 1 : 1;
    hash["$25.00"] = prize["$25.00"] ? prize["$25.00"] + 1 : 1;
  });
  return hash;
};

// $10.00: 669
// $15.00: 465
// $25.00: 96
// $50.00: 4

export const getElementWordBasedOnIndex = (
  array: string[],
  string: string,
  elementMovement: number = 1
): string => array[array.indexOf(string) + elementMovement];
