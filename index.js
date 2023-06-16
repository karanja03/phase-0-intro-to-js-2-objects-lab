
function updateEmployeeWithKeyAndValue(employee, key, value){
   const updatedEmployee={
    ...employee,
   [key]:value,
   };
   return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}
const employee = {
    name: "John",
    age:34,
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 35);
console.log(updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee,"age", 35);
console.log(employeeWithoutAge);

const employeeWithoutAge = deleteFromEmployeeByKey(employee,"age");
console.log(employeeWithoutAge);

destructivelyDeleteFromEmployeeByKey(employee, "age");
console.log(employee);