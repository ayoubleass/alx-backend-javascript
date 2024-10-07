export default function getStudentsByLocation(students, city) {
  return students.filter((std) => std.location === city);
}
