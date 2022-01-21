/*
    Application States [ Prototype ]

    Contains the application state navigation prototype functions.
    
    Selects each state element and hides from application view.

    Only displays a single application state in accordance with 
    the users step / stage in the application creation process.

*/

// select all container elements inside the application
let container = document.querySelectorAll('.container');
// iterate through all container elements
for ( let i = 0; i < container.length; i++ ) {
    // remove all container elements from view
    container[i].style.display = 'none';

    // display the first container element [ startup ]
    container[0].style.display = 'flex';
}

// select the [ startup-button ]
const startupButton = document.querySelector('#startup-button');
// add a click event to the button
startupButton.addEventListener('click', ()=> {
    
    // iterate through all container elements
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the first container element [ uploading ]
        container[1].style.display = 'flex';
    }
});

// select the [ confirm-button ]
const confirmButton = document.querySelector('#confirm-button');
confirmButton.style.display = 'none';
// add a click event to the button
confirmButton.addEventListener('click', ()=> {

    // select the current postcard element
    let postcard = document.querySelector('.postcard');

    // validate if a photo image has been uploaded
    if (postcard.style.backgroundImage == '' || postcard.style.backgroundImage == null) {

        // if an photo file is not found, alert the user to upload one
        alert('please upload an image to begin the creation process!');

        /*
            return after this validation is complete,
            do not run any part of this function until
            validation has passed.

        */
        return
    }
    
    /*
        once validation has passed, iterate through
        all container elements
    */
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the first container element [ editing ]
        container[2].style.display = 'flex';
    }

    // set the application to focus / highlight the title input element
    title.focus();

    // set the overlay module to display : grid
    overlay.style.display = 'grid';

});

// select the [ title-button ]
const titleButton = document.querySelector('#title-button');
// remove the title button from application view
titleButton.style.display = 'none';
// add a click event to the button
titleButton.addEventListener('click', (e)=> {

    // prevent default form submission
    e.preventDefault();
    
    // assign the user title as the title form value
    userTitle = title.value;

    // test the form submission vale
    console.log('postcard title : ' + userTitle);

    // iterate through all container elements
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the first container element [ placement ]
        container[3].style.display = 'flex';
    }

    

});

// select the [ placement-button ]
const placementButton = document.querySelector('#placement-button');

// remove the [ placement-button ] from application view
placementButton.style.display = 'none';

// add a click event to the button
placementButton.addEventListener('click', ()=> {

    // iterate through all container elements
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the first container element [ preview ]
        container[4].style.display = 'flex';
    }

});

// select the [ finalize-button ]
const finalizeButton = document.querySelector('#finalize-button');
finalizeButton.style.display = 'none'; // remove the finalize-button from view
// add a click event to the button
finalizeButton.addEventListener('click', ()=> {

    // iterate through all container elements
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the first container element [ preview ]
        container[4].style.display = 'flex';
    }

});

// select & attach an event listener to the [ message-button ]
const messageButton = document.querySelector('#message-button');
// click event [ message-button ]
messageButton.addEventListener('click', ()=> {

    let address2 = document.querySelector('#address2');
    if (address2.value == '' || address2.value == null) {
        address2.style.display = 'none';
    }

    // select the [ editing section ] element
    const editingSection = document.querySelector('#editing');

    // select the card component inside the editing section container
    let card = editingSection.querySelector('.postcard');

    // set the class name of the card to [ card-complete ]
    card.className += ' card-complete';

    // remove the message button from view
    messageButton.style.display = 'none';

    finalizeButton.style.display = 'block';


});