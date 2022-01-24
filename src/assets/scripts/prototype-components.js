
/*  
    Header Component : Visual Application Process

        Contains the animated stages the user is up
        to in the application postcard creation process.

        Also houses the button [ complete-button ] for
        sending the completed postcard component via
        social media.
*/
const header = document.querySelector('#header');

/*
    Postcard Component : Application Content Container

        Contains a front & back side of the postcard component.
        Front Modules :
            [ File Image Upload ]
            [ Form Module : Title ]
            [ Overlay Module : Placement ]

        Back Modules :
            [ Form Module : Memo ]
            [ Color Selection Module : Colors List ]

        Event : Animate the postcard component to rotate
                180 degrees while keeping the elements 3D
                perspective.
*/
const postcard = document.querySelector('#postcard');
const facefront = postcard.querySelector('.front');
const faceback = postcard.querySelector('.back');

/*
    Navigation Component : Application Button Container

        Contains all the application event buttons. Buttons
        are iterated through and removed from view until
        they are called via the state and/or component
        elements.

*/
const navigation = document.querySelector('#nav');
const buttons = navigation.querySelectorAll('.btn');

// iterate through all navigation button elements
for ( let i = 0; i < buttons.length; i++ ) {

    // remove all buttons from view
    buttons[i].style.display = 'none';
}


