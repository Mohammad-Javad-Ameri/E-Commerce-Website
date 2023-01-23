function toggleform() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}


var logornot = false;
var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = './index.html'
}


var inps = document.getElementsByTagName("input");


var regex = {

    username:  /^[a-zA-Z0-9]+$/,
    userphone: /^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/,
    useremail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    userpassword: /^/,
    userrepassword: /^[A-Z][0-9][a-z]{4-10}$/,

}


for (var i = 0; i < inps.length; i++) {
    inps[i].addEventListener("keyup", function (e) {
        validate(e.target, regex[e.target.attributes.name.value])
    })
}

function validate(inp, reg) {


    var errore = inp.attributes.id.value;
    var errortext = document.querySelector("[for=" + errore + "]");

    // if()
    // {
    //     inp.className = "form-control is-valid"
    //     errortext.className = "text-danger"
    //     errortext.innerHTML = "plz enter string"

    // }


    if (inp.value == "") {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "reqired to fill this "
        logornot = false;

    } else if (inp.attributes.name.value == "userpassword" && inp.value.length < 8) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Password less than 8 not accepted "
        logornot = false

    } else if (inp.attributes.name.value == "useremail" && reg.test(inp.value) != true) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Enter valid email "
        logornot = false

    } else if (inp.attributes.name.value == "userphone" && reg.test(inp.value) != true) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Your Number Must Like 09123456789"
        logornot = false

    } else {

        if (reg.test(inp.value) == true) {
            inp.className = "form-control is-valid"
            errortext.innerHTML = ""
            errortext.className = ""
            logornot = true;

        } else {

            inp.className = "form-control is-invalid "
            errortext.innerHTML = "not valid"
            errortext.className = "text-danger"
            logornot = false;

        }


    }


}
function login() {
    const username = document.getElementById("usernamech").value;
    const password = document.getElementById("userpasswordch").value;

    if (logornot == true) {
     window.location.href = './index.html';
                      

    } else {
 alert("Please correct the errors in the form before submitting.");
    }
}
