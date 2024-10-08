export default function cleanSet(set, startString) {
  if (!set && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  const result = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString) && startString.length > 0) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
