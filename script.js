document.getElementById('newImageButton').addEventListener('click', fetchRandomDogImage);

function fetchRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => {
            console.error('Fehler beim Laden des Bildes:', error);
        });
} // Add this closing curly brace
       