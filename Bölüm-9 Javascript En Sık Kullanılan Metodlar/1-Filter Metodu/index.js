const points = [70, 75, 25, 35, 10, 80, 27];



//Uzun yazılmış hali.
// const studentsPassed = points.filter(point => {
//     return point > 50;
// })
//Kısa yazılış şekli
const studentsPassed = points.filter(point => point > 50);

console.log(studentsPassed);

const students = [
    { name: 'baturhan', passed: true },
    { name: 'gokce', passed: false },
    { name: 'yagiz', passed: false },
    { name: 'ada', passed: true },
];

//Geçemeyen öğrencileri bulmak için önüne ! işareti kullanılır.
const passingStudents = students.filter(student =>{
    return !student.passed;
});

console.log(passingStudents);