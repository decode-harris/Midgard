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
// let nofile = document.querySelector('#nofile');

// attach an change event listener to the [ upload-image ] input element
upload_image.addEventListener('change', function() {

    // test if the [ upload-image ] value has changed
    console.log(upload_image.value);

    const reader = new FileReader(); // init the file reader method

    // attach a load event listener to the reader method
    reader.addEventListener('load', ()=> {

        // assign the reader results to the uploaded image variable
        uploadedImage = reader.result;

        /*
            apply the results data [ reader result ] to the uploading
            container postcard element as a background image
        */
        uploading.querySelector('.front').style.backgroundImage = `url(${ uploadedImage })`;

        /*
            apply the results data [ reader result ] to the heading
            container postcard element as a background image
        */
        heading.querySelector('.front').style.backgroundImage = `url(${ uploadedImage })`;

        /*
            apply the results data [ reader result ] to the placement
            container postcard face (front) element as a background image
        */
       placement.querySelector('.front').style.backgroundImage = `url(${ uploadedImage })`;

        /*
            apply the results data [ reader result ] to the preview
            container postcard face (front) element as a background image
        */
        preview.querySelector('.front').style.backgroundImage = `url(${ uploadedImage })`;
    
    });

    // obtain the data as an data URL value for the uploaded file
    reader.readAsDataURL(this.files[0]);

    // // select the loader HTML element
    // let loader = document.querySelector('#loader');

    // // display the icon briefly while upload is in progress
    // loader.style.display = 'flex';
    
    // // remove the text from the nofile element
    // nofile.innerHTML = ''

    // // attach the loader to the nofile container element
    // nofile.appendChild(loader);
    
    // // set a timeout after the image has been uploaded
    // setTimeout(() => {

    //     // that will remove the [ nofile ] helper overlay from the postcard component
    //     nofile.style.height = '0%';
        
    // }, 200 /* 1.2 second timeout between image upload & button appearing */);

});

// select the [ image-button ]
const imageButton = document.querySelector('#image-button');

// add a click event to the [ upload-button ]
imageButton.addEventListener('click', ()=> {

    // select the current postcard component inside the uploading container
    let currentPostcard = document.querySelector('#uploading .postcard');

    // validate if a photo image has been uploaded
    if (currentPostcard.style.backgroundImage != '' || currentPostcard.style.backgroundImage != null) {

        // set a 1 ( one ) second time-out
        setTimeout(() => {
            // on the inner HTML of the image button element
            imageButton.innerHTML = 're-upload';

            // select the button container from the [ uploading ] container element
            let buttonContainer = uploading.querySelector('.buttons');
            buttonContainer.style.flexDirection = 'row-reverse';
            // append the [ image-button ] to the button container
            buttonContainer.appendChild(imageButton);

            // also display the confirm button to navigation to the next application state
            uploadButton.style.display = 'block';
        }, 1000);
    
    }
    else {
        // revert the upload button innerHTML back to default
        imageButton.innerHTML = 'upload';
    }
    
    // // validate if the nofile is visible
    // if (nofile.style.height != '100%') {
    //     nofile.style.height = '100%'; // re-vert element height back to default
    // }

    // // validate if the overlay is visible
    // if (overlay.style.display == 'grid') {

    //     // than remove the overlay from view
    //     overlay.style.display == 'none';
    // }
    
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
