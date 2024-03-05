
//Data kaydetmek için kullanılır. 
//İlk değer vericek olduğumuz property İkinci alan propertinin değeridir.
//Değerler localStorage'de string olarak tutulur.
localStorage.setItem('name', 'Baturhan');
localStorage.setItem('age', 36);

//Set ettiğimiz değerleri çağırmak için getItem kullanılır.
let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad, yas);

//Veriyi updet atmek için tekrar setItem ile yeni değer verebiliriz.
localStorage.setItem('name', 'Baturhan Aykut');
// .(nokta) ile içindeki property'e ulaşıp yeni değer atayabiliriz. 
localStorage.age = 37;


//let key word ile atadığımız için değişken ismi ile atama yaptık.
ad = localStorage.getItem('name');
yas = localStorage.getItem('age');

console.log(ad, yas);


// LOCALSTRAOGE EN ÖNEMLİ ÖZELLİĞİ SAYFAYI REFREŞ EDİLDİĞİNDE GİTMEZ. KALIR