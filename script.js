function fetchHotCoffeeData() {
    fetch('https://api.sampleapis.com/coffee/hot')
        .then(response => response.json())
        .then(data => {
            const coffeeContent = document.getElementById('hot-content');
            coffeeContent.innerHTML = '';
            data.forEach(coffee => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h3');
                title.textContent = coffee.title;
                const img = document.createElement('img');
                img.src = coffee.image;
                const ingredients = document.createElement('p');
                ingredients.textContent = coffee.ingredients;

                card.appendChild(title);
                card.appendChild(img);
                card.appendChild(ingredients);

                coffeeContent.appendChild(card);
            });
        })
        .catch(error => console.log('Error fetching coffee data:', error));
}

function fetchIcedCoffeeData() {
    fetch('https://api.sampleapis.com/coffee/iced')
        .then(response => response.json())
        .then(data => {
            const coffeeContent = document.getElementById('iced-content');
            coffeeContent.innerHTML = '';
            data.forEach(coffee => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h3');
                title.textContent = coffee.title;
                const img = document.createElement('img');
                img.src = coffee.image;
                const ingredients = document.createElement('p');
                ingredients.textContent = coffee.ingredients;

                card.appendChild(title);
                card.appendChild(img);
                card.appendChild(ingredients);

                coffeeContent.appendChild(card);
            });
        })
        .catch(error => console.log('Error fetching coffee data:', error));
}

const coffeeHotBtn = document.getElementById('hot-btn');
const coffeeIcedBtn = document.getElementById('iced-btn');

coffeeHotBtn.addEventListener('click', () => {
    fetchHotCoffeeData();
    document.getElementById('hot-section').style.display = 'block';
    document.getElementById('iced-section').style.display = 'none';
    document.getElementById('description-section').style.display = 'none';
});

coffeeIcedBtn.addEventListener('click', () => {
    fetchIcedCoffeeData();
    document.getElementById('hot-section').style.display = 'none';
    document.getElementById('iced-section').style.display = 'block';
    document.getElementById('description-section').style.display = 'none';
})