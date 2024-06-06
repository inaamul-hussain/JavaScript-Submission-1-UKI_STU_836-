function updateEmployeeRecord(employee, updates) {
    
    const updatedEmployee = { ...employee, ...updates }
    
    return updatedEmployee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 }
const updates = { position: 'Senior Developer', salary: 60000 }
console.log(updateEmployeeRecord(employee, updates));