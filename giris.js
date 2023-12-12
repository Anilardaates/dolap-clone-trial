// $(document).ready(function() {
//     // Check if email and password are stored in local storage
//     if (localStorage.getItem('email') && localStorage.getItem('password')) {
//         $('#email').val(localStorage.getItem('email'));
//         $('#password').val(localStorage.getItem('password'));
//         $('#rememberMe').prop('checked', true);
//     }
 
//     $('#signInForm').submit(function(e) {
//         e.preventDefault();
        
//         var email = $('#email').val();
//         var password = $('#password').val();
 
//         // Store email and password in local storage if remember me is checked
//         if ($('#rememberMe').is(':checked')) {
//             localStorage.setItem('email', email);
//             localStorage.setItem('password', password);
//         } else {
//             localStorage.removeItem('email');
//             localStorage.removeItem('password');
//         }
 
//         // Perform sign in logic here
//         // ...
 
//         alert('Sign in successful!');
//     });
// });

const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}