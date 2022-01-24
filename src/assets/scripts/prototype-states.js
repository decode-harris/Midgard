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

// select the navigation component
// const navigation = document.querySelector('#nav');

// select all button elements inside the navigation component
// let buttons = navigation.querySelectorAll('.btn');

// iterate through all button elements
for ( let i = 0; i < buttons.length; i++ ) {
    // remove all container elements from view
    buttons[i].style.display = 'none';

    // display the application state button [ Application Start ]
    buttons[0].style.display = 'block';

    // test all buttons
    console.log(buttons[i]);
}

// select all application buttons
const applicationButton = document.querySelector('#application-button');
const uploadButton = document.querySelector('#upload-button');
const selectionButton = document.querySelector('#selection-button');
const titleButton = document.querySelector('#title-button');
const placementButton = document.querySelector('#placement-button');
const editingButton = document.querySelector('#editing-button');
const messageButton = document.querySelector('#message-button');
const confirmationButton = document.querySelector('#confirmation-button');
const finalizeButton = document.querySelector('#finalize-button');
const previewButton = document.querySelector('#preview-button');
const completeButton = document.querySelector('#complete-button');


// select the form [ Form Module : Title ]
const titleForm = document.querySelector('#title-form');
// remove the form [ Form Module : Title ] from application view
titleForm.style.display = 'none';

// select the text [ Sender Message ] element
const senderMessage = document.querySelector('#sender-message');
// remove the recipient list from application view
senderMessage.style.display = 'none';
// select the un-ordered list [ Recipient List ] Module
const recipientList = document.querySelector('#recipient-list');
// remove the recipient list from application view
recipientList.style.display = 'none';

/*
    Application State : [ File Image Upload ]

        Event : On click, remove all application state buttons
                and display the next button in the iteration

        State-Transition : From [ Application Start ==> File Upload Component ]
*/
applicationButton.addEventListener('click', ()=> {
    
    // iterate through all container elements
    for ( let i = 0; i < buttons.length; i++ ) {

        // remove all container elements from view
        buttons[i].style.display = 'none';

        // display the next application state button [ File Upload Component ]
        buttons[1].style.display = 'block';
    }
});

/*
    ========== ========== ========== ========== ==========
    refer to [ prototype-upload.js ] for file upload functionality
    and validation methods ( uploading container ).

    functionality will also iterate through navigation buttons & display
    the buttons[ 2 ] element.
    ========== ========== ========== ========== ==========
*/

/*
    Application State : [ File Image Upload ]

        Event : On click, validate if the postcard (front) element
                has a background image attribute.
        
                Also remove all application state buttons
                and display the next button in the iteration.

                Display the form [ title-form ] to the application
                user.

        State-Transition : From [ File Upload Component ==> Form Module : Title ]
*/
uploadButton.addEventListener('click', ()=> {

    // validate if a photo image has been uploaded
    if (facefront.style.backgroundImage == '' || facefront.style.backgroundImage == null) {

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
        all navigation component buttons
    */
    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';
    }

    // display the form [ title-form ] to the application user
    titleForm.style.display = 'flex';

    // set the application to focus / highlight the title input element
    title.focus();

});


/*
    Application State : [ Form Module : Title ] : Selection Button

        Event : On click, prevent the form from submitting.
                
                Validate & assign the input element : title as
                the user title variable.

                Once validated, remove all application state buttons
                and display the next button in the iteration.

        State-Transition : From [ Form Module : Title ==> Form Module : Title ( Validation ) ]
*/
selectionButton.addEventListener('click', (e)=> {

    // prevent default from [ title-form ] submission
    e.preventDefault();

    /*
        1. validate the title input element
        2. display the title button
        3. attach an event to the title button 

    */

    // set a timeout of 700 ( 0.7 ) milli-seconds
    setTimeout(() => {

        // iterate through all navigation button elements
        for ( let i = 0; i < buttons.length; i++ ) {
            // remove all navigation buttons from application view
            buttons[i].style.display = 'none';
    
            // display the next application state button [ Form Module : Title ]
            buttons[3].style.display = 'block';
        }
        
    }, 700);

});

/*
    Application State : [ Form Module : Title ] : Title Button

        Event : On click, remove the form [ Form Module : Title ] 
                and display the grid [ Overlay Module : Placement ].
        
                Also remove all application state buttons
                and display the next button in the iteration.

        State-Transition : From [ Form Module : Title ( Validation ) ==> Overlay Module : Placement ]
*/
titleButton.addEventListener('click', ()=> {

    // assign the user title as the title form value
    userTitle = title.value;

    // test the form submission vale
    console.log('postcard title : ' + userTitle);
    
    // remove form module : title from application view
    titleForm.style.display = 'none';

    // display the un-ordered list module : overlay to the application user
    overlay.style.display = 'grid';


    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';
    }

});


/*
    ========== ========== ========== ========== ==========
    refer to [ prototype-overlay.js ] for Overlay Module : Placement
    functionality & device specific events ( Mobile + Desktop ).
    
    functionality will also iterate through navigation buttons & display
    the buttons[ 4 ] & buttons[ 5 ] elements.
    ========== ========== ========== ========== ==========
*/

/*
    Function Animations
        Apply a transform : rotate Y to the postcard
        component.

        Has both a 180 degree rotation for the first time
        rotating the postcard, and a 0 degree for a back
        to default state.
    
*/
animatePostcard_180 = () => { // first time animation properties applied

    // apply the rotation animation styles [ 180 deg ]
    faceFront.style.transform = 'perspective(770px) rotateY(180deg)';
    faceBack.style.transform = 'perspective(770px) rotateY(360deg)';
}
animatePostcard_0 = () => { // default animation properties applied

    // revert the card back to its default state [ front of card ]
    faceFront.style.transform = 'perspective(770px) rotateY(0deg)';
    faceBack.style.transform = 'perspective(770px) rotateY(180deg)';
}


/*
    Application State : [ Postcard Animation ( 180 deg )]

        Event : Initiate the animate postcard 180 function
                which will rotate the postcard to the back
                ( memo form ) view.

                On animation / rotation completion, focus the input 
                element [ memo ].

                Also iterate through & remove all navigation button
                elements, than display the next application state button.

        State-Transition : From [ Overlay Module : Placement ( Confirmation ) ==> Form Module : Memo ]
*/
confirmationButton.addEventListener('click', ()=> {

    // init function  [ animatePostcard_180 ]
    animatePostcard_180();

    // focus the notes input element [ memo ]
    memo.focus();

    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';

        // display the next application state button [ Message Button ]
        buttons[6].style.display = 'block';
    }

});

/*
    ========== ========== ========== ========== ==========
    refer to [ prototype-memo.js ] for form validation & authentication
    procedures attaining to the form element ( memo-form ).

    functionality will iterate through navigation buttons & clear
    the buttons from view.
    ========== ========== ========== ========== ==========
*/

/*
    ========== ========== ========== ========== ==========
    refer to [ prototype-colors.js ] for Color Selection Module 
    functionality & button placement attributes.
    
    functionality will also iterate through navigation buttons & display
    the buttons[ 7 ] element.
    ========== ========== ========== ========== ==========
*/

/*
    Application State : [ Form Module : Memo ]

        Event : Validate that a background color has been assigned.

                On click, remove the un-ordered list [ colors-list ]
                from application view.
        
                Also remove all application state buttons
                and display the next button in the iteration.

        State-Transition : From [ Form Module : Memo ==> Postcard Component Preview ]
*/
finalizeButton.addEventListener('click', (e)=> {

    // prevent default form [ memo-form ] submission
    e.preventDefault();

    let back = postcard.querySelector('.back');

    // validate if background color has been set
    if (back.style.backgroundColor == '' || back.style.backgroundColor == null ) {
        // alert the user to choose a background color
        alert('Please choose a color for the back of your postcard.')
    }

    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';

        // display the next application state button [ Preview Button ]
        buttons[8].style.display = 'block';
    }

    // remove the color list from view
    colorsList.style.display = 'none';

    // init function [ animatePostcard_0 ] : default postcard component
    animatePostcard_0();

});










