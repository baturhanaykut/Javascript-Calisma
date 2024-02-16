const framework1 = "Angular";
const framework2 = "React";
const framework3 ="Vue";

let sonuc = "Baturhan'ın bildiği javascript framworkleri : " + framework1 + " " + framework2 + " " + framework3;
console.log(sonuc);

let sonuc2 = `Baturhan'ın bildiği javascript framworkleri : ${framework1} ${framework2} ${framework3}`
console.log(sonuc2);

let html = `
<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>

`
console.log(html);