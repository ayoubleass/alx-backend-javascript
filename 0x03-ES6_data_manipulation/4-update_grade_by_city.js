export default function updateStudentGradeByCity(students, city, newGrades) {
  const stds = students.filter((std) => std.location === city);
  const stdWithGrade = stds.map((std) => {
    const currStd = newGrades.find((info) => std.id === info.studentId);
    return {
      ...std,
      grade: (currStd.grade !== undefined) ? currStd.grade : 'N/A',
    };
  });
  return stdWithGrade;
}
