const joke = document.getElementById('joke');
const jokeButton = document.getElementById('jokeButton');


const apiKey = 'aIUjlbTrFnBemO3lzCDspA==3TSQBwYxRbvyDW6P';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
}


async function getJoke() {

    try {
        joke.textContent = 'Updating...';
        jokeButton.textContent = "Loading..";
        jokeButton.disabled = true;
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        jokeButton.disabled = false;
        jokeButton.textContent = "Tell Me A Joke"
        joke.textContent = data[0].joke;
    } catch (error) {
        joke.textContent = 'Try Again Later';
        jokeButton.disabled = false;
        jokeButton.textContent = "Tell Me A Joke"
    }


}


jokeButton.addEventListener('click', getJoke)
