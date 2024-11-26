const fs = require('fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  const fileData = fs.readFileSync(filePath)
    .toString('utf-8')
    .split('\n');
  fileData.shift();
  const studentsRecords = fileData;
  const studentsByFields = {};
  for (const row of studentsRecords) {
    const rowValues = row.split(',');
    let fieldName = rowValues[rowValues.length - 1];
    fieldName = fieldName.replace(/\r/g, '');
    if (!studentsByFields[fieldName]) {
      studentsByFields[fieldName] = [];
    }
    studentsByFields[fieldName].push(rowValues[0]);
  }
  console.log(`Number  of students: ${fileData.length}`);
  for (const [key, value] of Object.entries(studentsByFields)) {
    if (key && value) {
      console.log(`Number  of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  }
};

module.exports = countStudents;
