/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

// create array with img
const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];
console.log(images);

let currentImg = 0;
let slideImg = document.querySelector('img#slide');
slideImg.src = images[currentImg];
console.log(slideImg.src)

//create variable and function for btn top
const c92BtnTop = document.querySelector('.c92BtnTop');
c92BtnTop.addEventListener('click', c92MoveTop);

//start function for btn top
function c92MoveTop(){
    if(currentImg <= 0){
        currentImg = images.length;
        
    }
    //decrease index of images(array) for switch image
    currentImg--;
    let slideImg = document.querySelector('img#slide');
    slideImg.src = images[currentImg];

    //remove class c92mainThumbnails from whoever owns it and add opacity to the selected thumbs
    let thumbs = document.querySelectorAll('.c92thumbnails');
    let mainthumb = document.querySelector('.c92mainThumbnails');
    mainthumb.classList.remove('c92mainThumbnails');
    thumbs[currentImg].classList += ' c92mainThumbnails';
}


//create variable and function for btn bot
const c92BtnBot = document.querySelector('.c92BtnBot');
c92BtnBot.addEventListener('click', c92MoveBot);
console.log('bot');

//start function for btn bot
function c92MoveBot(){
    if(currentImg >= images.length - 1){
        currentImg = - 1;
        
    }
    
    //increase index of images(array) for switch image
    currentImg++;
    let slideImg = document.querySelector('img#slide');
    slideImg.src = images[currentImg];

    //remove class c92mainThumbnails from whoever owns it and add opacity to the selected thumbs
    let thumbs = document.querySelectorAll('.c92thumbnails');
    let mainthumb = document.querySelector('.c92mainThumbnails');
    mainthumb.classList.remove('c92mainThumbnails');
    thumbs[currentImg].classList += ' c92mainThumbnails';

}


// generate right thumbs

for (let i = 0; i < images.length; i++) {
    let slideImgRight = document.createElement('div');
    slideImgRight.innerHTML = `<img src= "${images[i]}"></img>`;
    if(i === 0)
    slideImgRight.classList += ' c92mainThumbnails';
    slideImgRight.classList += ' c92thumbnails';
    const c92BoxRight = document.querySelector('.c92BoxRight');
    c92BoxRight.appendChild(slideImgRight);
    console.log(slideImgRight);
}  

// autoplay carousel 
let intervalSlider;

function startInterval(){
    intervalSlider = setInterval(c92MoveBot, 3000);
}

function stopInterval() {
    clearInterval(intervalSlider);
}
slideImg.addEventListener('mouseover', stopInterval);
slideImg.addEventListener('mouseout', startInterval);
startInterval();
