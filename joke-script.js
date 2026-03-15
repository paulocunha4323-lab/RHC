const jokeContainer = document.getElementById('jokeContainer');
const categorySelect = document.getElementById('categorySelect');
const shareButton = document.getElementById('shareButton');

const getJoke = async (category) => {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
        const data = await response.json();

        if (data.type === 'single') {
            jokeContainer.innerHTML = data.joke;
        } else {
            jokeContainer.innerHTML = `${data.setup} <br> ${data.delivery}`;
        }
    } catch (error) {
        jokeContainer.innerHTML = 'Failed to fetch joke.';
    }
};

categorySelect.addEventListener('change', (e) => {
    getJoke(e.target.value);
});

shareButton.addEventListener('click', () => {
    const jokeText = jokeContainer.innerText;
    navigator.share({
        title: 'Check out this joke!',
        text: jokeText,
    }).catch(err => console.error('Error sharing:', err));
});

// Fetch a default joke on load
getJoke(categorySelect.value);