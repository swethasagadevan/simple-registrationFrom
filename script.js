
var registrationForm = document.getElementById("registrationForm")
var regName = document.getElementById("name")
var mail = document.getElementById("email")
var password = document.getElementById("Password")
var btnSave = document.querySelector("#btnSave")
var errormsgname = document.getElementById("errormsgname")
var errormsgmail = document.getElementById("errormsgmail")
var errormsgpwd = document.getElementById("errormsgpwd")
var regsuccess = document.getElementById("regsuccess")


var flagpwd = 0;
var flagName =0;
var flagmail=0;


// function on submit button
btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        if (flagpwd==1 && flagName==1 && flagmail==1)
        {
            regsuccess.classList.remove("text-red-600")
            regsuccess.classList.add("text-green-400")
            regsuccess.textContent="Registered successfully"
            regName.value="";
            mail.value="";
            password.value="";
            
        }
        else {
            console.log(regsuccess.classList)
            regsuccess.classList.remove("text-green-400")
            regsuccess.classList.add("text-red-400")
            regsuccess.textContent="Please fill the details..."
        }
        
})

console.log(regsuccess.classList)

//console.log(errormsgname.value,errormsgmail.value,errormsgpwd.value)
//console.log(regsuccess.classList.remove("hidden"))
// console.log(name.value)


// Function to check password
function checkPwdLength() {

    if (password.value == "") {
        errormsgpwd.textContent = "Please enter password"
        flagpwd = 0
    }
    else if (password.value.length < 6) {
        errormsgpwd.textContent = "Password must be of mininum 6 letters"
        flagpwd = 0
    }
    else {
        errormsgpwd.textContent = ""
        flagpwd = 1
    }
}
// Function to check email
function checkMail() {

    var validmail = vaild(mail)

    if (mail.value == "") {
        errormsgmail.textContent = "Please enter Email"
        flagmail=0;
    }
    else if (!validmail) {
        //console.log(validmail)
        errormsgmail.textContent = "Please enter correct mail id"
        flagmail=0;
    }
    else {
        errormsgmail.textContent = ""
        flagmail=1;
    }
}

function vaild(mail) {

    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //console.log(pattern.test(mail.value))
    return pattern.test(mail.value)

}

// Function to check name
function checkNamebox() {
    if (regName.value == "") {
        errormsgname.textContent = "Please enter name"
        flagName=0;
    }
    else {
        errormsgname.textContent = ""
        flagName=1;
    }
}

