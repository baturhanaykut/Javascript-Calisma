const count = 30;
const apiKey = '5vYg2-uK33fpl4HOhAs7vd1njkQihJlqOGeH1AfjLHw'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('imageDiv');
const loader = document.getElementById('loading');


getImages();

let isDownloaded = false;
let imagesLoaded = 0;
let totalİmages = 0;
let imagesArray = [];

async function getImages() {
    try {
        const response = await fetch(apiUrl);

        imagesArray = await response.json();

        displayImages();

    } catch (error) {

    }
}

function displayImages() {
    imagesLoaded = 0;
    totalİmages = imagesArray.length;
    imagesArray.forEach((image) => {
        const item = document.createElement('a');
        setAttributes(item, { href: image.urls.regular })
        //item.setAttribute('href',image.urls.regular);

        const img = document.createElement('img');

        //img.setAttribute('src',image.urls.regular);
        //img.setAttribute('alt',image.alt_description);
        setAttributes(img, {
            src: image.urls.regular,
            alt: image.alt_description
        });

        img.addEventListener('load', imageLoad)

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

function imageLoad() {
    imagesLoaded++;
    if (imagesLoaded === totalİmages) {
        isDownloaded = true;
        loader.hidden = true;
    }
}

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

window.addEventListener('scroll', () => {
    console.log("Tetiklendi.")

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && isDownloaded) {
        getImages();
    }
})