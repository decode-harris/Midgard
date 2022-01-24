// select the [ card-preview ] button
// const previewButton = document.querySelector('#preview-button');

// select both of the card faces inside the preview container element
let faceFront = document.querySelector('.front');
let faceBack = document.querySelector('.back');

// set the default transform properties for both card faces
faceFront.style.transform = 'perspective(770px) rotateY(0deg)';
faceBack.style.transform = 'perspective(770px) rotateY(180deg)';


/*
    Application State : [ Postcard Component : Preview ]

        Event : Apply rotation animation styles to postcard component.
                Revert the rotation animation styles on postcard
                component if button is clicked a second time.

                Iterate through all navigation button elements.
                Display the final button inside the navigation 
                component.

                Show the confirmation button to accept the final state
            
        State-Transition : From [ Postcard Component Preview ==> Social Media Application Link ]
*/
previewButton.addEventListener('click', ()=> {

    // iterate through all navigation button elements
    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';

        // keep the current application state button [ Preview Button ]
        buttons[8].style.display = 'block';

        // as well as displaying the final application state button [ Complete Button ]
        buttons[9].style.display = 'block';

        // append the button [ Complete Button ] to the header element
        header.appendChild(buttons[9]);
    }
    
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