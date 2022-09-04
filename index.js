const fs=require('fs');
const xmljs=require('xml-js');
var employees=[];
employees.push({
   id : 1,
   name: 'Mohamed',
   salary : 9000
});
employees.push({
    id : 2,
    name: 'Yassine',
    salary : 22000
});
employees.push({
    id : 3,
    name: 'Hanane',
    salary : 23000
});
var employeesList={employee : employees}
var jsonData=JSON.stringify(employeesList);
var options={compact : true, spaces : 0}
var xmlData="<root>\n"+xmljs.js2xml(employeesList,options)+"\n<\/root>";
console.log(jsonData);
fs.writeFileSync('data.json',jsonData);
fs.writeFileSync('data.xml',xmlData);
