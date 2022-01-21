// select the postcard title from the form input element
const title = document.querySelector('#title');

// select the [ selection-button ]
const selectionButton = document.querySelector('#selection-button');

// add a click event to the [ selection-button ]
selectionButton.addEventListener('click', (e)=> {

    // prevent default form submission
    e.preventDefault();


    // set a timeout of 1 ( one ) second 
    setTimeout(() => {
        // before displaying the title button to the user
        titleButton.style.display = 'block';    
    }, 700);

});
