export default function hasValuesFromArray(set, array) {
  let isInSet = true;
  for (const value of array) {
    isInSet = set.has(value);
  }
  return isInSet;
}
