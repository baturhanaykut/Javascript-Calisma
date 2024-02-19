// const a = (callBacka) => {
//     let yas = 40;
//     callBacka(yas);
// };
// a(function (value) {
//     console.log(value);
// })


let ogrencilerim = ['Baturhan', 'Gokce', 'Yagız', 'Ada'];

ogrencilerim.forEach(function () {
    console.log("Selam");
})

ogrencilerim.forEach(function (kisi, index) {
    console.log(kisi, index);
})

const ogrenci = (kisi, index) => {
    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);