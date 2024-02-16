console.log("Merhaba Dünya");

let email = "baturhanaykut@gmail.com"

console.log(email);

//Birleştirme

let ad = "Baturhan";
let soyad = "Aykut";

let adSoyad = ad + " " +soyad;

console.log(adSoyad);

//Karakterleri Çekme (String ifadenin içindeki karakteri çekmek için kullanılır)

console.log(adSoyad[0]);

//String ifade Kaç Karakterden Oluşuyor.

console.log(adSoyad.length);

if(adSoyad.length > 0 )
{
    //Kontrol amaçlı kullanıyoruz.
}

//Methotlar

//Karakterlerin Hepsini Büyük Yapmak için kullanılır.
console.log(adSoyad.toUpperCase());

//Karakterleri Hepsini Küçük Yapmak içimn kullanılır.
console.log(adSoyad.toLocaleLowerCase());

let index = adSoyad.indexOf("t");
console.log("T'nin bulunduğu index : " + index );