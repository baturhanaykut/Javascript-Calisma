
//const pDegeri = document.querySelector('p');
// console.log(pDegeri.innerText);

// pDegeri.innerText='Baturhan Aykut Fullstack Developer';

// const pDegeri = document.querySelectorAll('p');

// pDegeri.forEach(a => {
//     console.log(a.innerText);
//     a.innerText += ' Yeni alan'
// });

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

//icerik.innerHTML = '<h2>Vue Js, react Js, Angular Js</h2>'
icerik.innerHTML += '<h2>Vue Js, react Js, Angular Js</h2>'


const ogrenciler = ['Baturhan', 'Gökçe','Yağiz'];

ogrenciler.forEach(ogrenci=>{
icerik.innerHTML+= `<p>${ogrenci}</p>`;
});