class HolbertonCourse {

  constructor(name, length , students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if(typeof name != 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if(typeof length != 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = length;
  }


  get students() {
    return this.students;
  }


  set students(students) {
    if(!students instanceof Array) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

}

export default HolbertonCourse;
