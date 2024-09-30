export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  if (trueOrFalse) {
    return [false, true];
  }
  return [task, task2];
}
