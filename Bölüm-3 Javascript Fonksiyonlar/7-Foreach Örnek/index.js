const ulum = document.querySelector('.main');

let ogrencilerim = ['Baturhan', 'Yagiz', 'Gokce', 'Ada'];

let html = ``;

ogrencilerim.forEach(ogrenci => {
    html += `<li>${ogrenci}</li>`
})

console.log(html);

ulum.innerHTML = html;