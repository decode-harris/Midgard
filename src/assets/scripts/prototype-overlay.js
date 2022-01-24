

// set the user title as an empty string
// let userTitle = '';

/*
    Editing Component : Interactive Overlay Module
        The overlay module provides user's with a visual guide of where
        they will be placing the title on the card element.

        An event listener is attached to each panel in the overlay container.
        If a user clicks on a panel, it will be marked as active.

        An active element will have CSS 'active' styles applied to it, while
        also providing a base placement of the current data [ title ].

        Placement data is retrieved from the overlay data array and distributed
        to the panels.

*/

// const placementButton = document.querySelector('#placement-button');

// select the overlay HTML element module
let overlay = document.querySelector('.overlay');

// select all panels inside the overlay container module
let panels = overlay.getElementsByClassName('panels');

// iterate through all panels
for(let i = 0; i < panels.length; i++) {

    // add a click event to all panels
    panels[i].addEventListener('click', function() {

        // select the active class element
        let current = document.getElementsByClassName('active');

        // validate if there is no active class
        if ( current.length > 0 ) {
            // replace the current / clicked element with the active class
            current[0].className = current[0].className.replace(' active', '');
        }
        
        // add an active class to the clicked panel area
        this.className += ' active';
        // this.innerHTML = postcard_title;

        // iterate through the [ overlayDataArray ] array
        for(let i = 0; i < overlayDataArray.length; i++) {

            // validate which panel this user has currently selected
            if (panels[i].className == 'panels active') {

                // refer to [ overlayDataArray ] array for default values
                panels[0].innerHTML = overlayDataArray[0].section;
                panels[1].innerHTML = overlayDataArray[1].section;
                panels[2].innerHTML = overlayDataArray[2].section;
                panels[3].innerHTML = overlayDataArray[3].section;

                // apply the user created title to the selected / active element
                this.innerHTML = userTitle;
                activePanel = this.id;

                // test loop / data assignment
                console.log(this.innerHTML);
            }
        }

        // set a timeout of 700ms ( milli-seconds )
        setTimeout(() => {
            for ( let i = 0; i < buttons.length; i++ ) {
                // remove all navigation buttons from application view
                buttons[i].style.display = 'none';
        
                // display the next application state button [ Placement( Confirm ) Button ]
                buttons[4].style.display = 'block';
            }
        }, 700);
    
    });
    
}

/*
    Overlay Data Array
        Provides the HTML overlay elements with data for assigning &
        re-arranging style values.
*/
overlayDataArray = [
    /*
        Data Array Grid Objects
            Contains an ID, section area & grid placement
            class name
    */
    {
        id : 'pnl-tl',
        section : 'top left',
        placement : 'placement-tl',
    },
    {
        id : 'pnl-tr',
        section : 'top right',
        placement : 'placement-tr',
    },
    {
        id : 'pnl-bl',
        section : 'bottom left',
        placement : 'placement-bl',
    },
    {
        id : 'pnl-br',
        section : 'bottom right',
        placement : 'placement-br',
    },
];

/*
    Placement Component : Title Placement Property Module
        A user can select an area on the front of the card to where they would
        like the title / heading to appear.

        Retrieved the placement data from the overlay data array.

        Assign the user placement variable to the data variable.

        Display the title element on the card, and place in the selected
        area that the user has chosen.

        Remove the overlay element on 'place title' confirmation.

*/

// set an [ active-panel ] data variable to an empty string
let activePanel = '';


/*
    Application State : [ Overlay Module : Placement ]

        Event : Iterate through all navigation button elements, 
                and remove them from application view.

                Confirm the title-placement data & assign
                to the postcard component preview element.

                On click, remove the overlay from application view.

                Also display the next application state button
                in the iteration [ Animate Postcard ( faceback ) ]

        State-Transition : From [ Overlay Module : Placement ( Confirm ) ==> Animate Postcard ( faceback ) ]
*/
placementButton.addEventListener('click', ()=> {

    // validate if the placement button has already been clicked
    // if (placementButton.innerHTML != 'replace title') {

    //     // if so, change the innerHTML to coencide with the correct name
    //     placementButton.innerHTML = 'replace title';

    //     // validate if the overlay is display as a grid component
    //     if (overlay.style.display != 'grid') {
    //         // if not, style the overlay with display grid
    //         overlay.style.display = 'grid';
    //     }
    // }
    // else {
    //     // revert the button back to place title
    //     placementButton.innerHTML = 'place title';
    // }
    // test data pass-through
    console.log(activePanel);

    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';

        // display the next application state button [ Animate Postcard ]
        buttons[5].style.display = 'block';
    }

    // iterate through the [ overlayDataArray ] array
    for (let i = 0; i < overlayDataArray.length; i++) {

        // set the user selected panel as the current userPlacement
        let userPlacement = overlayDataArray[i].placement;

        // validate if the active panel is equal to the data id
        if ( activePanel == overlayDataArray[i].id ) {

            // test the placement data of the user selection
            console.log('testing: ' + overlayDataArray[i].placement);

            // select the title placement element
            let titlePlacement = document.querySelector('.title-placement');
            // display the title element
            titlePlacement.style.display = 'flex';
            // assign the position class via the userplacement data variable
            titlePlacement.className = userPlacement;

            // select the [ photo-title ] element
            let cardTitle = document.querySelector('.photo-title');
            // assign the card title inner html to user title data value
            cardTitle.innerHTML = userTitle;
            // cardTitle.className = userPlacement;

            // test data array 
            console.log('active panel id == ' + overlayDataArray[i].section);

            // remove the overlay from view
            overlay.style.display = 'none';

            // display the memo form element
            memo.style.display = 'block';

            // set focus to the textarea element
            memo.focus();
        }
    }
});