
// select the header component
// const header = document.querySelector('#header');

// select the header un-ordered list element
const headerList = header.querySelector('.list');

// select all un-ordered list [ items ]
let headerItems = headerList.querySelectorAll('.items');

// const applicationButton = document.querySelector('#application-button');

// let startupButton = document.querySelector('#startup-button');

applicationButton.addEventListener('click', ()=> {

    // iterate through all header item elements
    for ( let i = 0; i < headerItems.length; i++ ) {

        // let loading = document.createElement('span');
        
        headerItems[0].style.background = 'limegreen';
        headerItems[0].style.color = 'white';

        console.log(headerItems[i]);
    }

    // header.appendChild(loading);
    // loading.style.width = '100%';
    // loading.style.background = 'red';
});

uploadButton.addEventListener('click', ()=> {

    // iterate through all header item elements
    for ( let i = 0; i < headerItems.length; i++ ) {

        headerItems[1].style.background = 'limegreen';
        headerItems[1].style.color = 'white';

        console.log(headerItems[i]);
    }

});

titleButton.addEventListener('click', ()=> {

    // iterate through all header item elements
    for ( let i = 0; i < headerItems.length; i++ ) {

        headerItems[2].style.background = 'limegreen';
        headerItems[2].style.color = 'white';

        console.log(headerItems[i]);
    }

});


confirmationButton.addEventListener('click', ()=> {

    // iterate through all header item elements
    for ( let i = 0; i < headerItems.length; i++ ) {

        headerItems[3].style.background = 'limegreen';
        headerItems[3].style.color = 'white';

        console.log(headerItems[i]);
    }

});


finalizeButton.addEventListener('click', ()=> {

    // iterate through all header item elements
    for ( let i = 0; i < headerItems.length; i++ ) {

        headerItems[4].style.background = 'limegreen';
        headerItems[4].style.color = 'white';

        console.log(headerItems[i]);
    }

});

previewButton.addEventListener('click', ()=> {

    // remove the header un-ordered [ list ] from application view
    headerList.style.display = 'none';

});