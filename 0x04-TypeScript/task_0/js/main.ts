interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}
    
const student1 : Student = {
    firstName : 'jhon',
    lastName: 'doe',
    age: 45,
    location: 'new jersey',
}
    
const student2 : Student = {
    firstName: 'jane',
    lastName: 'doe',
    age: 45,
    location: 'arizona',
}
    
const studentsList: Array<Student> = [student1, student2];
const body: HTMLBodyElement  =  document.getElementsByTagName('body')[0];
const table: HTMLTableElement  = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement  = document.createElement('th');
const th2: HTMLTableCellElement  = document.createElement('th');
th1.innerText = 'First Name';
th2.innerText = 'Location';


thead.append(th1);
thead.append(th2);

table.append(thead);



for (const student of studentsList){
  const tr : HTMLTableRowElement = document.createElement('tr');
  const td1 :  HTMLTableCellElement = document.createElement('td');
  const td2 :  HTMLTableCellElement = document.createElement('td');
  td1.innerText = student.firstName;
  td2.innerText = student.location;
  tr.append(td1);
  tr.append(td2);
  table.append(tr);
}
body.append(table)
