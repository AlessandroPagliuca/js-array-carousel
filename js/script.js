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

/*
 
`<img src="./img/01.webp" alt="" class="active">`
 
*/

// create array with img
const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];
console.log(images);

let currentImg = 0;
let slideImg = document.querySelector('img#slide');
slideImg.src = images[currentImg];
console.log(slideImg.src)

//button top 
const c92BtnTop = document.querySelector('.c92BtnTop');
c92BtnTop.addEventListener('click', c92MoveTop);

function c92MoveTop(){
    if(currentImg <= 0){
        currentImg = images.length;
        
    }
    
    currentImg--;
    let slideImg = document.querySelector('img#slide');
    slideImg.src = images[currentImg];

}

//button bot
const c92BtnBot = document.querySelector('.c92BtnBot');
c92BtnBot.addEventListener('click', c92MoveBot);
console.log('bot');

function c92MoveBot(){
    if(currentImg >= images.length - 1){
        currentImg = - 1;
        
    }
        
    currentImg++;
    let slideImg = document.querySelector('img#slide');
    slideImg.src = images[currentImg];
   
}



for (let i = 0; i < images.length; i++) {
    let slideImgRight = document.createElement('div');
    slideImgRight.innerHTML = `<img src= "${images[i]}"></img>`;
    const c92BoxRight = document.querySelector('.c92BoxRight');
    c92BoxRight.appendChild(slideImgRight);
    console.log(slideImgRight);
}  
