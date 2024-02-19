
let ogrenci = {
    ad:'Baturhan',
    yas:'36',
    email:'baturhanaykut@gmail.com',
    sinif:12,
    dersler:['Matematik','Fizik','Kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas = 20;
console.log(ogrenci.yas);

console.log(ogrenci['ad']); 
ogrenci['ad']='Ali';
console.log(ogrenci['ad']); 

console.log(typeof ogrenci);