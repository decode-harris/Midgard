

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
    let card = editingSection.querySelector('.card');

    // set the class name of the card to [ card-complete ]
    card.className += ' card-complete';

    // remove the message button from view
    messageButton.style.display = 'none';

    


});