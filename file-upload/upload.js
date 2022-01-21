/*
    
    Digital Postcard Application
    Developed By Christopher Harris 2022

    Part 1
        1. Upload or take a photo.
        2. Attach it to the front of the card.
        3. Add a title.
        4. Select a position for the title.
        4. Change font color & style properties (basic).

*/

/*
    Upload Component : Photo Upload Module
        A user can upload an image via their personal files on any device.

        Connected the input type=file element to a traditonal button. This
        makes styling only buttons in the header more managable.

        A event listener is placed upon the [ upload-image ] app button
        which will init a function if the file upload source has been 
        changed.

        Once a file with the correct naming convention has been achieved,
        a preview of the uploaded file will become visible inside a card
        container.

        Set a timeout at the end of the function to remove all un-necessary /
        un-used elements.

*/

// select the image upload HTML form element
const upload_image = document.querySelector('#upload-image');

// set an empty variable for the uploaded image source
let uploadedImage = '';

// select the nofile HTML helper element
let nofile = document.querySelector('#nofile');

// attach an change event listener to the [ upload-image ] input element
upload_image.addEventListener('change', function() {

    // test if the [ upload-image ] value has changed
    console.log(upload_image.value);

    const reader = new FileReader(); // init the file reader method

    // attach a load event listener to the reader method
    reader.addEventListener('load', ()=> {

        // assign the reader results to the uploaded image variable
        uploadedImage = reader.result;

        // apply the results data [ reader result ] to the image preview element as a background
        document.querySelector('#preview').style.backgroundImage = `url(${ uploadedImage })`;
    });

    // obtain the data as an data URL value for the uploaded file
    reader.readAsDataURL(this.files[0]);

    // select the loader HTML element
    let loader = document.querySelector('#loader');

    // display the icon briefly while upload is in progress
    loader.style.display = 'flex';
    
    // remove the text from the nofile element
    nofile.innerHTML = ''

    // attach the loader to the nofile container element
    nofile.appendChild(loader);
    
    // set a timeout after the image has been uploaded
    setTimeout(() => {

        // that will remove the [ nofile ] helper overlay from the postcard component
        nofile.style.height = '0%';
        
    }, 200 /* 1.2 second timeout between image upload & button appearing */);

});

// select the [ upload-button ] element
const upload_button = document.querySelector('#upload-button');

// add a click event to the [ upload-button ]
upload_button.addEventListener('click', ()=> {

    // validate if the nofile is visible
    if (nofile.style.height != '100%') {
        nofile.style.height = '100%'; // re-vert element height back to default
    }

    // validate if the overlay is visible
    if (overlay.style.display == 'grid') {

        // than remove the overlay from view
        overlay.style.display == 'none';
    }
    
    // assign this event to trigger the input element
    document.querySelector('input[type="file"]').click();

    // test click event
    console.log('Event : Upload Button');

});


// function [ displayOverlayElements ] : enable visual editing element
displayOverlayElements = () => {

    // apply display : grid to the [ overlay ] element
    overlay.style.display = 'grid';

    // test overlay function
    console.log('Overlay Displayed'); 

}


/* 
    Data Component : User Form Data Analysis
        A form pop-up will alert the user to create a title.

        Attached a click event to the heading button which will enable 
        the form to become visible.

        Once the modal has been triggered, the user can enter data into
        the provided input element to create a title.

        A confirmation of the data will keep a record of the entry, than 
        promptly close the form modal.

*/

// select the title form element
let title_form = document.querySelector('#title-form');

// select the [ heading-button ] element
let headingButton = document.querySelector('#heading-button');
// set a click event on the [ heading-button ]
headingButton.addEventListener('click', ()=> {

    // which will display the title form
    title_form.style.display = 'flex';

    // test click event
    console.log('Event : Title Form');

});

// set the user title as an empty string
let userTitle = '';

// select the confirmation [ title-button ] element
let titleButton = document.querySelector('#title-button');
// click event [ title-button ] : submit title form
titleButton.addEventListener('click', (e)=> {

    // prevent default form submission
    e.preventDefault();

    // get the postcard title from the form input element
    let title = document.querySelector('#title');

    // assign the user title as the title form value
    userTitle = title.value;

    // test the form submission vale
    console.log('postcard title : ' + userTitle);

    // remove the form element from view
    title_form.style.display = 'none';

    // init function [ displayOverlayElements ]
    displayOverlayElements();

});


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
    
    });
    
}


/*
    Overlay Data Array
        Provides the HTML overlay elements with data for assigning &
        re-arranging style values.

*/
overlayDataArray = [
    
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

// select the [ placement-button ]
let placementButton = document.querySelector('#placement-button');
// click event [ placementButton ]
placementButton.addEventListener('click', ()=> {

    // validate if the placement button has already been clicked
    if (placementButton.innerHTML != 'replace title') {

        // if so, change the innerHTML to coencide with the correct name
        placementButton.innerHTML = 'replace title';

        // validate if the overlay is display as a grid component
        if (overlay.style.display != 'grid') {
            // if not, style the overlay with display grid
            overlay.style.display = 'grid';
        }
    }
    else {
        // revert the button back to place title
        placementButton.innerHTML = 'place title';
    }
    // test data pass-through
    console.log(activePanel);

    // iterate through the [ overlayDataArray ] array
    for (let i = 0; i < overlayDataArray.length; i++) {

        // set the user placement as the current chosen panel placement
        let userPlacement = overlayDataArray[i].placement;

        // validate if the active panel is equal to the data id
        if ( activePanel == overlayDataArray[i].id ) {

            console.log('testing: ' + overlayDataArray[i].placement);

            // select the title placement element
            let titlePlacement = document.querySelector('#title-placement');
            // display the title element
            titlePlacement.style.display = 'flex';
            // assign the position class via the userplacement data variable
            titlePlacement.className = userPlacement;

            // select the [ photo-title ] element
            let cardTitle = document.querySelector('.photo-title');
            // assign the card title inner html to user title data value
            cardTitle.innerHTML = userTitle;

            // test data array 
            console.log('active panel id == ' + overlayDataArray[i].section);

            // remove the overlay from view
            overlay.style.display = 'none';
        }
    }
});



/*
    Confirmation Component : Finalize Part 1
        This will confirm with the user that they are about to finalize
        the first part of making the postcard. A short preview will be
        display utilizing the entire device screen (if on mobile of tablet).

        Final preview of front of postcard.
        Remove the application header + buttons from view.
        Contain the postcard preview in a flex container
        display a confirmation/finalize button.

*/


// select the [ preview-button ]
let previewButton = document.querySelector('#preview-button');

// select the [ finalize-button]
const finalizeButton = document.querySelector('#finalize-button');
// remove the finalize-button from view
finalizeButton.style.display = 'none';

// click event [ preview-button ]
previewButton.addEventListener('click', ()=> {

    // select & remove the header element from view
    const header = document.querySelector('#header');
    header.style.display = 'none';

    // display the finalize button to the user
    finalizeButton.style.display = 'flex';




    // animate the card to spin 180 deg & show the information on the back
    // launch part 2 of application [ notes + address ]

});













