// 3 Adet değişken tanımala yöntemi vardır
// let(Değiştirilebilir) , const(Değiştirilemez) , var 

let gun = 13;
let ay = 7;
let yil = 1988;

console.log(gun, ay, yil);

// String bir ifade ile int bir ifade toplandığında oluşan ifade string tipinde onlur

console.log("Baturhan Aykut " + gun +"/" + ay +"/" + yil + " tarihinde doğmuştur.");

gun = 29;

console.log(gun);

const sifirarabafiyatı =250000;

// sifirarabafiyatı=100000; Bu uygulanamaz. Hata alınıca derlemeyi durduruz.
console.log(sifirarabafiyatı);

var arabafiyatı=130000;
console.log(arabafiyatı);