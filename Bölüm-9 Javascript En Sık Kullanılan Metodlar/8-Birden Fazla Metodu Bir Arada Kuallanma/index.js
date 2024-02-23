const students = [
    { name: 'baturhan', point: 40 },
    { name: 'gokce', point: 35 },
    { name: 'yagiz', point: 30 },
    { name: 'ada', point: 100 },
    { name: 'baturhan', point: 80 },
    { name: 'tuba', point: 30 },
    { name: 'elif', point: 45 },
    { name: 'osman', point: 40 },
];

const filtered = students.filter(student => student.point < 50);

const plusPoint = filtered.map(student => {
    return `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`;
});

console.log(plusPoint);


const newNotes = students.filter(student => student.point < 50)
.map(student => `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`);
console.log(newNotes);