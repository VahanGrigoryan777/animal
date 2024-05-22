const animalsFact = document.getElementById('Animals')
const factDisplay = document.getElementById('fact')
let currentAnimalIndex = 0

const animalAPIs = [
    'https://dog.ceo/api/breeds/image/random',
    'https://api.thecatapi.com/v1/images/search',
    'https://randomfox.ca/floof'
]

animalsFact.addEventListener('click', function () {
    
    let apiUrl = animalAPIs[currentAnimalIndex]

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let imageUrl
            if (currentAnimalIndex === 0) {
                imageUrl = data.message
            } else if (currentAnimalIndex === 1) {
                imageUrl = data[0].url
            } else if (currentAnimalIndex === 2){ 
                imageUrl = data.image
            }
            
            factDisplay.innerHTML = `<img src="${imageUrl}" alt="Random Animal" id="animalImage">`
        
            const animalImage = document.getElementById('animalImage')
            if (currentAnimalIndex === 0) {
                animalImage.addEventListener('click', function () {
                    window.location.href = 'second.html'
                    
                })
            }

            const animalImage1 = document.getElementById('animalImage')
            if (currentAnimalIndex === 1) {
                animalImage1.addEventListener('click', function () {
                    window.location.href = 'third.html'
                })
            }
            const animalImage2 = document.getElementById('animalImage')
            if (currentAnimalIndex === 2) {
                animalImage2.addEventListener('click', function () {
                    window.location.href = 'fox.html'
                })
            }
            currentAnimalIndex = (currentAnimalIndex + 1) % animalAPIs.length
        })
        .catch(error => {
            alert(error)
        });
});