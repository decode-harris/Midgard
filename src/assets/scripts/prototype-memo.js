// select the textarea [ memo ] inside the memo form element
const memo = document.querySelector('#memo');

// select the [ message-button ]
const messageButton = document.querySelector('#message-button');
// add a click event to the button
messageButton.addEventListener('click', ()=> {

    // select the address part 2 memo input element
    let address2 = document.querySelector('#address2');

    // validate if the input element value is empty or null
    if (address2.value == '' || address2.value == null) {
        // remove this input value element from the preview state
        address2.style.display = 'none';
    }

    // select the [ editing section ] element
    const editingSection = document.querySelector('#editing');

    // select the card component inside the editing section container
    let postcard = editingSection.querySelector('.postcard');

    // set the class name of the card to [ card-complete ]
    postcard.className += ' card-complete';

    // remove the message button from view
    messageButton.style.display = 'none';

    // display the [ finalize-button ] as a block-level element
    finalizeButton.style.display = 'block';

});

// function [ tabToInputElement ]
tabToInputElement = () => {

    // select & listen for the tab
    let charCode = e.which || e.keyCode;
    console.log(charCode);

}

memo.addEventListener('onkeydown', ()=> {

    return gotToFirst();
});