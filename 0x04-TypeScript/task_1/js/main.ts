interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [attrName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}
    
const printTeacher  = (firstName: string, lastName: string) : string  => {
  return `${firstName}[0]. ${lastName}`;
}

class StudentClass {
  
  firstName: string;
  lastName: string;

  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName; 
  }

  workOnHomework () : string {
    return 'Currently working';
  }

  displayName() : string {
    return this.firstName;
  }
}


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

const student = new StudentClass("jhon", "Doe");
console.log(student.displayName())
console.log(student.workOnHomework())
