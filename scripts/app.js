// button type submit redirect to another page
document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const emailFiled = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const passwordFiled = userPassword.value;
    if (emailFiled == 'sontan@baap.com' && passwordFiled == '12345') {
        window.location.href = "bank.html";
    } else {
        alert('Error! please input a valid data')
    }
})
// button type submit redirect to another page==2

/* document.getElementById("myButton").onclick = function () {
    location.href = "bank.html";
}; */