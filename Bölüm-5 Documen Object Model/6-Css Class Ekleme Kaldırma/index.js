
const icerik = document.querySelector('p');

console.log(icerik.classList);

icerik.classList.add('baturhan');
icerik.classList.remove('error');
icerik.classList.add('succes');

const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(baturhan => {
    if (baturhan.textContent.includes('Error')) {
        baturhan.classList.add('error');
    }
    if (baturhan.textContent.includes('Success')) {
        baturhan.classList.add('success');
    }
});