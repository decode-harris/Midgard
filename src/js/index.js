
// form input selectors
const rent = document.querySelector('#rent');
const cost = document.querySelector('#cost');
const bill = document.querySelector('#bill');
const shop = document.querySelector('#shop');

// form submit button selector
const submit = document.querySelector('#submit');

/*
    function [ runApp ]

    1. validate user input
    2. calculate expenses for user
    3. display user expenses via dashboard

*/
runApp = (e) => {

    // prevent form submit by default
    e.preventDefault();

    // init function [ resetErrors ]
    resetErrors();

    // form error selectors
    let error_rent = document.querySelector('#error_rent');
    let error_cost = document.querySelector('#error_cost');
    let error_bill = document.querySelector('#error_bill');
    let error_shop = document.querySelector('#error_shop');

    /*
        form validation

        requires user to complete each form input element
        if a field is incorrect, the application will use 
        helpers to direct the user to complete the form

    */
    
    
    // validate [ rent ] input value
    if (rent.value == '' || rent.value == null) {
        
        // send user an error message to help complete form
        error_rent.innerHTML = 'please choose a rent payment type';
        // focus error element to help user complete form
        rent.focus();

        // test
        console.log('error : rent type is null');
    }
    // validate [ cost ] input value
    else if (cost.value == '' || cost.value == null) {

        // send user an error message to help complete form
        error_cost.innerHTML = 'please fill in rent cost';
        // focus error element to help user complete form
        cost.focus();
        
        // test
        console.log('error : cost is null');
    }
    // validate [ bill ] input value
    else if (bill.value == '' || bill.value == null) {

        // send user an error message to help complete form
        error_bill.innerHTML = 'please fill in any bills, or use zero (0)';
        // focus error element to help user complete form
        bill.focus();
        
        // test
        console.log('error : bill is null');

    }
    // validate [ shop ] input value
    else if (shop.value == '' || shop.value == null) {

        // send user an error message to help complete form
        error_shop.innerHTML = 'please fill in groceries cost';
        // focus error element to help user complete form
        shop.focus();
        
        // test
        console.log('error : shop is null');
    }

    else {
        
        // init function [ calculateData ]
        calculateData();

    }

}

/*
    function [ resetErrors ]

    runs each time a users attempts to validate the form
    loops through the errors class
    assigns the inner html of each error to an empty string

*/
resetErrors = () => {

    // errors class selector
    let errors = document.getElementsByClassName('errors');

    // errors loop
    for (let i = 0; i < errors.length; i++) {
        
        // remove all errors from form
        errors[i].innerHTML = '';

        // test
        console.log(errors[i]);
    }

    // test
    console.log('function : reset errors initiated');

}

/*
    function [ calculateData ]

    initiated once validation has approved the form to be complete
    takes each form input value and calculates specific costs & fees
    calulcation values are moved to an array

*/
calculateData = () => {

    // week variable, assign to 4 [ 4 weeks = 1 month ]
    let week = 4;
    
    // rent calc variable, value changes on select option type
    let rentCalc;

    let rentFreq;
    
    // rent options variable, gets select options value
    let rentOptions = rent.options[document.getElementById('rent').selectedIndex].value;

    // test
    console.log(rentOptions);
    
    /*  
        validate & calculate rent payment types
        get cost value and multiply by payment type
        
    */

   // validate select option [ week ]
    if (rentOptions == 'week') {

        // assign rent frequency to 4 [ week ]
        rentFreq = 4;

        // times the rent cost by 4 [ 4 weeks = 1 month ]
        rentCalc = cost.value * week;
        
        // test
        console.log(rentCalc);
    }
    else if (rentOptions == 'fortnight') {
        
        // assign rent frequency to 2 [ fortnight ]
        rentFreq = 2;

        // times the rent cost by 2 [ 2 fortnights = 1 month ]
        rentCalc = cost.value * week;

        // test
        console.log(rentCalc);
    }
    else if (rentOptions == 'month') {

        // assign rent frequency to 1 [ month ]
        rentFreq = 1;

        // times the rent cost by 1 [ 1 month = 1 month ]
        rentCalc = cost.value * week;

        // test
        console.log(rentCalc);
    }
    else {

        // test
        console.log('calculateData : no conditions met');
        
    }

    // value type-cost variable assignments
    let rentCost = rentCalc;
    let utilCost = bill.value;
    let shopCost = shop.value;

    // test
    console.log(utilCost + shopCost + rentCost);

    // while first character of input [ bill ] is equal to zero [ 0 ]
    while(utilCost.indexOf(0) == '0') {
        
        // remove the first zero [ 0 ] from the bill value
        utilCost = utilCost.substring(1);
    }

    // parse the user input to number for math opertations
    utilCost = parseInt(bill.value);
    shopCost = parseInt(shop.value);
    

    // add together the values of rent cost, util cost & shop cost
    let totalCost = rentCost + utilCost + shopCost;
    
    // test
    console.log(totalCost);

    // list output elements
    let rentTotal = document.querySelector('.rentTotal');
    let utilTotal = document.querySelector('.utilTotal');
    let shopTotal = document.querySelector('.shopTotal');
    let calcTotal = document.querySelector('.calcTotal');
    let freqTotal = document.querySelector('.freqTotal');

    // rent type title selector
    let rentType = document.querySelector('.rentType');

    // assign rent type to rent options value
    rentType.innerHTML = rentOptions;
    
    // assign rent total to rent calc value
    rentTotal.innerHTML = rentCalc;
    
    // assign util total to util cost value
    utilTotal.innerHTML = utilCost;

    // assign shop total to shop value
    shopTotal.innerHTML = shopCost;

    // calculate total spending and assign value to calc total
    calcTotal.innerHTML = totalCost;
    
    // divide rent cost by rent frequency variable
    freqTotal.innerHTML = rentCost / rentFreq;

    let output = document.querySelector('#output');
    output.scrollIntoView();
    
    // test
    console.log('function : calculateData initiated');

    // init function [ resetFormInput ]
    // resetFormInput();

}

// event [ submit button ] : runs application function
submit.addEventListener('click', runApp);



/*
    in development
    
        use below function to reset form
        or
        removed form html element and replace with ul + values
    

*/
resetFormInput = () => {

    // reset form input values to empty string
    rent.value = '';
    cost.value = '';
    bill.value = '';
    shop.value = '';

    // test
    console.log('function : reset form input');
}

rent.addEventListener('click', ()=> {

    let options = document.getElementsByClassName('options');

    for (let i = 0; i < options.length; i++) {

        options[0].style.display = 'none';
        // test
        console.log('-1 from options list')

    }

    // test
    console.log(options);

})