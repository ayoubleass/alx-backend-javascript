/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
  
    getRequirements = () : string => "Here is the list of requirements for React";
    
    getAvailableTeacher = () => {
      if (!this.teacher || this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher}`;
    }
  }  
}
