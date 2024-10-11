/// <reference path="subjects/Cpp.ts" />

const cpp: Subjects.Cpp = new Subjects.Cpp();

const cTeacher: Subjects.Teacher = {
  firstName: 'Jhon',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());



