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

// attach an change event listener to the [ upload-image ] input element
upload_image.addEventListener('change', function() {

    // test if the [ upload-image ] value has changed
    console.log(upload_image.value);

    const reader = new FileReader(); // init the file reader method

    // attach a load event listener to the reader method
    reader.addEventListener('load', ()=> {

        // assign the reader results to the uploaded image variable
        uploadedImage = reader.result;

        // apply the uploaded background image to the facefront of the postcard
        facefront.style.backgroundImage = `url(${ uploadedImage })`;
    
    });

    // obtain the data as an data URL value for the uploaded file
    reader.readAsDataURL(this.files[0]);
});

// select the [ image-button ]
const imageButton = document.querySelector('#image-button');

// add a click event to the [ upload-button ]
imageButton.addEventListener('click', ()=> {

    // validate if a photo image has been uploaded to the front of the postcard component
    if (facefront.style.backgroundImage != '' || facefront.style.backgroundImage != null) {

        // iterate through all navigation button elements
        for ( let i = 0; i < buttons.length; i++ ) {
            // remove all navigation buttons from application view
            buttons[i].style.display = 'none';
    
            // display the next application state button [ Form Module : Title ]
            buttons[2].style.display = 'block';
        }

        // select the application helper element
        let helper = document.querySelector('.helper');

        // remove the helper element from application view
        helper.style.display = 'none';

        // set a 1 ( one ) second time-out
        setTimeout(() => {
            // on the inner HTML of the image button element
            imageButton.innerHTML = 're-upload';
        }, 1000);
    
    }
    else {
        // revert the upload button innerHTML back to default
        imageButton.innerHTML = 'upload';
    }
    
    // assign this event to trigger the input element
    document.querySelector('input[type="file"]').click();

    // test click event
    console.log('Event : Upload Button');

});