
let isimler = ["Baturhan", "Gökçe","Yagiz","Sacit","Fatma","Aysel","Ada"];
console.log(isimler[1]);

isimler[1] = "Tuğçe";
console.log(isimler[1]);

let yaslar = [3,18,25,50];
console.log(yaslar[3]);

let rastgele = ["baturhan", "aykut", 10, 15];
console.log(rastgele);
console.log(rastgele.length);

let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(",");
console.log(virgullu);

let sira=isimler.indexOf("Sacit");
console.log(sira);

let ekleme = isimler.concat("Aydın","Sibel");
console.log(ekleme);

let elemanekle = isimler.push("Kubilay");
console.log(elemanekle);

//En son elemanı çıkarma
isimler.pop();
console.log(isimler);