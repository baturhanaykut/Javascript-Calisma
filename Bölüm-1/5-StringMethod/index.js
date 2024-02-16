let adSoyad = "Baturhan Aykut";

//Last Index Of (En son bulunan karakter)
let son = adSoyad.lastIndexOf("A");
console.log(son);

//Slice Methodu (İki index arasındaki karakterleri consola basmayı sağlar.)

let bastanSona = adSoyad.slice(0,5);
console.log(bastanSona);

//Substring

let bastanSonaSubstr = adSoyad.substring(3,9);
console.log(bastanSonaSubstr);

//Karakter değiştirme Replace(Genellikle boşluklaır kaldırmak için yapılır)

let karakterDegistir = adSoyad.replace("n", "w");
console.log(karakterDegistir);