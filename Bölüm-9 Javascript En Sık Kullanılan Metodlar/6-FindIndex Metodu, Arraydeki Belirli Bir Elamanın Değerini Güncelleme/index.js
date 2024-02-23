const points = [70, 75, 25, 35, 10, 80, 27];
const arrayIndex = points.findIndex(point => point == 35);

points[arrayIndex]=45;
console.log(points);



const students = [
    { name: 'baturhan', passed: true },
    { name: 'gokce', passed: false },
    { name: 'yagiz', passed: false },
    { name: 'ada', passed: true },
];

const objectIndex=students.findIndex(object => object.name == 'gokce');

students[objectIndex].name='can';
console.log(students);

const objectIndex1=students.findIndex(object => object.name == 'yagiz');

students[objectIndex1].passed='true';
console.log(students);