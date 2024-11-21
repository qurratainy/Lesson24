function validate(e)
{
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message");

let msg = '';
if (email == '')
{
    msg = "Please enter your email.";
    message.style.color = "red";
}
if (password == '')
    {
        msg = "Please enter your password.";
        message.style.color = "red";
    }

    message.innerText = msg;
}