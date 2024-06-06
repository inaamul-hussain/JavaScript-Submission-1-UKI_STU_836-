const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
    ];

let highGradeStudents =[];

function checkGrade(highGrade, index) {
    if (highGrade[index].grade > 80) {
        return highGrade[index];
    }
    return null;
}

 for (let i = 0; i < students.length; i++) {
    let newVal = checkGrade(students,i)
    if (newVal !== null) {
        highGradeStudents.push(newVal)
    }
    
    
 }

 console.log(highGradeStudents);