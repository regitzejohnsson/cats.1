"use strict";

const butElem = document.getElementById("fetchButton");
const outputElem = document.getElementById("catContainer");


butElem.addEventListener('click', fetchCatInformation);



function fetchCatInformation() {
    fetch('../json/cats.json')
        .then(response => response.json()) 
        .then(data => displayCatInformation(data))
        .catch(error => console.error('Error fetching cat information:', error));
}

function displayCatInformation(cats) {
    const catContainer = document.getElementById('catContainer');
    catContainer.innerHTML = '';
    
    cats.forEach(cat => {
        const catElement = document.createElement('div');
        catElement.classList.add('cat');
        catElement.innerHTML = `
            <h2>${cat.name}</h2>
            <p>Weight: ${cat.weight}</p>
            <p>Breed: ${cat.breed}</p>
            <img src="${cat.image}" alt="${cat.name}">
        `;
        catContainer.appendChild(catElement);
    });
}