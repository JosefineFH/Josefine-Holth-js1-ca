const form = document.querySelector("form");
const name = document.querySelector("#name");
const outptuNameError = document.querySelector(".message")
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

// const formError = document.querySelector(".form-error");


function formValidation(event){
    event.preventDefault();
    console.log(name.value)

    outptuNameError.innerHTML = "";

    if(!lengthCheck(name.value, 0) === true){
        outptuNameError.innerHTML += `<p>You have to put in your name</p>`;
        outptuNameError.className = "errorStyle"
    }

    if(!lengthCheck(subject.value, 10) === true){
        outptuNameError.innerHTML += `<p>Subject is missing. It has to contain at least 10 characters</p>`;
    } 

    if(!emailValidation(email.value) === true){
        outptuNameError.innerHTML += `<p>Email is invalid or missing</p>`;
    } 

    if(!lengthCheck(address.value, 25) === true){
        outptuNameError.innerHTML += `<p>Your address is missing. It has to contain 25 characters</p>`;
    } else {
        outptuNameError.innerHTML = `<p>Your message has been send to us</p>`;
        outptuNameError.className = "messageStyle";
    }
}

form.addEventListener("submit", formValidation);
function emailValidation(email){
    const symbols =  /\S+@\S+\.\S+/;
    const pattern = symbols.test(email);
    return pattern;
}
function lengthCheck(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}