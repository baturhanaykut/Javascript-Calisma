// const points = [70, 75, 25, 35, 10, 80, 27];

// const newPoints = points.map(point => {
//     return point + 10;
// });
// console.log(newPoints);

const students = [
    { name: 'baturhan', point: 40 },
    { name: 'gokce', point: 60 },
    { name: 'yagiz', point: 30 },
    { name: 'ada', point: 100 },
];

const newStudentPoints = students.map(student => {
    if (student.point < 50) {
        //return { name: student.name, point: student.point + 20 }
        student.point+=15;
        return student;
    }
    else {
        return student
    }
});
console.log(newStudentPoints);
