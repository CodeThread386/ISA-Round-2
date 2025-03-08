let currentConverter = null;
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

function toggleConverter(type) {
    if (currentConverter === type) {
        document.getElementById('content-container').innerHTML = '';
        document.getElementById('home-content').style.display = 'block';
        currentConverter = null;
    } else {
        loadConverter(type);
        document.getElementById('home-content').style.display = 'none';
        currentConverter = type;
    }
}

function loadConverter(type) {
    let content = '';
    switch(type) {
        case 'temperature':
            content = `<div class='converter show'>
                <h2>Celsius to Fahrenheit</h2>
                <input type='number' id='celsius' placeholder='Enter Celsius' onkeypress='handleKeyPress(event, "temperature")'>
                <button class='convert' onclick='convertTemp()'>Convert</button>
                <p id='result'></p>
            </div>`;
            break;
        case 'weight':
            content = `<div class='converter show'>
                <h2>Pounds to Kilograms</h2>
                <input type='number' id='pounds' placeholder='Enter Pounds' onkeypress='handleKeyPress(event, "weight")'>
                <button class='convert' onclick='convertWeight()'>Convert</button>
                <p id='result'></p>
            </div>`;
            break;
        case 'length':
            content = `<div class='converter show'>
                <h2>Feet to Inches</h2>
                <input type='number' id='feet' placeholder='Enter Feet' onkeypress='handleKeyPress(event, "length")'>
                <button class='convert' onclick='convertLength()'>Convert</button>
                <p id='result'></p>
            </div>`;
            break;
        case 'mass':
            content = `<div class='converter show'>
                <h2>Pounds to Ounces</h2>
                <input type='number' id='poundMass' placeholder='Enter Pounds' onkeypress='handleKeyPress(event, "mass")'>
                <button class='convert' onclick='convertMass()'>Convert</button>
                <p id='result'></p>
            </div>`;
            break;
        case 'mole':
            content = `<div class='converter show'>
                <h2>Grams to Moles</h2>
                <input type='number' id='grams' placeholder='Enter Grams' onkeypress='handleKeyPress(event, "mole")'>
                <input type='number' id='molarMass' placeholder='Molar Mass (g/mol)' onkeypress='handleKeyPress(event, "mole")'>
                <button class='convert' onclick='convertMoles()'>Convert</button>
                <p id='result'></p>
            </div>`;
            break;
    }
    document.getElementById('content-container').innerHTML = content;
}

function handleKeyPress(event, type) {
    if (event.key === 'Enter') {
        switch(type) {
            case 'temperature':
                convertTemp();
                break;
            case 'weight':
                convertWeight();
                break;
            case 'length':
                convertLength();
                break;
            case 'mass':
                convertMass();
                break;
            case 'mole':
                convertMoles();
                break;
        }
    }
}

function convertTemp() {
    let celsius = document.getElementById('celsius').value;
    document.getElementById('result').innerText = `${celsius}°C = ${(celsius * 9/5 + 32).toFixed(2)}°F`;
}

function convertWeight() {
    let pounds = document.getElementById('pounds').value;
    document.getElementById('result').innerText = `${pounds} lb = ${(pounds * 0.453592).toFixed(2)} kg`;
}

function convertLength() {
    let feet = document.getElementById('feet').value;
    document.getElementById('result').innerText = `${feet} ft = ${(feet * 12).toFixed(2)} inches`;
}

function convertMass() {
    let pounds = document.getElementById('poundMass').value;
    document.getElementById('result').innerText = `${pounds} lb = ${(pounds * 16).toFixed(2)} oz`;
}

function convertMoles() {
    let grams = document.getElementById('grams').value;
    let molarMass = document.getElementById('molarMass').value;
    document.getElementById('result').innerText = `${grams} g = ${(grams / molarMass).toFixed(2)} moles`;
}