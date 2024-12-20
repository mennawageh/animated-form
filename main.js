


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function validationForm() {
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var confirmpassword = document.querySelector("#confirmpassword").value;
    var error = document.querySelector(".error");
    var text = "";

    if (username.length < 3) {
        text = "Please enter a valid user name";
        error.innerText = text;
        return false;
       
    } else if (email.indexOf("@") == -1 || email.length < 10) { // Changed '&&' to '||'
        text = "Please enter a valid email";
        error.innerText = text;
        return false;
    } else if (password.length < 8 || confirmpassword.length < 8) {
        text = "Please enter a valid password";
        error.innerText = text;
        return false;
    } else {
        return true;
    }
}
function validationForm1() {

    var username1 = document.querySelector("#username1").value;
    var email1 = document.querySelector("#email1").value;
    var password1 = document.querySelector("#password1").value;
    var error1 = document.querySelector("#error1");
    var text1 = "";

    if (username1.length < 3) {
        text1 = "Please enter a valid user name";
        error1.innerText = text1;
        return false;
    } else if (email1.indexOf("@") == -1 || email1.length < 10) {
        text1 = "Please enter a valid email";
        error1.innerText = text1;
        return false;
    }
    else if (password1.length < 8) {
        text1 = "Please enter a valid password";
        error1.innerText = text1;
        return false;
    }
    else {
        return true;
    }
}



