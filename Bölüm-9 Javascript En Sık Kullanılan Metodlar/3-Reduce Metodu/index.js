const points = [70, 75, 25, 35, 10, 80, 27];

const result = points.reduce((value, point) => {
    if(point>50)
    {
        value++;
    }
    return value;
}, 0);

console.log(result);

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

const baturTotal = students.reduce((value,student)=>{
    if(student.name =="baturhan")
    {
        value+=student.point;
    }
    return value;
},0);

console.log(baturTotal);