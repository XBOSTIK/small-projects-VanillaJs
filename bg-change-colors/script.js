const button = document.querySelector('#button');
const spanColor = document.querySelector('.color');
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', changeColor);

function changeColor(){
    let color = generateColor();
    document.body.style.backgroundColor = color;
    spanColor.style.color = color;
}

function generateColor(){
    let newColor = '#';
    for(let i = 0; i < 6; i++){
        newColor += hexArray[getRandomNumber()]
    }
    return newColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hexArray.length);
}

// setInterval
// setInterval(changeColor, 1000)