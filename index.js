const employee = { name: "Johnny", streetAddress: "123 Street" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  var updatedEmployee = {...employee}
  updatedEmployee[key] = value;
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  var updatedEmployee = {...employee};
  delete updatedEmployee[key];
  return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}