const form = document.querySelector("form");
const name = document.querySelector("#name");
const outptuNameError = document.querySelector(".message")
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");


function formValidation(event){
    event.preventDefault();
    console.log(name.value)

    outptuNameError.innerHTML = "";

    if(!lengthCheck(name.value, 0) === true){
        outptuNameError.innerHTML += `<p>You have to put in your name</p>`;
    }

    if(!lengthCheck(subject.value, 10) === true){
        outptuNameError.innerHTML += `<p>Subject is missing</p>`;
    } 

    if(!emailValidation(email.value) === true){
        outptuNameError.innerHTML += `<p>Email is invalid</p>`;
    } 

    if(!lengthCheck(address.value, 25) === true){
        outptuNameError.innerHTML += `<p>Your address is missing</p>`;
    } else {
        outptuNameError.innerHTML = `<p>Your form has been send</p>`;
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