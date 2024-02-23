const names = ["baturhan", "gokce", "yagiz", "ada"];

names.sort();
console.log(names);

names.reverse();
console.log(names);

const points = [70, 75, 25, 3, 10, 80, 27];

// points.sort();
// console.log(points);
// points.reverse();
points.sort((a,b)=>b-a).reverse();
console.log(points);


const students = [
    { name: 'baturhan', point: 40 },
    { name: 'gokce', point: 60 },
    { name: 'yagiz', point: 30 },
    { name: 'ada', point: 100 },
    { name: 'baturhan', point: 80 },
    { name: 'tuba', point: 30 },
    { name: 'elif', point: 60 },
    { name: 'osman', point: 40 },
];

// students.sort((a, b) => { 
//     if(a.point > b.point){
//         return -1;
//     }
//     else if(b.point > a.point){
//         return +1;
//     }
//     else{
//         return 0;
//     }
// });

students.sort((a,b)=>b.point-a.point);

console.log(students);
