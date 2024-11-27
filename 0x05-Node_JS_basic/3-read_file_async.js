const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      let message = '';
      const fileData = data
        .toString('utf-8')
        .trim()
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
      message += `Number of students: ${fileData.length}\n`;
      for (const [key, value] of Object.entries(studentsByFields)) {
        if (key && value) {
          message += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
      }
      message = message.slice(0, -1);
      console.log(message);
      resolve(message);
    }
  });
});

module.exports = countStudents;
