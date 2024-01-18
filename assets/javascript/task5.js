/* Put code for the task below */

// Gain access to the HTML elements

const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submit = document.getElementById("submit");


// Add the event listener to the submit button
submit.addEventListener("click", my_function);
function my_function(){
    // Check name field
    if(fullName.value === ''){
        fullName.style.backgroundColor = "red";
    }else{
        fullName.style.backgroundColor = 'white';
    }

    // Check address Field
    if(address.value === ''){
        address.style.backgroundColor = "red";
    }else{
        address.style.backgroundColor = 'white';
    }

    if(phone.value === ''){
        phone.style.backgroundColor = "red";
    }else{
        phone.style.backgroundColor = 'white';
    }

    if(email.value === ''){
        email.style.backgroundColor = "red";
    }else{
        email.style.backgroundColor = 'white';
    }


}

/* idk why it isn't working but i got this from my javascript study, it's under nnls */
