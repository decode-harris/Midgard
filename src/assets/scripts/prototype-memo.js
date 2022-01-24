// select the textarea [ memo ] inside the memo form element
const memo = document.querySelector('#memo');
const postcardContent = document.querySelector('#postcard-content');
postcardContent.style.display = 'none';
// select the [ message-button ]
// const messageButton = document.querySelector('#message-button');

// add a click event to the button
messageButton.addEventListener('click', ()=> {

    // select the address part 2 memo input element
    let address2 = document.querySelector('#address2');

    // validate if the input element value is empty or null
    if (address2.value == '' || address2.value == null) {
        // remove this input value element from the preview state
        address2.style.display = 'none';
    }

    // iterate through all navigation button elements
    for ( let i = 0; i < buttons.length; i++ ) {
        // remove all navigation buttons from application view
        buttons[i].style.display = 'none';
    }

    // display the color selector module
    colorsList.style.display = 'flex';

    // select the text [ sender-message ] element
    // const senderMessage = document.querySelector('#sender-message');

    senderMessage.style.display = 'flex';

    // assign the text [ sender-message ] to the form [ Form Module : Memo ] textarea value
    senderMessage.innerHTML = memo.value;

    // select the form [ Form Module : Memo ]
    const memoForm = document.querySelector('#memo-form');
    // remove the form [ Form Module : Memo ] from application view
    memoForm.style.display = 'none';

    // select the un-ordered list [ recipient-list ]
    const recipientList = faceBack.querySelector('#recipient-list');
    recipientList.style.display = 'flex';

    // select all the recipient data [ items ] placeholder elements
    let recipientData = recipientList.querySelectorAll('li');

    // display the content container [ postcard-content ]
    postcardContent.style.display = 'flex';

    // iterate through all recipient list item elements
    for ( let i = 0; i < recipientData.length; i++ ) {

        // iterate through all form [ Form Module : Memo ] input elements
        let senderInput = memoForm.querySelectorAll('input');

        // assign recipient data [ recipient-list li ] to the sender input [ Form Module : Memo ] value
        recipientData[0].innerHTML = senderInput[0].value;
        recipientData[1].innerHTML = senderInput[1].value;
        recipientData[2].innerHTML = senderInput[3].value;
        recipientData[3].innerHTML = senderInput[4].value;

    }

    faceBack.style.display = 'flex';

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