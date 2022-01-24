// select the un-ordered list [ colors-list ] element
const colorsList = document.querySelector('#colors-list');

// remove the colors list element from application view
colorsList.style.display = 'none';

// select all the [ colors ] elements inside the un-ordered list element
const colors = colorsList.querySelectorAll('.colors');

// const faceback = postcard.querySelector('.back');

// Application Colors Array
let hexColors = [
    // application hex color references
    red = '#E55A8E',
    blue = '#5A9FE5',
    green = '#5AE588',
    orange = '#E9A751',
    white = '#E2DCD8',
];

// iterate through all color selections
for (let i = 0; i < hexColors.length; i++) {

    // test the loop data
    console.log(colors[i]);
    
}

// function [ assign colors to list ]
assignColorsToList = () => {

    // test colors selectopn
    console.log(colors);

    // iterate through all color items
    for (let i = 0; i < colors.length; i++) {

        // set each color list element as the postcard color selection preview color
        colors.forEach(element => {element.style.backgroundColor = hexColors[i++];});
    }
}; assignColorsToList(); // init function [ assignColorsToList ]

// ForEach [ colors ] : un-ordered list
colors.forEach(element => {

    // add a click event to all list color elements
    element.addEventListener('click', ()=> {

        // change the postcard text content to white
        postcardContent.style.color = '#FFF';
        const recipientData = recipientList.querySelectorAll('li');

        for ( let i = 0; i < recipientData.length; i++ ) {
            recipientData[i].style.color = '#FFF';
        }
        
        // let back = postcard.querySelector('.back');
        // set the postcard component background color to the same color as the button
        faceBack.style.backgroundColor = element.style.backgroundColor;

        for (let i = 0; i < hexColors.length; i++) {

            let whiteRGB = 'rgb(226, 220, 216)';

            // validate if the postcard color selected is white
            if ( faceBack.style.backgroundColor == whiteRGB ) {

                // if the selected color is white, change the postcard content text to black ( visible )
                postcardContent.style.color = '#000';

                // iterate through all recipient data elements
                for ( let i = 0; i < recipientData.length; i++ ) {

                    // change the text content to black
                    recipientData[i].style.color = '#000';
                }

                // test validation method
                console.log('the postcard componet color selected is white!');
            }
            else {
                // if the selected color is not white, change the postcard content text to white ( visible )
                postcardContent.style.color = '#FFF';

                // iterate through all recipient data elements
                for ( let i = 0; i < recipientData.length; i++ ) {

                    // change the text content to white
                    recipientData[i].style.color = '#FFF';
                }
            }

            // test the loop data
            console.log(colors[i]);
        }

        // iterate through all navigation button elements
        for ( let i = 0; i < buttons.length; i++ ) {
            // remove all navigation buttons from application view
            buttons[i].style.display = 'none';

            // display the next application state button [ Preview Module Component ]
            buttons[7].style.display = 'block';
            
            // faceBack.appendChild(buttons[7]);
        }

    });
});