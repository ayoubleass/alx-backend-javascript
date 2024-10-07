export default function getStudentIdsSum(students) {
  return students.reduce((sum, currentVal) => sum + currentVal.id, 0);
}
