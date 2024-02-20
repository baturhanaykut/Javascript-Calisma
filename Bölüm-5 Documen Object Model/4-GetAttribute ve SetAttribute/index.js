
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.baturhanaykut.com.tr/');
link.textContent='Baturhan Aykut Sitesi';

const pDegeri = document.querySelector('p');
console.log(pDegeri.getAttribute('class'));

pDegeri.setAttribute('class','pIcerigi');
pDegeri.setAttribute('style','color:red');