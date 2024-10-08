export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = [];
  for (const item of set) {
    const subItem = item.slice(0, startString.length);
    if (subItem === startString) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
