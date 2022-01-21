/*
    Application States [ Prototype ]

    Contains the application state navigation prototype functions.
    
    Selects each state element and hides from application view.

    Only displays a single application state in accordance with 
    the users step / stage in the application creation process.

*/

/* select the specific container element via ID
    state [0] = Startup : Application Welcome Screen
    state [1] Uploading : File Image Upload Module
    state [2] Heading : User Title Selection
    state [3] Placement : User Title Placement
    state [4] Editing : User Memo + Recipient Data
    state [5] Preview : 3D Digital Postcard Preview

    state [6] Sharing : Social Media Sharing [ Coming Soon ]

*/
const startup = document.querySelector('#startup');
const uploading = document.querySelector('#uploading');
const heading = document.querySelector('#heading');
const placement = document.querySelector('#placement');
const editing = document.querySelector('#editing');
const preview = document.querySelector('#preview');

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

        // display the next state container [ State-Transition : Startup ==> Uploading ]
        container[1].style.display = 'flex';
    }
});

/*
    refer to [ prototype-upload.js ] for file upload functionality
    and validation methods ( uploading container ).
*/

// select the [ upload-button ]
const uploadButton = document.querySelector('#upload-button');
// remove the [ upload-button ] from the application view
uploadButton.style.display = 'none';
// add a click event to the button
uploadButton.addEventListener('click', ()=> {

    // select the current postcard element
    let postcard = uploading.querySelector('.postcard .front');

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

        // display the next state container [ state transition : Uploading ==> Heading ]
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

        // display the next state container [ state transition : Heading ==>  Placement ]
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

        // display the next state container [ state transition : Placement ==>  Editing ]
        container[4].style.display = 'flex';
    }

    // set focus to the textarea element
    memo.focus();

});

// select the [ editing-button ]
const editingButton = document.querySelector('#editing-button');

// add a click event to the button
editing.addEventListener('click', ()=> {

})

// select the [ finalize-button ]
const finalizeButton = document.querySelector('#finalize-button');
finalizeButton.style.display = 'none'; // remove the finalize-button from view
// add a click event to the button
finalizeButton.addEventListener('click', ()=> {

    // iterate through all container elements
    for ( let i = 0; i < container.length; i++ ) {
        // remove all container elements from view
        container[i].style.display = 'none';

        // display the next state container [ state transition : Editing ==>  Preview ]
        container[5].style.display = 'flex';
    }
});

