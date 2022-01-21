// select the [ card-preview ] button
const cardPreview = document.querySelector('#preview-button');

// select both of the card faces
let faceFront = document.querySelector('.front');
let faceBack = document.querySelector('.back');

// set the default transform properties for both card faces
faceFront.style.transform = 'perspective(770px) rotateY(0deg)';
faceBack.style.transform = 'perspective(770px) rotateY(180deg)';

// attach a click event to the [ card-preview ] button
cardPreview.addEventListener('click', ()=> {

    // 1. apply rotation animation styles to card
    // 2. revert rotation animation styles on card
    // 3. show the confirmation button to accept the final state

    // validate if the back of the card is visible to the user
    if (faceFront.style.transform != 'perspective(770px) rotateY(0deg)') {

        // revert the card back to its default state [ front of card ]
        faceFront.style.transform = 'perspective(770px) rotateY(0deg)';
        faceBack.style.transform = 'perspective(770px) rotateY(180deg)';
        
        // test
        console.log('card prev : if');
    }
    else {
        // or apply the rotation animation styles
        faceFront.style.transform = 'perspective(770px) rotateY(180deg)';
        faceBack.style.transform = 'perspective(770px) rotateY(360deg)';
        
        // test
        console.log('card prev : else');
    }
});