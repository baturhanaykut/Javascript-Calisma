localStorage.setItem('name', 'Baturhan');
localStorage.setItem('age', 36);

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad, yas);

//TEK BİR ITEM'I KALDIRMAK İÇİN KULLANILIR.
//localStorage.removeItem('name');

//Örnek Login olduk. LogOut olduk. bütün verileri silmek için kullanırız. 
localStorage.clear();

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');
console.log(ad, yas);
